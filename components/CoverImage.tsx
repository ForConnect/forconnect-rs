'use client';

import { useEffect, useRef, useState } from 'react';

// Prikazuje naslovnu sliku; dok slika ne postoji u public/blog, ostaje ForConnect pozadina sa logom.
export default function CoverImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#0f1d3a] via-[#0b1427] to-[#07101f] ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#00F0FF55] shadow-[0_0_30px_#00F0FF55]">
            <span className="text-3xl font-bold text-[#00F0FF]">F</span>
          </div>
        </div>
      )}
      <img
        ref={ref}
        src={src}
        alt={loaded ? alt : ''}
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
