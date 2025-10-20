import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';

const rotatingWords = ['Developer', 'Student', 'Creative Thinker', 'Builder', 'Designer', 'Innovator', 'Problem Solver', 'Tech Enthusiast', 'Lifelong Learner'];

export default function DecryptedText({
  className = '',
  encryptedClassName = '',
}) {
  const [displayText, setDisplayText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const containerRef = useRef(null);
  const baseText = 'Hi, Welcome to my website, I am Usmaan Sayed and I am a ';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const scrambleSpeed = 100;
  const wordChangeInterval = 10000;

  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    if (!innerRef.current) return;
    const target = innerRef.current;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setSize((prev) => ({ w: Math.max(prev.w, width), h: Math.max(prev.h, height) }));
      }
    });
    ro.observe(target);
    return () => ro.disconnect();
  }, []);

  const scramble = (targetText, callback) => {
    let iterations = 0;
    const maxIterations = 10;
    const scrambleInterval = setInterval(() => {
      const scrambled = targetText
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join('');
      setDisplayText(scrambled);
      iterations++;
      if (iterations >= maxIterations) {
        clearInterval(scrambleInterval);
        callback();
      }
    }, scrambleSpeed);
  };

  const updateText = () => {
    const nextWord = rotatingWords[currentWordIndex];
    scramble(baseText + nextWord, () => {
      setDisplayText(baseText + nextWord);
    });
  };

  useEffect(() => {
    updateText();
    const interval = setInterval(() => {
      const nextIndex = (currentWordIndex + 1) % rotatingWords.length;
      setCurrentWordIndex(nextIndex);
    }, wordChangeInterval);
    return () => clearInterval(interval);
  }, [currentWordIndex]);

  return (
    <span ref={outerRef} className={className} style={{ display: 'inline-block', minWidth: size.w || undefined, minHeight: size.h || undefined }}>
      <span ref={innerRef}>
        <motion.span
          ref={containerRef}
          className={`inline-block whitespace-pre-wrap ${className}`}
          onMouseEnter={() => {
            setIsHovering(true);
            updateText();
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        >
          {displayText}
        </motion.span>
      </span>
    </span>
  );
}
