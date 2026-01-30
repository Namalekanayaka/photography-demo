'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Footer() {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                y: '100%',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: 1,
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <footer id="contact" className="bg-brandBeige text-brandBlack pt-20 px-4 md:px-8 pb-10 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start mb-12">
                <div className="mb-8 md:mb-0">
                    <p className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2">
                        Say hello
                        <span className="rotate-45 block">✈</span>
                    </p>
                    <a href="mailto:hello@gmail.com" className="text-xl md:text-2xl font-light hover:opacity-50 transition-opacity">
                        hello@gmail.com
                    </a>
                </div>

                <div className="flex flex-col gap-2 text-right">
                    {['LinkedIn', 'Instagram', 'Twitter'].map((social) => (
                        <a key={social} href="#" className="uppercase tracking-widest font-bold text-sm hover:underline">
                            {social}
                        </a>
                    ))}
                </div>
            </div>

            <div className="border-t border-brandBlack border-opacity-20 pt-4">
                {/* Huge Footer Text */}
                <h1
                    className="text-[7vw] md:text-[10vw] leading-none font-black uppercase text-center tracking-tighter"
                >
                    <div className="overflow-hidden py-24">
                        <span ref={textRef} className="block">Photography</span>
                    </div>
                </h1>
            </div>
        </footer>
    );
}
