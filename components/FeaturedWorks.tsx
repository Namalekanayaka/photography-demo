'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '@/app/images/featured-1.png';
import img2 from '@/app/images/featured-2.png';
import img3 from '@/app/images/featured-3.png';

const works = [
    { id: 1, title: 'Art Director', image: img1, year: '2021' },
    { id: 2, title: 'Photographer', image: img2, year: '2021' },
    { id: 3, title: 'Videographer', image: img3, year: '2022' },
];

export default function FeaturedWorks() {
    const containerRef = useRef(null);
    const itemsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const items = itemsRef.current;

        gsap.fromTo(items,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            }
        );
    }, []);

    return (
        <section id="gallery" ref={containerRef} className="py-20 px-4 md:px-8 bg-brandBlack text-brandBeige">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[10vw] md:text-6xl font-black uppercase mb-12 tracking-tighter text-center md:text-left">
                    Featured Works
                </h2>

                <div className="flex flex-col gap-4">
                    {works.map((work, index) => (
                        <div
                            key={work.id}
                            ref={(el) => { if (el) itemsRef.current[index] = el; }}
                            className="group relative h-[15vh] md:h-[200px] w-full overflow-hidden rounded-xl border border-brandBeige/10 cursor-pointer"
                        >
                            {/* Background Image (Hidden by default, shown on hover/reveal) */}
                            <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    placeholder="blur"
                                />
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-500"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex items-center justify-between px-8 md:px-16 mix-blend-difference">
                                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-wide">
                                    {work.title}
                                </h3>
                                <span className="text-xl font-bold">{work.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
