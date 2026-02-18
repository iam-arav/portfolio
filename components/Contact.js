"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

export default function Contact() {
  const { register, handleSubmit,reset, formState: { errors, isSubmitting } } = useForm();
  const [status, setStatus] = useState("");

  const onSubmit = async (data) => {
    setStatus("Posting message")
    try {
        const response = await fetch('api/contact', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });

        if(response.ok) {
            setStatus('success');
            reset();
            setTimeout(() => setStatus(""), 3000);
        }
        else {
            setStatus('error');
        }
    }
    catch(e) {
        console.log(e);
        setStatus('error')
    }
    console.log("Form Data:", data);
    alert("Message sent! (Check console for data)");
  };

  return (
    <section id="contact" className="pb-32">
      <div className="flex flex-col items-center text-center mb-12">
        <h3 className="text-3xl font-bold text-slate-100 flex items-center">
          <span className="text-primary font-mono mr-4 text-xl">03.</span> Get In Touch
        </h3>
        <p className="max-w-md text-slate-400 mt-4">
          I'm currently looking for senior opportunities or interesting AI-driven projects. 
          Whether you have a question or just want to say hi, my inbox is open!
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-surface p-8 rounded-xl border border-primary/20 shadow-xl"
      >
        {status === "success" && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-surface/90 flex flex-col items-center justify-center z-10 backdrop-blur-sm"
          >
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-primary">Message Sent!</h3>
            <p className="text-slate-400">I'll get back to you soon.</p>
          </motion.div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-300 mb-2 font-mono text-sm">Name</label>
              <input 
                {...register("name", { required: "Name is required" })}
                className={`w-full bg-background border ${errors.name ? 'border-red-500' : 'border-slate-700'} rounded p-3 text-slate-200 focus:border-primary outline-none transition`}
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-slate-300 mb-2 font-mono text-sm">Email</label>
              <input 
                {...register("email", { 
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                })}
                className={`w-full bg-background border ${errors.email ? 'border-red-500' : 'border-slate-700'} rounded p-3 text-slate-200 focus:border-primary outline-none transition`}
                placeholder="Your email id"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 mb-2 font-mono text-sm">Message</label>
            <textarea 
              {...register("message", { required: "Message is required" })}
              rows="5"
              className={`w-full bg-background border ${errors.message ? 'border-red-500' : 'border-slate-700'} rounded p-3 text-slate-200 focus:border-primary outline-none transition`}
              placeholder="Type Your Message here..."
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-4 bg-transparent border-2 border-primary text-primary font-bold rounded hover:bg-primary/10 transition-all disabled:opacity-50 flex justify-center items-center gap-2"
          >
            {isSubmitting ? (
               <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            ) : "Send Message"}
          </button>
          {status === "error" && (
            <p className="text-red-400 text-center mt-2">Failed to send message. Please try again.</p>
          )}
        </form>

        <div className="mt-12 pt-8 border-t border-slate-700 flex justify-center gap-8 text-slate-400">
          <a href="https://github.com/iam-arav" target="_blank" className="hover:text-primary transition">GitHub</a>
          <a href="https://www.linkedin.com/in/arav-ak/" target="_blank" className="hover:text-primary transition">LinkedIn</a>
          <a href="mailto:aravindkumartechtrek@gmail.com" className="hover:text-primary transition">Email</a>
        </div>
      </motion.div>
    </section>
  );
}