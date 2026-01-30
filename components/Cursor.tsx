'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        // Move cursor logic
        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2,
                ease: 'power2.out'
            });
        };

        window.addEventListener('mousemove', moveCursor);

        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .cursor-pointer, .project-item');

        hoverElements.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursor, { scale: 3, opacity: 0.5 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(cursor, { scale: 1, opacity: 1 });
            });
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            hoverElements.forEach((el) => {
                // cleanup listeners
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="hidden md:block fixed top-0 left-0 w-4 h-4 rounded-full bg-brandBlack z-[9999] pointer-events-none mix-blend-difference -translate-x-1/2 -translate-y-1/2"
        />
    );
}
