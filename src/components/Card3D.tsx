import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface Card3DProps {
  title: string;
  description: string;
  icon?: string;
  gradient: string;
  href?: string;
}

const Card3D = ({ title, description, icon, gradient, href }: Card3DProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-80 rounded-2xl cursor-pointer group"
      style={{
        rotateX: isHovering ? rotateX : 0,
        rotateY: isHovering ? rotateY : 0,
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Outer glow */}
      <motion.div
        className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${gradient}`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.5 }}
      />

      {/* Main card */}
      <div className={`relative w-full h-full rounded-2xl p-6 backdrop-blur-md border border-white/10 overflow-hidden shadow-xl transition-all duration-300 ${gradient}`}>
        {/* Animated background shimmer */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-30"
          initial={{ opacity: 0 }}
          animate={{
            backgroundImage: [
              'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
              'linear-gradient(135deg, transparent, rgba(255,255,255,0.2), transparent)',
            ],
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          {/* Icon and title */}
          <div className="z-10">
            {icon && <div className="text-4xl mb-4">{icon}</div>}
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          </div>

          {/* Description */}
          <div className="z-10">
            <p className="text-sm text-gray-200 leading-relaxed mb-4">
              {description}
            </p>

            {href && (
              <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-white bg-white/20 px-4 py-2 rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                Xem thêm →
              </motion.a>
            )}
          </div>
        </div>

        {/* Border highlight on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          animate={isHovering ? { opacity: 1 } : { opacity: 0 }}
          style={{
            borderImage: 'linear-gradient(135deg, rgba(255,255,255,0.5), transparent) 1',
          }}
        />
      </div>
    </motion.div>
  );
};

export default Card3D;
