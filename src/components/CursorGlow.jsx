import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-0 w-[500px] h-[500px] rounded-full"
      style={{
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(108,99,255,0.07) 0%, transparent 70%)',
        transition: 'left 0.15s ease, top 0.15s ease',
      }}
    />
  );
}
