'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Navbar() {
    const navRef = useRef(null);

    useEffect(() => {
        const nav = navRef.current;

        gsap.to(nav, {
            backgroundColor: 'rgba(217, 209, 192, 0.8)', // brandBeige with opacity
            backdropFilter: 'blur(10px)',
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "100 top",
                scrub: true,
            }
        });
    }, []);

    const navLinks = [
        { name: 'About', href: '/about' },
        { name: 'Gallery', href: '/#gallery' },
        { name: 'Project', href: '/#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-colors duration-300"
        >
            <Link href="/" className="text-xl font-bold uppercase tracking-tighter mix-blend-difference text-brandBlack cursor-pointer">
                Photography
            </Link>

            <div className="hidden md:flex gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium uppercase tracking-wide hover:opacity-50 transition-opacity mix-blend-difference text-brandBlack"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="md:hidden">
                {/* Mobile Menu Icon Placeholder */}
                <div className="w-8 h-8 flex flex-col justify-center gap-1 cursor-pointer">
                    <div className="w-full h-[2px] bg-brandBlack"></div>
                    <div className="w-full h-[2px] bg-brandBlack"></div>
                </div>
            </div>
        </nav>
    );
}
