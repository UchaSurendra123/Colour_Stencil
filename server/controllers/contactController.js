// const Contact = require('../models/Contact');

// // @desc    Submit contact form
// // @route   POST /api/contact
// // @access  Public
// exports.submitContact = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     // Validation
//     if (!name || !email || !message) {
//       return res.status(400).json({
//         success: false,
//         message: 'Please provide all required fields',
//       });
//     }

//     // Get IP address
//     const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

//     // Create contact
//     const contact = await Contact.create({
//       name,
//       email,
//       message,
//       ipAddress,
//     });

//     res.status(201).json({
//       success: true,
//       message: 'Thank you for your message! We will get back to you soon.',
//       data: {
//         id: contact._id,
//         name: contact.name,
//         email: contact.email,
//       },
//     });
//   } catch (error) {
//     console.error('Contact submission error:', error);
    
//     if (error.name === 'ValidationError') {
//       const messages = Object.values(error.errors).map(err => err.message);
//       return res.status(400).json({
//         success: false,
//         message: messages.join(', '),
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message: 'Failed to submit contact form. Please try again later.',
//     });
//   }
// };

// // @desc    Get all contacts (admin only - add auth middleware in production)
// // @route   GET /api/contact
// // @access  Private
// exports.getAllContacts = async (req, res) => {
//   try {
//     const contacts = await Contact.find().sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: contacts.length,
//       data: contacts,
//     });
//   } catch (error) {
//     console.error('Get contacts error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Failed to retrieve contacts',
//     });
//   }
// };













const Contact = require('../models/Contact');
const { sendContactNotification, sendAutoReply } = require('../config/emailService');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields',
      });
    }

    // Get IP address
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // Create contact in database
    const contact = await Contact.create({
      name,
      email,
      message,
      ipAddress,
    });

    // Send email notification to admin (you)
    const emailResult = await sendContactNotification({
      name,
      email,
      message,
    });

    // Send auto-reply to user
    await sendAutoReply({
      name,
      email,
      message,
    });

    // Response
    res.status(201).json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
      },
      emailSent: emailResult.success,
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', '),
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form. Please try again later.',
    });
  }
};

// @desc    Get all contacts (admin only - add auth middleware in production)
// @route   GET /api/contact
// @access  Private
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve contacts',
    });
  }
};