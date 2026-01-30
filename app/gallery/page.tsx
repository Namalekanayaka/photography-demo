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
    { src: img1, alt: 'Woman standing in an urban alleyway', aspect: 'aspect-[3/4]' },
    { src: img2, alt: 'Abstract neon light composition', aspect: 'aspect-square' },
    { src: img3, alt: 'Modern interior living room design', aspect: 'aspect-[4/3]' },
    { src: img4, alt: 'Portrait of a woman with natural hair', aspect: 'aspect-[3/4]' },
    { src: imgHero, alt: 'Photographer workspace with camera gear', aspect: 'aspect-video' },
    { src: img5, alt: 'Sunlight filtering through leaves', aspect: 'aspect-square' },
    { src: imgFeatured1, alt: 'Fashion editorial shot in studio', aspect: 'aspect-[3/4]' },
    { src: imgFeatured2, alt: 'Architectural detail of a modern building', aspect: 'aspect-[4/3]' },
];

export default function GalleryPage() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.gallery-item', {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main className="min-h-screen w-full bg-brandBeige relative">
            <Navbar />

            <section ref={containerRef} className="pt-32 pb-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-[12vw] md:text-8xl font-black uppercase text-brandBlack tracking-tighter mix-blend-darken mb-16 text-center md:text-left">
                        Gallery
                    </h1>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {galleryImages.map((img, index) => (
                            <div key={index} className="gallery-item break-inside-avoid relative rounded-2xl overflow-hidden group">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                    placeholder="blur"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
