import HeroSection from "@/app/components/sections/HeroSection";
import ProjectSection from "@/app/components/sections/ProjectSection";
import AboutSection from "@/app/components/sections/AboutSection";
import ContactSection from "@/app/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
