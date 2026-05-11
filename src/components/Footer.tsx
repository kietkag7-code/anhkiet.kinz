import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: '🐦', name: 'Twitter', url: '#' },
    { icon: '💼', name: 'LinkedIn', url: '#' },
    { icon: '📘', name: 'Facebook', url: '#' },
    { icon: '📷', name: 'Instagram', url: '#' },
    { icon: '🐙', name: 'GitHub', url: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.h3
            className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Create Something Amazing
          </motion.h3>

          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center text-xl hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            className="text-gray-400 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            © 2024 Anh Kiet. All rights reserved.
          </motion.p>

          <motion.p
            className="text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Built with ❤️ using React, Framer Motion & Tailwind CSS
          </motion.p>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -20, null],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;