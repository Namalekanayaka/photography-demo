'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImg from '@/app/images/hero.png';

export default function Hero() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const splitLeftRef = useRef(null);
    const splitRightRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            });

            tl.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: 'power4.out',
            })
                .from(subtitleRef.current, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power4.out',
                }, '-=0.5')
                .from([splitLeftRef.current, splitRightRef.current], {
                    y: 100,
                    opacity: 0,
                    stagger: 0.2,
                    duration: 1,
                    ease: 'power4.out',
                }, '-=0.5');
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="pt-32 pb-12 px-4 md:px-8 min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <h1
                    ref={titleRef}
                    className="text-[8vw] md:text-[12vw] leading-[0.9] font-black uppercase text-brandBlack tracking-tighter mix-blend-darken text-center md:text-left"
                >
                    Capturing
                </h1>
                <p
                    ref={subtitleRef}
                    className="text-lg md:text-2xl font-bold uppercase tracking-widest mt-6 text-brandBlack opacity-80 text-center md:text-left pl-2"
                >
                    The moments that captivate your heart
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-16 h-[60vh] md:h-[500px]">
                    {/* Text/Card Section */}
                    <div
                        ref={splitLeftRef}
                        className="bg-brandBlack text-brandBeige p-8 md:p-12 rounded-2xl flex flex-col justify-between relative overflow-hidden group"
                    >
                        <p className="text-xl md:text-2xl font-light leading-relaxed max-w-sm">
                            <span className="font-bold">Amelia Allen</span> is a lifestyle, portrait and documentary photographer who now lives and works in London.
                        </p>

                        <div className="mt-8">
                            <Link href="/about" className="flex items-center gap-2 uppercase tracking-widest text-sm hover:text-white transition-colors">
                                About Us
                                <span className="bg-brandBeige text-brandBlack rounded-full w-6 h-6 flex items-center justify-center text-xs group-hover:rotate-45 transition-transform">
                                    ↗
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div
                        ref={splitRightRef}
                        className="relative rounded-2xl overflow-hidden h-full w-full"
                    >
                        <Image
                            src={heroImg}
                            alt="Photographer at work"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                            priority
                            placeholder="blur"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
