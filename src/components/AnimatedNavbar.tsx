import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';

const AnimatedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.8)']
  );

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 hidden md:flex items-center justify-between px-8 py-6 backdrop-blur-md border-b border-white/10"
        style={{ backgroundColor: navBackground }}
      >
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 through-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          AK
        </motion.div>

        {/* Navigation Items */}
        <motion.div
          className="flex gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              variants={itemVariants}
            >
              {item.label}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hire Me
        </motion.button>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 flex md:hidden items-center justify-between px-4 py-4 backdrop-blur-md bg-black/50 border-b border-white/10"
      >
        {/* Logo */}
        <motion.div
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.1 }}
        >
          AK
        </motion.div>

        {/* Hamburger Menu */}
        <motion.button
          className="flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-6 h-0.5 bg-white"
              animate={isOpen ? {
                rotate: i === 0 ? 45 : i === 1 ? -45 : 0,
                y: i === 0 ? 8 : i === 1 ? -8 : 0,
                opacity: i === 2 ? 0 : 1,
              } : { rotate: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className="fixed top-16 left-0 right-0 z-30 md:hidden bg-black/95 border-b border-white/10 backdrop-blur-md"
        initial={{ opacity: 0, height: 0 }}
        animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors duration-300 py-2"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: i * 0.1 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button
            className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold"
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default AnimatedNavbar;
