import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SkillBarProps {
  label: string;
  percentage: number;
  icon?: string;
  delay?: number;
}

const SkillBar = ({ label, percentage, icon, delay = 0 }: SkillBarProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="mb-8"
      initial={{ opacity: 0, x: -50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Label */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {icon && <span className="text-2xl">{icon}</span>}
          <label className="text-gray-200 font-semibold">{label}</label>
        </div>
        <motion.span
          className="text-purple-400 font-bold"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        >
          {isVisible && (
            <motion.span initial={{ x: -10 }} animate={{ x: 0 }}>
              {percentage}%
            </motion.span>
          )}
        </motion.span>
      </div>

      {/* Bar Background */}
      <div className="relative h-3 bg-white/5 rounded-full overflow-hidden border border-white/10">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          transition={{ delay: 0.3 }}
        />

        {/* Progress Bar */}
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative overflow-hidden shadow-lg shadow-purple-500/50"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : { width: 0 }}
          transition={{
            duration: 1.5,
            delay,
            ease: 'easeOut',
          }}
        >
          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      </div>

      {/* Label under bar */}
      <motion.div
        className="mt-1 text-xs text-gray-500"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: delay + 0.5 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

export default SkillBar;
