import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // 1️⃣ Dërgo emailin e parë te ti (Contact Us template)
      await emailjs.send(
        'service_cwcfd5n',
        'template_366esvk',
        {
          from_name: formData.name,      // përputhet me {{from_name}}
          from_email: formData.email,    // përputhet me {{from_email}}
          subject: formData.subject,     // përputhet me {{subject}}
          message: formData.message,     // përputhet me {{message}}
        },
        'dR3nWS0ZDg1fz_n7S'
      );


      // 2️⃣ Dërgo auto-reply email te personi që e dërgon
      await emailjs.send(
  'service_cwcfd5n',
  'template_vvxaqvd', // Auto-reply template
  {
    from_name: formData.name,
    from_email: formData.email,
  },
  'dR3nWS0ZDg1fz_n7S'
);


      // ✅ Në fund: pastro formularin
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      console.error('Email send error:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'bleronatmava12@gmail.com',
      link: 'mailto:bleronatmava12@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+383 49 119 324',
      link: 'tel:+38349119324'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Mitrovice',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-600/20 border border-green-500/30 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-green-400">Message sent successfully!</span>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-600/20 border border-red-500/30 rounded-lg flex items-center space-x-3">
                  <span className="text-red-400">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors duration-200"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span className='cursor-pointer'>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's connect</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, creative projects, 
                  or potential collaborations. Feel free to reach out through any of 
                  the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, title, value, link }) => (
                  <a
                    key={title}
                    href={link}
                    className="group flex items-center space-x-4 p-4 bg-gray-900/30 rounded-lg hover:bg-gray-900/50 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                        {title}
                      </p>
                      <p className="text-white font-medium group-hover:text-indigo-400 transition-colors duration-200">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg border border-green-500/30">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Available for new projects</span>
                </div>
                <p className="text-gray-300 text-sm">
                  I'm currently accepting new client work and interesting project collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
