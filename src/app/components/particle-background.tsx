"use client";

import { useRef, useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
};

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Particle[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create smooth motion for mouse tracking
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles
    const createParticles = () => {
      particles.current = [];
      const particleCount = Math.min(Math.floor(window.innerWidth * 0.05), 100);

      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    createParticles();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let animationFrameId: number;

    const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentMouseX = smoothMouseX.get();
      const currentMouseY = smoothMouseY.get();

      // Draw particles and connections
      particles.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Mouse influence (slight push away from cursor)
        const mouseDistance = getDistance(
          particle.x,
          particle.y,
          currentMouseX,
          currentMouseY
        );
        const mouseInfluenceRadius = 150;

        if (mouseDistance < mouseInfluenceRadius) {
          const force = (mouseInfluenceRadius - mouseDistance) / 1500;
          const angle = Math.atan2(
            particle.y - currentMouseY,
            particle.x - currentMouseX
          );
          particle.speedX += Math.cos(angle) * force;
          particle.speedY += Math.sin(angle) * force;

          // Limit max speed
          const maxSpeed = 1.5;
          const speed = Math.sqrt(
            particle.speedX * particle.speedX +
              particle.speedY * particle.speedY
          );
          if (speed > maxSpeed) {
            particle.speedX = (particle.speedX / speed) * maxSpeed;
            particle.speedY = (particle.speedY / speed) * maxSpeed;
          }
        }

        // Apply friction
        particle.speedX *= 0.98;
        particle.speedY *= 0.98;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 220, 255, ${particle.opacity})`;
        ctx.fill();

        // Draw connections between nearby particles
        for (let j = i + 1; j < particles.current.length; j++) {
          const otherParticle = particles.current[j];
          const distance = getDistance(
            particle.x,
            particle.y,
            otherParticle.x,
            otherParticle.y
          );
          const maxDistance = 120;

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);

            const opacity = (1 - distance / maxDistance) * 0.2;
            ctx.strokeStyle = `rgba(180, 180, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY, smoothMouseX, smoothMouseY]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        background: "radial-gradient(circle at center, #13111c, #050505)",
      }}
    />
  );
}
