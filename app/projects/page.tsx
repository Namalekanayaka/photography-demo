'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Importing images
import img1 from '@/app/images/gallery-1.png';
import img2 from '@/app/images/gallery-2.png';
import img3 from '@/app/images/gallery-3.png';
import img4 from '@/app/images/gallery-4.png';
import img5 from '@/app/images/gallery-5.png';
import imgHero from '@/app/images/hero.png';

const projects = [
    { id: 1, src: img1, alt: 'Project 1', span: 'col-span-1 row-span-1', title: 'Urban Solitude' },
    { id: 2, src: img2, alt: 'Project 2', span: 'col-span-1 row-span-1', title: 'Neon Nights' },
    { id: 3, src: img3, alt: 'Project 3', span: 'col-span-1 md:col-span-1 md:row-span-2 h-full', title: 'Modern Living' },
    { id: 4, src: imgHero, alt: 'Project 4', span: 'col-span-1 md:col-span-2 row-span-1', title: 'Workspace Zen' },
    { id: 5, src: img4, alt: 'Project 5', span: 'col-span-1 md:col-span-2 row-span-1', title: 'Abstract Forms' },
    { id: 6, src: img5, alt: 'Project 6', span: 'col-span-1 row-span-1', title: 'Natural Light' },
];

export default function ProjectsPage() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Header Animation
            gsap.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            });

            // Grid Items Stagger Animation
            const items = gsap.utils.toArray('.project-item');

            gsap.fromTo(items,
                {
                    y: 100,
                    opacity: 0,
                    scale: 0.9
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 85%',
                    }
                }
            );

            // Hover interactions (using mousemove for magnetic effect on images)
            items.forEach((item: any) => {
                const img = item.querySelector('img');
                const overlay = item.querySelector('.overlay');

                item.addEventListener('mouseenter', () => {
                    gsap.to(img, { scale: 1.1, duration: 0.5 });
                    gsap.to(overlay, { opacity: 1, duration: 0.3 });
                });

                item.addEventListener('mouseleave', () => {
                    gsap.to(img, { scale: 1, duration: 0.5 });
                    gsap.to(overlay, { opacity: 0, duration: 0.3 });
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main className="min-h-screen w-full bg-brandBeige relative font-sans">
            <Navbar />

            <section ref={containerRef} className="pt-32 pb-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 overflow-hidden md:mb-24">
                        <h1
                            ref={titleRef}
                            className="text-[12vw] md:text-[10vw] leading-[0.8] font-black uppercase text-brandBlack tracking-tighter mix-blend-darken"
                        >
                            Projects
                        </h1>

                        <div className="hidden md:flex items-center gap-2 mb-4">
                            <span className="font-bold tracking-widest uppercase text-sm">Show All</span>
                            <div className="bg-brandBlack text-brandBeige rounded-full w-8 h-8 flex items-center justify-center transform -rotate-45">
                                ➜
                            </div>
                        </div>
                    </div>

                    {/* Bento Grid */}
                    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">

                        {/* 
                           Layout Logic based on image:
                           Row 1: [Small] [Small] [Tall (start)]
                           Row 2: [Wide (spanning 2 cols)] [Tall (end)]
                        */}

                        {/* Item 1 - Top Left */}
                        <div className="project-item group relative overflow-hidden rounded-3xl bg-brandBlack col-span-1">
                            <Image
                                src={img1}
                                alt="Project 1"
                                fill
                                className="object-cover transition-transform duration-700"
                                placeholder="blur"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-bold uppercase tracking-wider">Urban Solitude</h3>
                            </div>
                        </div>

                        {/* Item 2 - Top Middle */}
                        <div className="project-item group relative overflow-hidden rounded-3xl bg-brandBlack col-span-1">
                            <Image
                                src={img2}
                                alt="Project 2"
                                fill
                                className="object-cover transition-transform duration-700"
                                placeholder="blur"
                            />
                            <div className="overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-bold uppercase tracking-wider">Neon Nights</h3>
                            </div>
                        </div>

                        {/* Item 3 - Right Tall (Spans 2 rows) */}
                        <div className="project-item group relative overflow-hidden rounded-3xl bg-brandBlack col-span-1 md:row-span-2 h-full min-h-[600px] md:min-h-auto">
                            <Image
                                src={img3}
                                alt="Project 3"
                                fill
                                className="object-cover transition-transform duration-700"
                                placeholder="blur"
                            />
                            <div className="overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                                <h3 className="text-white text-3xl font-bold uppercase tracking-wider text-center p-4">Modern Living</h3>
                            </div>
                        </div>

                        {/* Item 4 - Bottom Wide (Spans 2 cols) */}
                        <div className="project-item group relative overflow-hidden rounded-3xl bg-brandBlack col-span-1 md:col-span-2">
                            <Image
                                src={imgHero}
                                alt="Project 4"
                                fill
                                className="object-cover transition-transform duration-700"
                                placeholder="blur"
                            />
                            <div className="overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                                <h3 className="text-white text-3xl font-bold uppercase tracking-wider">Workspace Zen</h3>
                            </div>
                        </div>

                        {/* Extra items if needed for scrolling */}
                        <div className="project-item group relative overflow-hidden rounded-3xl bg-brandBlack col-span-1 md:col-span-2">
                            <Image
                                src={img4}
                                alt="Project 5"
                                fill
                                className="object-cover transition-transform duration-700"
                                placeholder="blur"
                            />
                            <div className="overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                                <h3 className="text-white text-3xl font-bold uppercase tracking-wider">Abstract Forms</h3>
                            </div>
                        </div>

                        <div className="project-item group relative overflow-hidden rounded-3xl bg-brandBlack col-span-1">
                            <Image
                                src={img5}
                                alt="Project 6"
                                fill
                                className="object-cover transition-transform duration-700"
                                placeholder="blur"
                            />
                            <div className="overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-bold uppercase tracking-wider">Natural Light</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
