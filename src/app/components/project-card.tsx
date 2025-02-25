"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
  index: number;
};

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  github,
  index,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D tilt effect values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animations
  const springConfig = { damping: 25, stiffness: 400 };
  const rotateX = useSpring(
    useTransform(y, [-100, 100], [10, -10]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(x, [-100, 100], [-10, 10]),
    springConfig
  );
  const translateZ = useSpring(
    useTransform(y, [-100, 100], [10, 0]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    x.set(mouseX);
    y.set(mouseY);
  };

  const resetCard = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative h-[400px] rounded-xl overflow-hidden bg-gray-900/40 border border-gray-800 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        translateZ,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetCard();
      }}
    >
      {/* Project Image */}
      <div className="absolute inset-0 z-0 transition-transform duration-500 ease-out transform-gpu group-hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
        <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-blue-900/30">
          {/* Placeholder for project image */}
          <div className="absolute inset-0 flex items-center justify-center text-purple-400 opacity-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
            className="opacity-60"
          />
        </div>
      </div>

      {/* Content */}
      <div
        className="relative h-full flex flex-col justify-end p-6 z-20 transform-gpu"
        style={{ transform: "translateZ(50px)" }}
      >
        <div className="mb-2 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-medium mb-2">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>

        <div className="flex space-x-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 transition-colors text-sm"
          >
            View Project
          </a>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-colors text-sm"
            >
              View Code
            </a>
          )}
        </div>
      </div>

      {/* Shine effect on hover */}
      {isHovered && (
        <div
          className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"
          style={{
            backgroundPosition: `${x.get() / 5 + 50}% ${y.get() / 5 + 50}%`,
            backgroundSize: "200% 200%",
          }}
        />
      )}
    </motion.div>
  );
}
