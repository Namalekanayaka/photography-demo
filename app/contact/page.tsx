'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.anim-up', {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out'
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main className="min-h-screen w-full bg-brandBeige relative">
            <Navbar />

            <section ref={containerRef} className="pt-32 pb-20 px-4 md:px-8 min-h-[80vh] flex flex-col justify-center">
                <div className="max-w-4xl mx-auto w-full">
                    <h1 className="anim-up text-[12vw] md:text-8xl font-black uppercase text-brandBlack tracking-tighter mix-blend-darken mb-12 text-center">
                        Get in Touch
                    </h1>

                    <div className="anim-up bg-brandBlack text-brandBeige p-8 md:p-12 rounded-3xl">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-brandBeige/10 border-b border-brandBeige/20 p-4 text-brandBeige placeholder-brandBeige/30 focus:outline-none focus:border-brandBeige transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-brandBeige/10 border-b border-brandBeige/20 p-4 text-brandBeige placeholder-brandBeige/30 focus:outline-none focus:border-brandBeige transition-colors"
                                        placeholder="hello@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest">Message</label>
                                <textarea
                                    rows={6}
                                    className="w-full bg-brandBeige/10 border-b border-brandBeige/20 p-4 text-brandBeige placeholder-brandBeige/30 focus:outline-none focus:border-brandBeige transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button className="w-full md:w-auto px-8 py-4 bg-brandBeige text-brandBlack font-black uppercase tracking-widest hover:bg-white transition-colors rounded-full">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
