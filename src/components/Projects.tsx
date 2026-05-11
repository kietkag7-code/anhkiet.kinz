import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Card3D from './Card3D';
import { scrollRevealVariants, staggerContainerVariants } from '../hooks/useScrollReveal';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce with advanced 3D product visualization, real-time updates, and seamless checkout experience.',
    gradient: 'from-blue-600/40 to-cyan-500/40',
    icon: '🛍️',
    tech: ['React', 'Three.js', 'GSAP', 'Stripe'],
  },
  {
    id: 2,
    title: 'Interactive Portfolio',
    description: 'Cinematic portfolio featuring particle systems, smooth scrolling, and stunning animations powered by Framer Motion.',
    gradient: 'from-purple-600/40 to-pink-500/40',
    icon: '🎨',
    tech: ['React', 'Framer Motion', 'Tailwind', 'Lenis'],
  },
  {
    id: 3,
    title: '3D Game Interface',
    description: 'Immersive gaming UI with real-time 3D rendering, interactive elements, and WebGL-powered visualizations.',
    gradient: 'from-orange-600/40 to-pink-500/40',
    icon: '🎮',
    tech: ['Three.js', 'WebGL', 'TypeScript', 'Babylon.js'],
  },
  {
    id: 4,
    title: 'Data Visualization Dashboard',
    description: 'Beautiful data visualizations with smooth animations, responsive charts, and real-time data updates.',
    gradient: 'from-green-600/40 to-teal-500/40',
    icon: '📊',
    tech: ['D3.js', 'React', 'Chart.js', 'Redux'],
  },
  {
    id: 5,
    title: 'AI Chat Application',
    description: 'Next-generation chat interface with AI integration, real-time messaging, and intelligent autocompletion.',
    gradient: 'from-indigo-600/40 to-purple-500/40',
    icon: '🤖',
    tech: ['Node.js', 'OpenAI', 'Socket.io', 'MongoDB'],
  },
  {
    id: 6,
    title: 'Motion Design Studio',
    description: 'Creative platform for designing animations and visual effects with an intuitive drag-and-drop interface.',
    gradient: 'from-rose-600/40 to-pink-500/40',
    icon: '✨',
    tech: ['React', 'Canvas API', 'GSAP', 'FFmpeg'],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  const containerVariants = staggerContainerVariants;

  return (
    <section id="projects" className="relative min-h-screen py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"
          animate={{
            y: [0, 100, 0],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false }}
          >
            <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              🚀 Portfolio Projects
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text">
              Featured Work
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative projects built with cutting-edge technologies and creative design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
              variants={scrollRevealVariants}
            >
              <Card3D
                title={project.title}
                description={project.description}
                icon={project.icon}
                gradient={project.gradient}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <motion.button
            className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View All Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
            />
          </motion.button>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Content */}
                <div className="backdrop-blur-md bg-gray-900/95 border border-white/10 rounded-2xl p-8">
                  {/* Close Button */}
                  <motion.button
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center hover:bg-red-500/40 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(null)}
                  >
                    ✕
                  </motion.button>

                  {/* Icon */}
                  <div className="text-6xl mb-6">{selectedProject.icon}</div>

                  {/* Title */}
                  <h3 className="text-4xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-500/50 text-sm font-medium text-gray-200"
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(168, 85, 247, 0.5)' }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.button
                      className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Live →
                    </motion.button>
                    <motion.button
                      className="flex-1 px-6 py-3 rounded-lg border border-purple-500/50 text-purple-300 font-semibold hover:bg-purple-500/10 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      See Code →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;