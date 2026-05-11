import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface ThemeColorChangerProps {
  onColorChange: (color: string) => void;
}

const colors = [
  { name: 'Purple', value: 'purple', gradient: 'from-purple-500 to-pink-500' },
  { name: 'Blue', value: 'blue', gradient: 'from-blue-500 to-cyan-500' },
  { name: 'Green', value: 'green', gradient: 'from-green-500 to-teal-500' },
  { name: 'Red', value: 'red', gradient: 'from-red-500 to-pink-500' },
  { name: 'Orange', value: 'orange', gradient: 'from-orange-500 to-yellow-500' },
];

const ThemeColorChanger = ({ onColorChange }: ThemeColorChangerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-24 right-6 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          🎨
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            className="absolute top-16 right-0 bg-gray-800 dark:bg-gray-900 rounded-xl p-4 shadow-xl border border-gray-700"
          >
            <h3 className="text-white text-sm font-semibold mb-3">Theme Colors</h3>
            <div className="grid grid-cols-5 gap-2">
              {colors.map((color, index) => (
                <motion.button
                  key={color.value}
                  onClick={() => onColorChange(color.value)}
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${color.gradient} shadow-lg hover:shadow-xl transition-all duration-200`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  title={color.name}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeColorChanger;