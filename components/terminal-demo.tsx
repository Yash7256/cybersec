"use client";
import { useState, useEffect } from 'react';

interface TypewriterProps {
  lines: string[];
  speed?: number;
  pause?: number;
}

export function Typewriter({ lines, speed = 24, pause = 600 }: TypewriterProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];
    const isLineComplete = charIndex >= currentLine.length;

    const timeout = setTimeout(() => {
      if (isLineComplete) {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      } else {
        setCharIndex((prev) => prev + 1);
      }
    }, isLineComplete ? pause : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, lines, pause, speed]);

  const visibleLines = lines.slice(0, lineIndex);
  const currentLine = lines[lineIndex]?.slice(0, charIndex) ?? '';
  const output = [...visibleLines, currentLine].join('\n');

  return (
    <pre className="text-sm leading-relaxed text-cyan-200 font-mono whitespace-pre-wrap">
      {output}
      {lineIndex < lines.length && <span className="animate-pulse">|</span>}
    </pre>
  );
}