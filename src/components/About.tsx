import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          style={{ y }}
        >
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full overflow-hidden shadow-2xl">
              {/* Placeholder for image */}
              <div className="w-full h-full bg-gray-700 flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 md:pl-12"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg mb-4 text-gray-300">
            I'm a passionate creative developer with over 5 years of experience in crafting stunning digital experiences.
            I specialize in frontend development, UI/UX design, and interactive web animations.
          </p>
          <p className="text-lg mb-6 text-gray-300">
            My goal is to create websites that not only look beautiful but also provide exceptional user experiences
            that leave a lasting impression.
          </p>
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;