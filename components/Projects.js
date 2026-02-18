"use client";
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Distributed API Rate Limiter",
      description: "A custom middleware solution designed to prevent DDoS attacks using Redis. Implements a sliding-window algorithm with real-time traffic visualization.",
      tech: ["Node.js", "Redis", "Lua Scripting", "Socket.io"],
      link: "#" 
    },
    {
      title: "Smart-Inventory (RAG Pipeline)",
      description: "An AI-powered document analysis tool. Converts unstructured invoice PDFs into searchable JSON data using Vector Embeddings and LLMs.",
      tech: ["MERN", "Pinecone Vector DB", "LangChain", "OpenAI"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <h3 className="text-3xl font-bold text-slate-100 mb-12 flex items-center">
        <span className="text-primary font-mono mr-4 text-xl">02.</span> Featured Work
      </h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <motion.div 
            key={p.title}
            whileHover={{ y: -8 }} 
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative p-8 bg-surface rounded-xl border border-primary/20 hover:border-primary transition-colors duration-300"
          >
            <h4 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-primary transition-colors">
              {p.title}
            </h4>
            
            <p className="text-slate-400 mb-6 leading-relaxed">
              {p.description}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {p.tech.map(t => (
                <span key={t} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
            
            <a href={p.link} className="inline-flex items-center text-slate-100 hover:text-primary font-medium transition-colors">
              In Progress... <span className="ml-2">→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}