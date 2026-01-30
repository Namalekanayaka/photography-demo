'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import img1 from '@/app/images/gallery-1.png';
import img2 from '@/app/images/gallery-2.png';
import img3 from '@/app/images/gallery-3.png';
import img4 from '@/app/images/gallery-4.png';
import img5 from '@/app/images/gallery-5.png';
import imgHero from '@/app/images/hero.png';
import imgFeatured1 from '@/app/images/featured-1.png';
import imgFeatured2 from '@/app/images/featured-2.png';

const galleryImages = [
    { src: img1, alt: 'Woman standing in an urban alleyway', aspect: 'w-[400px] md:w-[600px] aspect-[3/4]' },
    { src: imgHero, alt: 'Photographer workspace with camera gear', aspect: 'w-[600px] md:w-[900px] aspect-video' },
    { src: img3, alt: 'Modern interior living room design', aspect: 'w-[500px] md:w-[700px] aspect-[4/3]' },
    { src: img2, alt: 'Abstract neon light composition', aspect: 'w-[300px] md:w-[500px] aspect-square' },
    { src: img4, alt: 'Portrait of a woman with natural hair', aspect: 'w-[400px] md:w-[550px] aspect-[3/4]' },
    { src: imgFeatured1, alt: 'Fashion editorial shot in studio', aspect: 'w-[400px] md:w-[600px] aspect-[3/4]' },
    { src: img5, alt: 'Sunlight filtering through leaves', aspect: 'w-[300px] md:w-[500px] aspect-square' },
    { src: imgFeatured2, alt: 'Architectural detail of a modern building', aspect: 'w-[500px] md:w-[700px] aspect-[4/3]' },
];

export default function GalleryPage() {
    const containerRef = useRef(null);
    const triggerRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {

            // Calculate total width of track for accurate scrubbing
            const totalWidth = trackRef.current ? (trackRef.current as HTMLElement).scrollWidth : 0;
            const viewportWidth = window.innerWidth;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "+=3000", // Scroll distance
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                }
            });

            tl.to(trackRef.current, {
                x: () => `-${totalWidth - viewportWidth + 100}px`, // Move left
                ease: "none"
            });

            // Parallax effect for images inside the containers
            gsap.utils.toArray('.gallery-img-container').forEach((container: any, i) => {
                gsap.fromTo(container.querySelector('img'),
                    { scale: 1.2 },
                    {
                        scale: 1,
                        scrollTrigger: {
                            trigger: container,
                            containerAnimation: tl,
                            start: "left right",
                            end: "right left",
                            scrub: true,
                        }
                    }
                )
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="min-h-screen w-full bg-brandBeige relative overflow-x-hidden">
            <Navbar />

            {/* Intro Section */}
            <div className="h-[50vh] flex items-end justify-start px-4 md:px-8 pb-12">
                <h1 className="text-[12vw] font-black uppercase text-brandBlack tracking-tighter mix-blend-darken leading-none">
                    Visuals
                </h1>
            </div>

            {/* Horizontal Scroll Section */}
            <section ref={triggerRef} className="h-screen w-full flex items-center relative overflow-hidden bg-brandBlack">
                <div
                    ref={trackRef}
                    className="flex gap-12 md:gap-24 px-12 md:px-32 items-center h-full w-max"
                >
                    {/* Title in the stream */}
                    <div className="shrink-0 w-[30vw] md:w-[20vw] text-brandBeige opacity-50">
                        <p className="text-xl md:text-3xl font-light uppercase tracking-widest block rotate-90 origin-left translate-x-8">
                            Selected Works 2023-2025
                        </p>
                    </div>

                    {galleryImages.map((img, index) => (
                        <div
                            key={index}
                            className={`gallery-img-container shrink-0 relative overflow-hidden group ${img.aspect} grayscale hover:grayscale-0 transition-all duration-500`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                                placeholder="blur"
                                sizes="(max-width: 768px) 100vw, 80vw"
                            />
                            <div className="absolute inset-0 bg-brandBeige/10 opacity-0 group-hover:opacity-20 transition-opacity" />
                        </div>
                    ))}

                    {/* End Marker */}
                    <div className="shrink-0 w-[400px] h-[400px] flex items-center justify-center border border-brandBeige/20 rounded-full">
                        <span className="text-brandBeige font-black uppercase tracking-widest text-xl">End of Stream</span>
                    </div>
                </div>

                {/* Visual Scroll Indicator */}
                <div className="absolute bottom-8 right-8 text-brandBeige font-bold uppercase tracking-widest text-xs animate-pulse">
                    Scroll Down →
                </div>
            </section>

            <div className="h-[50vh] bg-brandBeige flex items-center justify-center">
                <p className="text-brandBlack opacity-50">More Coming Soon</p>
            </div>

            <Footer />
        </main>
    );
}
