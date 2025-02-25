import AboutSection from "./components/About";
import { BlurFade } from "./components/BlurFade";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans max-w-3xl mx-auto py-12 sm:py-24 px-6 gap-y-9">
      <BlurFade delay={0.25} inView direction="up">
        <Hero />
      </BlurFade>
      
      <BlurFade delay={0.45} inView direction="up">
        <AboutSection />
      </BlurFade>

      </main>
  );
}
