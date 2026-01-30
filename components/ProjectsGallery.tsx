'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '@/app/images/gallery-1.png';
import img2 from '@/app/images/gallery-2.png';
import img3 from '@/app/images/gallery-3.png';
import img4 from '@/app/images/gallery-4.png';
import img5 from '@/app/images/gallery-5.png';

const projects = [
    { id: 1, src: img1, alt: 'Fashion Portrait', span: 'md:col-span-1 md:row-span-2', height: 'h-[600px]' },
    { id: 2, src: img2, alt: 'Nature Landscape', span: 'md:col-span-1 md:row-span-1', height: 'h-[400px]' },
    { id: 3, src: img3, alt: 'Studio Session', span: 'md:col-span-1 md:row-span-1', height: 'h-[400px]' },
    { id: 4, src: img4, alt: 'Art Direction', span: 'md:col-span-1 md:row-span-1', height: 'h-[350px]' },
    { id: 5, src: img5, alt: 'Cinema Camera', span: 'md:col-span-1 md:row-span-2', height: 'h-[500px]' },
];

export default function ProjectsGallery() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered reveal
            gsap.from(".project-item", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                },
                y: 100,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power4.out"
            });

            // Parallax effect for images
            gsap.utils.toArray(".project-image-wrapper").forEach((wrapper: any) => {
                const img = wrapper.querySelector(".project-image");
                gsap.to(img, {
                    y: '20%', // Move image down slightly as we scroll
                    ease: "none",
                    scrollTrigger: {
                        trigger: wrapper,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={containerRef} className="py-20 px-4 md:px-8 bg-brandBeige text-brandBlack">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-[10vw] md:text-7xl font-black uppercase tracking-tighter">Projects</h2>
                    <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">
                        Show All
                        <span className="bg-brandBlack text-brandBeige rounded-full w-6 h-6 flex items-center justify-center text-xs">Login</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`project-item relative w-full overflow-hidden rounded-xl ${project.span} ${project.height} group`}
                        >
                            <div className="project-image-wrapper absolute inset-0 w-full h-[120%] -top-[10%] overflow-hidden">
                                <Image
                                    src={project.src}
                                    alt={project.alt}
                                    fill
                                    className="project-image object-cover"
                                    placeholder="blur"
                                />
                            </div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <span className="text-white font-bold uppercase tracking-wider text-lg border border-white px-4 py-2 rounded-full">
                                    View Project
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
