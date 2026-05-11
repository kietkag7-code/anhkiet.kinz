import { useEffect, useRef } from 'react';

interface SoundEffectProps {
  sound: 'click' | 'hover' | 'success';
  play: boolean;
}

const SoundEffect = ({ sound, play }: SoundEffectProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Ignore autoplay errors
      });
    }
  }, [play]);

  const playTone = (frequency: number, duration: number) => {
    if (typeof window !== 'undefined' && window.AudioContext) {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    }
  };

  useEffect(() => {
    if (play) {
      switch (sound) {
        case 'click':
          playTone(800, 0.1);
          break;
        case 'hover':
          playTone(600, 0.05);
          break;
        case 'success':
          playTone(1000, 0.2);
          break;
      }
    }
  }, [play, sound]);

  return null; // No audio element needed, using Web Audio API
};

export default SoundEffect;