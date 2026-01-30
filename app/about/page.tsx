'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import imgHero from '@/app/images/gallery-2.png'; // Using a gallery image as placeholder

export default function AboutPage() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            });

            tl.to(titleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power4.out',
            })
                .to(textRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power4.out',
                }, '-=0.5')
                .to(imageRef.current, {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'power4.out',
                }, '-=0.5');
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main className="min-h-screen w-full relative bg-brandBeige">
            <Navbar />

            <section ref={containerRef} className="pt-32 pb-20 px-4 md:px-8 min-h-screen flex flex-col items-center">
                <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text */}
                    <div className="flex flex-col justify-center order-2 md:order-1">
                        <h1
                            ref={titleRef}
                            className="text-[12vw] md:text-8xl leading-[0.85] font-black uppercase text-brandBlack tracking-tighter mix-blend-darken mb-8 opacity-0 translate-y-12"
                        >
                            About Me
                        </h1>

                        <div ref={textRef} className="space-y-6 text-lg md:text-xl font-light text-brandBlack/80 opacity-0 translate-y-12">
                            <p>
                                <span className="font-bold text-brandBlack">Amelia Allen</span> is a visionary photographer with a passion for capturing the raw, unfiltered beauty of life. With over a decade of experience behind the lens, she has carved a niche in lifestyle, portrait, and documentary photography.
                            </p>
                            <p>
                                Based in London but working globally, Amelia's work is characterized by its cinematic quality and emotional depth. She believes that every photograph tells a story, and her mission is to tell yours with authenticity and grace.
                            </p>
                            <p>
                                When she's not shooting, you can find her exploring new cities, curating art exhibitions, or mentoring aspiring photographers.
                            </p>
                            <div className="pt-8">
                                <h3 className="text-2xl font-black uppercase tracking-wide mb-4">Awards & Recognition</h3>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li>LensCulture Portrait Awards, Finalist (2023)</li>
                                    <li>National Geographic Travel Photographer of the Year, Merit (2022)</li>
                                    <li>British Journal of Photography, 'Ones to Watch' (2021)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative h-[60vh] md:h-[80vh] w-full order-1 md:order-2 overflow-hidden rounded-2xl opacity-0 translate-y-12 scale-90" ref={imageRef}>
                        <Image
                            src={imgHero}
                            alt="Portrait of the photographer"
                            fill
                            className="object-cover"
                            priority
                            placeholder="blur"
                        />
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 px-4 md:px-8 bg-brandBlack text-brandBeige">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-[8vw] md:text-6xl font-black uppercase mb-8 tracking-tighter">
                        My Philosophy
                    </h2>
                    <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed opacity-90">
                        "Photography is not just about capturing a moment; it's about preserving a feeling. It's the pause button of life. I strive to create images that not only look beautiful but feel true."
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
