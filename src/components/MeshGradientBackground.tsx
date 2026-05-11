import { useEffect, useRef } from 'react';

const MeshGradientBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    interface GradientBlob {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }

    // Create animated gradient blobs
    const blobs: GradientBlob[] = [
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.3,
        vx: 0.3,
        vy: 0.2,
        radius: 200,
        color: 'rgba(139, 92, 246, 0.3)', // purple
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.2,
        vx: -0.2,
        vy: 0.4,
        radius: 250,
        color: 'rgba(59, 130, 246, 0.3)', // blue
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.8,
        vx: 0.1,
        vy: -0.3,
        radius: 220,
        color: 'rgba(236, 72, 153, 0.3)', // pink
      },
      {
        x: canvas.width * 0.3,
        y: canvas.height * 0.7,
        vx: -0.15,
        vy: -0.1,
        radius: 180,
        color: 'rgba(34, 197, 94, 0.2)', // green
      },
    ];

    let animationId: number;

    const animate = () => {
      // Clear canvas with semi-transparent black for trail effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw blobs
      blobs.forEach((blob) => {
        // Update position
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Bounce off edges
        if (blob.x - blob.radius < 0 || blob.x + blob.radius > canvas.width) {
          blob.vx *= -1;
        }
        if (blob.y - blob.radius < 0 || blob.y + blob.radius > canvas.height) {
          blob.vy *= -1;
        }

        // Draw radial gradient
        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        );
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(
          blob.x - blob.radius,
          blob.y - blob.radius,
          blob.radius * 2,
          blob.radius * 2
        );
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default MeshGradientBackground;
