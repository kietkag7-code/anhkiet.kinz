import { motion } from 'framer-motion';
import { useState } from 'react';
import { useScrollReveal, staggerContainerVariants, staggerItemVariants } from '../hooks/useScrollReveal';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'TypeScript', level: 90, icon: '📘' },
      { name: 'Tailwind CSS', level: 95, icon: '🎨' },
      { name: 'Framer Motion', level: 92, icon: '✨' },
    ],
  },
  {
    category: '3D & Animation',
    skills: [
      { name: 'Three.js', level: 85, icon: '🎯' },
      { name: 'GSAP', level: 88, icon: '🚀' },
      { name: 'Canvas API', level: 80, icon: '🖼️' },
      { name: 'WebGL', level: 75, icon: '🌐' },
    ],
  },
  {
    category: 'Tools & Tech',
    skills: [
      { name: 'Vite', level: 90, icon: '⚡' },
      { name: 'Git', level: 92, icon: '🔧' },
      { name: 'UI/UX Design', level: 88, icon: '🎭' },
      { name: 'Performance', level: 85, icon: '📊' },
    ],
  },
];

interface SkillItem {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.3 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const containerVariants = staggerContainerVariants;
  const itemVariants = staggerItemVariants;

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-10"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div
          ref={titleRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={titleVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              💡 Technical Stack
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text">
              Skills & Expertise
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Proficient in modern web technologies, 3D graphics, and creative coding
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {skillCategories.map((category: SkillCategory, categoryIndex: number) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="group"
            >
              <div className="relative h-full">
                {/* Glow background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Card */}
                <div className="relative h-full backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                  {/* Category Icon */}
                  <motion.div
                    className="text-4xl mb-4"
                    initial={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    {categoryIndex === 0 && '⚙️'}
                    {categoryIndex === 1 && '🎨'}
                    {categoryIndex === 2 && '🛠️'}
                  </motion.div>

                  {/* Category Title */}
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {category.category}
                  </h3>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                          </div>
                          <motion.span
                            className="text-sm font-semibold text-purple-400"
                            animate={hoveredSkill === skill.name ? { scale: 1.1 } : { scale: 1 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1.5,
                              delay: 0.2 + skillIndex * 0.1,
                              ease: 'easeOut',
                            }}
                            whileHover={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)' }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Stats */}
        <motion.div
          className="relative mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { label: 'Projects Completed', value: '50+', icon: '🎯' },
              { label: 'Technologies', value: '15+', icon: '⚡' },
              { label: 'Satisfaction Rate', value: '100%', icon: '⭐' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -5, borderColor: 'rgba(168, 85, 247, 0.5)' }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;