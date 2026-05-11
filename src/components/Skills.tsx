import { motion } from 'framer-motion';
import { useState } from 'react';

const skills = [
  { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
  { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
  { name: 'Three.js', level: 85, color: 'from-purple-500 to-pink-500' },
  { name: 'Framer Motion', level: 92, color: 'from-pink-500 to-rose-500' },
  { name: 'GSAP', level: 88, color: 'from-green-500 to-teal-500' },
  { name: 'Tailwind CSS', level: 95, color: 'from-cyan-500 to-blue-500' },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-center">{skill.name}</h3>
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                    <motion.div
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 2, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
              </div>

              {hoveredSkill === skill.name && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Floating 3D elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [0, 1, 0],
                rotate: 360,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;