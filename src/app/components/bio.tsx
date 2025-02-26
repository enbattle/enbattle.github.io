"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Bio() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  // Parallax effect for bio section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Typing effect for the introduction
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Hi, I'm Steven Li.";

  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.substring(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 60);

    return () => clearInterval(typingInterval);
  }, [isInView]);

  return (
    <motion.div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div style={{ y }} className="space-y-6">
        <div className="sm:h-24 lg:h-12">
          {/* Increased height from h-24 to h-32 */}
          <h1 className="text-5xl font-light text-white">
            {displayedText}
            {isTyping && (
              <span className="inline-block w-1 h-8 bg-purple-500 ml-1 animate-blink"></span>
            )}
          </h1>
        </div>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isTyping ? 0 : 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {`I'm a software engineer specializing in building exceptional digital
          experiences and applications. I love to rock climb, play tennis, and dance. Oh, and I also love food. `}
        </motion.p>

        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isTyping ? 0 : 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a
            href="mailto:listeven6691@gmail.com"
            className="px-6 py-3 rounded-md border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-colors"
          >
            Get in touch
          </a>
          <a
            href="/resume.pdf"
            className="px-6 py-3 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </motion.div>

        <motion.div
          className="flex space-x-6 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: isTyping ? 0 : 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a
            href="https://www.github.com/enbattle"
            className="hover:text-white transition-colors"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/stevenli44"
            className="hover:text-white transition-colors"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/stevenli44"
            className="hover:text-white transition-colors"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        ref={imageRef}
        className="relative h-[450px] md:h-[500px] w-full rounded-lg overflow-hidden"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: isInView ? 1 : 0.9, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 z-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 border border-white/10 z-20 rounded-lg"></div>
        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black relative">
          {/* Placeholder for profile image
          <div className="absolute inset-0 flex items-center justify-center text-purple-400 opacity-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          */}
          <Image
            src="./profile.png"
            alt="Your Name"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            className="opacity-100"
          />

          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-20 h-20 border border-purple-500/20 rounded-full"></div>
          <div className="absolute bottom-8 right-8 w-32 h-32 border border-blue-500/20 rounded-full"></div>
        </div>
      </motion.div>
    </motion.div>
  );
}
