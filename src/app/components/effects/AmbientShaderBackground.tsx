'use client';

import { useEffect, useRef } from 'react';

export function AmbientShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId: number;
    let time = 0;

    // Ultra-slow animation function
    const animate = () => {
      time += 0.001; // Very slow time increment

      const width = canvas.width;
      const height = canvas.height;

      // Create gradient that changes over time
      const gradient = ctx.createLinearGradient(
        width * (0.5 + Math.sin(time * 0.025) * 0.5),
        height * (0.5 + Math.cos(time * 0.0375) * 0.5),
        width * (0.5 + Math.sin(time * 0.025 + Math.PI) * 0.5),
        height * (0.5 + Math.cos(time * 0.0375 + Math.PI) * 0.5)
      );

      // Spectral blue and purple colors
      const hue1 = 200 + Math.sin(time * 0.025) * 40; // Blue range (180-240)
      const hue2 = 260 + Math.cos(time * 0.0375) * 30; // Purple range (240-290)
      const hue3 = 220 + Math.sin(time * 0.075) * 50; // Mid-range

      gradient.addColorStop(0, `hsl(${hue1}, 70%, 25%)`);
      gradient.addColorStop(0.33, `hsl(${hue2}, 60%, 20%)`);
      gradient.addColorStop(0.66, `hsl(${hue3}, 65%, 22%)`);
      gradient.addColorStop(1, `hsl(${hue1 + 40}, 75%, 28%)`);

      // Fill the canvas with the animated gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add some subtle noise/texture
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 2;
        const opacity = Math.random() * 0.1;
        
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fillRect(x, y, size, size);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ display: 'block' }}
    />
  );
}

