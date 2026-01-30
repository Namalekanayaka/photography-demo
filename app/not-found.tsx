import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
    return (
        <main className="min-h-screen w-full bg-brandBeige relative text-brandBlack flex flex-col">
            <Navbar />

            <div className="flex-grow flex flex-col items-center justify-center pointer-events-none px-4 text-center">
                <h1 className="text-[12vw] font-black uppercase tracking-tighter leading-none mix-blend-darken opacity-20 select-none">
                    404
                </h1>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
                        Page Not Found
                    </h2>
                    <p className="text-lg md:text-xl font-light max-w-md mx-auto mb-8 opacity-80">
                        The page you are looking for keeps hitting a dead end. Let's get you back to the light.
                    </p>
                    <Link
                        href="/"
                        className="px-8 py-4 bg-brandBlack text-brandBeige rounded-full uppercase tracking-widest text-sm font-bold hover:bg-opacity-80 transition-all hover:scale-105"
                    >
                        Return Home
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
