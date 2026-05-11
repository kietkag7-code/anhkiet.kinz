import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    year: '2023',
    title: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    description: 'Led development of interactive web applications using React and Three.js.',
  },
  {
    year: '2021',
    title: 'UI/UX Designer',
    company: 'Creative Studio',
    description: 'Designed user interfaces and created motion graphics for various projects.',
  },
  {
    year: '2019',
    title: 'Junior Developer',
    company: 'StartupXYZ',
    description: 'Developed responsive websites and learned modern web technologies.',
  },
  {
    year: '2018',
    title: 'Intern',
    company: 'Digital Agency',
    description: 'Assisted in web development projects and learned industry best practices.',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={ref} className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Experience Timeline
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-pink-500 h-full">
            <motion.div
              className="w-full bg-gradient-to-b from-cyan-400 to-purple-500"
              style={{ height }}
            />
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
                  <div className="text-purple-400 font-semibold text-lg mb-2">{exp.year}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{exp.title}</h3>
                  <div className="text-cyan-400 mb-3">{exp.company}</div>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;