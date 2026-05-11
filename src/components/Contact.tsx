import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in new opportunities and exciting projects.
                Let's discuss how we can create something amazing together.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    📧
                  </div>
                  <span>hello@anhkiet.dev</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    📱
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    📍
                  </div>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div>
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>
              <div>
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>
              <div>
                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold text-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Send Message</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;