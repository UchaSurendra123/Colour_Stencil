const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Send email notification when contact form is submitted
const sendContactNotification = async (contactData) => {
  try {
    const transporter = createTransporter();

    // Email to admin (you)
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission - ${contactData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #ff6b35, #ff8c42); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .header h1 { margin: 0; font-size: 28px; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #ff6b35; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; }
            .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #ff6b35; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎨 New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0;">BOLD Studio Website</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${contactData.name}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${contactData.email}">${contactData.email}</a></div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="value">${contactData.message.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="field">
                <div class="label">Submitted At</div>
                <div class="value">${new Date().toLocaleString()}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from your BOLD Studio website contact form.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return { success: false, error: error.message };
  }
};

// Send auto-reply to the person who submitted the form
const sendAutoReply = async (contactData) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: contactData.email,
      subject: 'Thank you for contacting BOLD Studio',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #ff6b35, #ff8c42); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .header h1 { margin: 0; font-size: 28px; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; padding: 12px 30px; background: #ff6b35; color: white; text-decoration: none; border-radius: 5px; margin-top: 20px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You, ${contactData.name}! 🎨</h1>
            </div>
            <div class="content">
              <p>Hi ${contactData.name},</p>
              <p>Thank you for reaching out to BOLD Studio! We've received your message and our team will get back to you within 24-48 hours.</p>
              <p><strong>Your message:</strong></p>
              <div style="background: white; padding: 15px; border-left: 3px solid #ff6b35; margin: 15px 0;">
                ${contactData.message.replace(/\n/g, '<br>')}
              </div>
              <p>We're excited to learn more about your project and explore how we can help bring your vision to life.</p>
              <p>Best regards,<br><strong>The BOLD Studio Team</strong></p>
            </div>
            <div class="footer">
              <p>BOLD Studio | Creative Design Agency</p>
              <p>New York, NY | hello@boldstudio.com</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Auto-reply sent to:', contactData.email);
    return { success: true };
  } catch (error) {
    console.error('❌ Auto-reply failed:', error);
    return { success: false, error: error.message };
  }
};

module.exports = {
  sendContactNotification,
  sendAutoReply,
};