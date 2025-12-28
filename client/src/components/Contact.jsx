import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post(
        'http://localhost:5000/api/contact',
        formData
      );

      if (response.data.success) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! We will get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-dark-surface">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <p className="font-body text-primary uppercase tracking-[0.3em] mb-4">Get In Touch</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">CONTACT US</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-3xl text-foreground mb-6">LET'S CREATE SOMETHING BOLD</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Ready to transform your brand? We'd love to hear about your project. 
                Drop us a line and let's start a conversation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="font-body text-foreground">hello@boldstudio.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground uppercase tracking-wider">Phone</p>
                  <p className="font-body text-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="font-body text-foreground">New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {status.message && (
              <div
                className={`p-4 rounded-lg ${
                  status.type === 'success'
                    ? 'bg-green-500/10 border border-green-500 text-green-500'
                    : 'bg-red-500/10 border border-red-500 text-red-500'
                }`}
              >
                {status.message}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block font-body text-sm text-muted-foreground uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-body text-sm text-muted-foreground uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-body text-sm text-muted-foreground uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell us about your project..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-body font-medium rounded-lg hover:bg-primary/90 transition-all shadow-orange disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="ml-2 w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;