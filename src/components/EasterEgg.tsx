import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import SoundEffect from './SoundEffect';

const EasterEgg = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [showKonami, setShowKonami] = useState(false);
  const [playSound, setPlaySound] = useState<'click' | 'hover' | 'success' | null>(null);
  // @ts-ignore - Used for tracking state internally
  const [, setClickCount] = useState(0);
  // @ts-ignore - Used for tracking state internally
  const [, setKonamiCode] = useState<string[]>([]);

  const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKonamiCode(prev => {
        const newCode = [...prev, e.code].slice(-10);
        if (newCode.join(',') === konamiSequence.join(',')) {
          setShowKonami(true);
          setPlaySound('success');
          setTimeout(() => setShowKonami(false), 3000);
          return [];
        }
        return newCode;
      });
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLogoClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1;
      setPlaySound('click');
      if (newCount >= 10) {
        setShowEasterEgg(true);
        setPlaySound('success');
        setTimeout(() => setShowEasterEgg(false), 5000);
        return 0;
      }
      return newCount;
    });
  };

  return (
    <>
      <SoundEffect sound={playSound || 'click'} play={playSound !== null} />

      {/* Hidden clickable area in footer */}
      <div
        className="fixed bottom-4 left-4 w-16 h-16 cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300"
        onClick={handleLogoClick}
        onMouseEnter={() => setPlaySound('hover')}
        title="Click me 10 times!"
      />

      {/* Easter egg modal */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setShowEasterEgg(false)}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              className="text-center text-white"
            >
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold mb-2">You found the Easter Egg!</h2>
              <p className="text-gray-300">Thanks for exploring! 🚀</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Konami code effect */}
      <AnimatePresence>
        {showKonami && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg z-50"
          >
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🎮</span>
              <span className="font-semibold">Konami Code Activated!</span>
              <span className="text-2xl">🎮</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EasterEgg;