import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleChars?: string;
  maxDistance?: number;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ 
  text, 
  className = '', 
  scrambleChars = '.:', 
  maxDistance = 100 
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!textRef.current) return;

    // Split text into individual character spans
    const chars = text.split('').map((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.className = 'char';
      span.setAttribute('data-content', char);
      span.style.willChange = 'transform';
      span.style.display = 'inline-block';
      return span;
    });

    // Clear and populate the text container
    textRef.current.innerHTML = '';
    chars.forEach(char => textRef.current!.appendChild(char));
    charsRef.current = chars;

    // Scramble animation function
    const scrambleChar = (char: HTMLSpanElement, intensity: number) => {
      const originalChar = char.getAttribute('data-content') || '';
      const scrambleLength = Math.ceil(intensity * 5);
      
      // Create scrambled text
      let scrambledText = '';
      for (let i = 0; i < scrambleLength; i++) {
        scrambledText += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
      }
      
      // Animate scramble then back to original
      gsap.to(char, {
        duration: 0.1,
        onStart: () => {
          char.textContent = scrambledText;
        },
        onComplete: () => {
          gsap.to(char, {
            duration: 0.5 + intensity * 0.5,
            onStart: () => {
              char.textContent = originalChar;
            },
            ease: 'power2.out'
          });
        }
      });
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      charsRef.current.forEach((char) => {
        const rect = char.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          const intensity = 1 - (distance / maxDistance);
          scrambleChar(char, intensity);
        }
      });
    };

    // Add event listener
    const textElement = textRef.current;
    textElement.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      if (textElement) {
        textElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [text, scrambleChars, maxDistance]);

  return (
    <div 
      ref={textRef} 
      className={`scramble-text ${className}`}
      style={{ 
        fontFamily: '"Space Mono", monospace',
        fontWeight: 400,
        cursor: 'default',
        userSelect: 'none'
      }}
    />
  );
};

export default ScrambleText;
