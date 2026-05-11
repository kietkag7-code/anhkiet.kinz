import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';
import ThemeColorChanger from './components/ThemeColorChanger';
import EasterEgg from './components/EasterEgg';
import AnimatedNavbar from './components/AnimatedNavbar';
import MeshGradientBackground from './components/MeshGradientBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [themeColor, setThemeColor] = useState('purple');

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.setAttribute('data-theme', themeColor);
  }, [isDark, themeColor]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  const handleColorChange = (color: string) => {
    setThemeColor(color);
  };

  return (
    <div className={`App ${isDark ? 'dark' : 'light'} theme-${themeColor}`}>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Background */}
          <MeshGradientBackground />
          
          {/* UI Components */}
          <CustomCursor />
          <AnimatedNavbar />
          <ThemeToggle isDark={isDark} onToggle={handleThemeToggle} />
          <ThemeColorChanger onColorChange={handleColorChange} />
          <EasterEgg />
          
          {/* Main Content */}
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Gallery />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
