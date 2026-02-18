"use client";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-background to-surface transition-colors duration-500">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-primary font-mono mb-4 text-lg">Hi, my name is Aravind Kumar Elango</h2>
        <h1 className="text-5xl md:text-8xl font-bold text-slate-100 mb-6 tracking-tight">
          Senior MERN <span className="text-primary">Developer.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed mb-10">
          With over 5 years of experience, I build high-performance, scalable web applications. 
          Currently focused on integrating AI into the MERN ecosystem.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary/10 transition-all rounded font-medium">
            Check out my work
          </a>
          <a href="/resume.pdf" className="px-8 py-4 bg-primary text-background hover:bg-secondary transition-all rounded font-bold">
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}