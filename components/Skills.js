"use client";
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Skills() {
    const categories = [
        { title: "Frontend", techs: ["React", "Next.js", "Redux", "Tailwind", "TypeScript"] },
        { title: "Backend", techs: ["Node.js", "Express", "REST APIs", "GraphQL", "Microservices"] },
        { title: "Database", techs: ["MongoDB", "PostgreSQL", "Redis", "Mongoose"] },
        { title: "DevOps & Tools", techs: ["AWS", "Docker", "Git", "CI/CD", "Jest"] }
    ];

    return (
        <section id="skills">
            <h3 className="text-3xl font-bold text-slate-100 mb-12 flex items-center">
                {/* UPDATED: text-cyan-400 -> text-primary */}
                <span className="text-primary font-mono mr-4 text-xl">01.</span> Technical Toolkit
            </h3>
            
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid md:grid-cols-4 gap-8"
            >
                {categories.map((cat) => (
                    <motion.div 
                        variants={item} 
                        key={cat.title} 
                        className="p-6 bg-surface rounded-xl border border-primary/20 hover:border-primary hover:-translate-y-2 transition-all duration-300"
                    >
                       
                        <h4 className="text-primary font-bold mb-4 uppercase tracking-widest text-xs">{cat.title}</h4>
                        <ul className="space-y-2">
                            {cat.techs.map(tech => (
                                <li key={tech} className="text-slate-400 flex items-center before:content-['▹'] before:text-primary before:mr-2">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}