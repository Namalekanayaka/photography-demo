'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Navbar() {
    const navRef = useRef(null);
    const menuRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (isMenuOpen) {
                gsap.to(menuRef.current, {
                    y: '0%',
                    duration: 1,
                    ease: 'power4.out'
                });
                gsap.fromTo('.mobile-link',
                    { y: 100, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
                );
            } else {
                gsap.to(menuRef.current, {
                    y: '-100%',
                    duration: 0.8,
                    ease: 'power4.inOut'
                });
            }
        }, menuRef);

        return () => ctx.revert();
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Project', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <nav
                ref={navRef}
                className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-colors duration-300"
            >
                <Link href="/" className="text-xl font-bold uppercase tracking-tighter mix-blend-difference text-brandBlack cursor-pointer z-50">
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

                {/* Mobile Hamburger Button */}
                <div
                    className="md:hidden z-50 flex flex-col justify-center gap-1.5 cursor-pointer w-8 h-8"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className={`block w-full h-[2px] bg-brandBlack transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-full h-[2px] bg-brandBlack transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-full h-[2px] bg-brandBlack transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                ref={menuRef}
                className="fixed inset-0 bg-brandBeige z-40 flex flex-col items-center justify-center -translate-y-full md:hidden"
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="mobile-link text-4xl font-black uppercase tracking-tighter mb-8 hover:text-brandBlack/60 transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </>
    );
}
