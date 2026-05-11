import { motion } from 'framer-motion';

const galleryImages = [
  'https://via.placeholder.com/400x300/4f46e5/ffffff?text=Design+1',
  'https://via.placeholder.com/400x300/7c3aed/ffffff?text=Design+2',
  'https://via.placeholder.com/400x300/ec4899/ffffff?text=Design+3',
  'https://via.placeholder.com/400x300/10b981/ffffff?text=Design+4',
  'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Design+5',
  'https://via.placeholder.com/400x300/ef4444/ffffff?text=Design+6',
  'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Design+7',
  'https://via.placeholder.com/400x300/06b6d4/ffffff?text=Design+8',
  'https://via.placeholder.com/400x300/84cc16/ffffff?text=Design+9',
];

const Gallery = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Creative Showcase
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-semibold mb-2">Creative Design {index + 1}</h3>
                  <p className="text-gray-300 text-sm">Interactive digital artwork</p>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 rounded-xl transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;