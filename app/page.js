import Hero from '@/components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import FadeUp from '../components/FadeUp'

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-slate-300 antialiased selection:bg-primary selection:text-background transition-colors duration-500">
      <Hero />
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        <FadeUp>
          <Skills />
        </FadeUp>
        <FadeUp delay={0.2}>
          <Projects />
        </FadeUp>
        <Contact />
      </div>
    </main>
  );
}