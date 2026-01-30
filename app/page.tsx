import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWorks from "@/components/FeaturedWorks";
import ProjectsGallery from "@/components/ProjectsGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      <Navbar />
      <Hero />
      <FeaturedWorks />
      <ProjectsGallery />
      <Footer />
    </main>
  );
}
