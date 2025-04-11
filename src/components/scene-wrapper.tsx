"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import React from "react";

// Add this custom hook for typing animation
function useTypingAnimation(
  texts: string[],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000
) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      } else {
        const timer = setTimeout(() => {
          setCurrentText(currentFullText.substring(0, currentText.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timer);
      }
    } else {
      if (currentText === currentFullText) {
        setIsPaused(true);
      } else {
        const timer = setTimeout(() => {
          setCurrentText(currentFullText.substring(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timer);
      }
    }
  }, [
    currentText,
    currentTextIndex,
    isDeleting,
    isPaused,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return currentText;
}

// Create a separate component for the typing text to prevent re-renders of the background
const TypingText = React.memo(({ text }: { text: string }) => {
  return (
    <p className="text-xl md:text-2xl text-white/90 drop-shadow-md min-h-[2rem]">
      {text}
      <span className="inline-block w-1 h-5 ml-1 bg-white/90 animate-pulse"></span>
    </p>
  );
});

TypingText.displayName = "TypingText";

// Create a separate component for the background scene
const BackgroundScene = React.memo(
  ({ isDarkMode }: { isDarkMode: boolean }) => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Background - Park scene with gradient overlay */}
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-b from-blue-900/30 to-green-900/30"
              : "bg-gradient-to-b from-blue-400/30 to-green-400/30"
          } backdrop-blur-sm`}
        />

        {/* Animated clouds */}
        <div
          className={`absolute top-[10%] left-[5%] w-24 h-12 ${
            isDarkMode ? "bg-gray-700" : "bg-white"
          } rounded-full opacity-70 animate-float-slow`}
        />
        <div
          className={`absolute top-[15%] left-[25%] w-32 h-16 ${
            isDarkMode ? "bg-gray-700" : "bg-white"
          } rounded-full opacity-80 animate-float-medium`}
        />
        <div
          className={`absolute top-[8%] right-[15%] w-28 h-14 ${
            isDarkMode ? "bg-gray-700" : "bg-white"
          } rounded-full opacity-75 animate-float-fast`}
        />

        {/* Tree */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full flex items-end justify-center">
          {/* Tree trunk */}
          <motion.div
            initial={{ scaleY: 0.8, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`absolute bottom-0 w-16 md:w-24 h-[30%] ${
              isDarkMode
                ? "bg-gradient-to-t from-amber-900 to-amber-800"
                : "bg-gradient-to-t from-amber-800 to-amber-700"
            } rounded-t-lg z-10`}
          />

          {/* Tree foliage */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`absolute bottom-[28%] left-1/2 transform -translate-x-1/2 w-[80%] md:w-[60%] h-[40%] ${
              isDarkMode
                ? "bg-gradient-to-b from-green-800 to-green-700"
                : "bg-gradient-to-b from-green-700 to-green-600"
            } rounded-[50%] z-20`}
          />

          {/* Anime boy character */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center"
          >
            {/* Character */}
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              {/* Head */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 bg-[#FFE0BD] rounded-full z-10">
                {/* Eyes */}
                <div className="absolute top-[40%] left-[25%] w-3 h-4 bg-black rounded-full"></div>
                <div className="absolute top-[40%] right-[25%] w-3 h-4 bg-black rounded-full"></div>

                {/* Mouth */}
                <div className="absolute bottom-[30%] left-1/2 transform -translate-x-1/2 w-6 h-2 bg-red-400 rounded-full"></div>

                {/* Hair */}
                <div className="absolute top-[-10%] left-0 w-full h-[40%] bg-[#663931] rounded-t-full"></div>
                <div className="absolute top-[-5%] left-[10%] w-4 h-10 bg-[#663931] rounded-md transform rotate-[-20deg]"></div>
                <div className="absolute top-[-5%] right-[10%] w-4 h-10 bg-[#663931] rounded-md transform rotate-[20deg]"></div>
              </div>

              {/* Body */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-24 md:w-28 md:h-28">
                {/* Shirt */}
                <div className="absolute top-0 left-0 w-full h-[70%] bg-blue-500 rounded-t-lg"></div>

                {/* Arms */}
                <div className="absolute top-[20%] left-[-20%] w-6 h-16 bg-[#FFE0BD] rounded-full transform rotate-[20deg]"></div>
                <div className="absolute top-[20%] right-[-20%] w-6 h-16 bg-[#FFE0BD] rounded-full transform rotate-[-20deg]"></div>

                {/* Legs */}
                <div className="absolute bottom-0 left-[15%] w-8 h-12 bg-gray-700 rounded-b-lg"></div>
                <div className="absolute bottom-0 right-[15%] w-8 h-12 bg-gray-700 rounded-b-lg"></div>
              </div>

              {/* Laptop */}
              <motion.div
                animate={{
                  rotateZ: [0, -1, 0, 1, 0],
                  y: [0, -2, 0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className={`absolute bottom-[30%] left-1/2 transform -translate-x-1/2 w-28 h-16 ${
                  isDarkMode ? "bg-gray-600" : "bg-gray-300"
                } rounded-md z-20`}
              >
                <div
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-12 ${
                    isDarkMode ? "bg-gray-900" : "bg-gray-800"
                  } rounded-t-md`}
                >
                  <div className="absolute inset-1 bg-blue-400 rounded opacity-80"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Water bottle */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="absolute bottom-[8%] left-[38%] md:left-[42%] w-6 h-12 bg-blue-300 rounded-md z-30"
          >
            <div className="absolute top-[-15%] left-1/2 transform -translate-x-1/2 w-4 h-2 bg-blue-500 rounded-t-md"></div>
          </motion.div>

          {/* Bag of chips */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="absolute bottom-[8%] right-[38%] md:right-[42%] w-10 h-14 bg-red-500 rounded-md z-30"
          >
            <div className="absolute inset-1 flex flex-col justify-center items-center">
              <div className="w-6 h-2 bg-yellow-300 rounded-full mb-1"></div>
              <div className="w-6 h-1 bg-white rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* Grass */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-[10%] ${
            isDarkMode
              ? "bg-gradient-to-t from-green-800 to-green-700"
              : "bg-gradient-to-t from-green-600 to-green-500"
          }`}
        ></div>

        {/* Add some floating particles for atmosphere */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 ${
              isDarkMode ? "bg-gray-400" : "bg-white"
            } rounded-full opacity-70`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    );
  }
);

BackgroundScene.displayName = "BackgroundScene";

export default function SceneWrapper() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  // Define the texts to cycle through
  const roleTexts = [
    "I'm a Software Engineer and Developer!",
    "I'm a rock climber!",
    "I'm a foodie!",
    "I'm a tennis player!",
  ];
  const currentRole = useTypingAnimation(roleTexts);

  // Only render on client
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
        <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background scene */}
      <BackgroundScene isDarkMode={isDarkMode} />

      {/* Title overlay */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute top-[15%] left-1/2 transform -translate-x-1/2 text-center z-40"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
          Steven Li
        </h1>
        <TypingText text={currentRole} />
      </motion.div>
    </div>
  );
}
