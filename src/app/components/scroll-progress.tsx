'use client';

import { useCallback, useEffect, useState } from 'react';

export function ScrollProgress() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = useCallback(() => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const currentPosition = window.scrollY;
    const progressDec = (currentPosition / totalHeight) * 100;
    const progessFrac = Number(progressDec.toPrecision(2));
    setScrollPosition(progessFrac);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`duration-600 relative h-1 bg-green-500 transition-all`}
      style={{ width: `${scrollPosition}%` }}
    ></div>
  );
}
