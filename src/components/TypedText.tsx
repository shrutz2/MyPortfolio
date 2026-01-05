import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  strings?: string[];
  typeSpeed?: number;
  backSpeed?: number;
}

const TypedText = ({ 
  strings = ["A ^500passionate ^300computer ^300science ^300graduate\n^500exploring ^300AI ^300and ^300backend ^300development..."],
  typeSpeed = 40,
  backSpeed = 20
}: TypedTextProps) => {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: strings,
      typeSpeed: typeSpeed,
      backSpeed: backSpeed,
      startDelay: 1000,
      showCursor: true,
      cursorChar: '_',
      loop: false,
      smartBackspace: false,
      onStringTyped: (arrayPos: number) => {
        if (typed.current && arrayPos === 0) {
          // Pause at the end
          setTimeout(() => {
            if (typed.current) {
              typed.current.reset();
            }
          }, 5000);
        }
      }
    };

    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [strings, typeSpeed, backSpeed]);

  return (
    <div className="font-mono max-w-3xl">
      <span ref={el} className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 whitespace-pre-line leading-relaxed" />
    </div>
  );
};

export default TypedText;