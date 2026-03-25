"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Github, Linkedin, MapPin, ArrowUpRight, Send } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { basics } = resumeData;

  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending message...");
    const formData = new FormData(event.currentTarget);

    // Secure Web3Forms routing directly to saketdixit06@gmail.com
    formData.append("access_key", "36ddc7b8-099e-4361-b62c-b0959f11b98d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult(data.message || "Failed to send message.");
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }
    setIsSubmitting(false);

    setTimeout(() => {
      setResult("");
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] font-mono text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,212,255,0.2)]">Contact</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">Contact</h2>
          <p className="font-body text-white/50 mb-12">Let's connect and build something great together.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Contact Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-8 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.05), rgba(124,58,237,0.05))", boxShadow: "0 0 40px rgba(0,212,255,0.08)" }}>
            <h3 className="font-display text-2xl font-bold text-white mb-2">Send me a message</h3>
            <p className="font-body text-white/60 mb-6 text-sm">
              I'll get back to you as soon as possible.
            </p>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="name" className="text-xs font-mono text-white/50 pl-1">Name</label>
                <input type="text" id="name" name="name" required placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/10 transition-all" />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-xs font-mono text-white/50 pl-1">Email</label>
                <input type="email" id="email" name="email" required placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/10 transition-all" />
              </div>
              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-mono text-white/50 pl-1">Message</label>
                <textarea id="message" name="message" required placeholder="Hello Saket, I'd like to discuss..." rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/10 transition-all resize-none"></textarea>
              </div>

              <button type="submit" disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display font-semibold text-sm transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed group"
                style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", color: "#fff" }}>
                <span>{isSubmitting ? "Sending..." : "Submit Message"}</span>
                {!isSubmitting && <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>

              {result && (
                <div className={`p-3 rounded-lg text-sm font-medium text-center ${result.includes("Success") ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-white/10 text-white/80 border border-white/20"}`}>
                  {result}
                </div>
              )}
            </form>
          </motion.div>

          {/* Right: Contact details - Circular Connect */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center relative w-full aspect-square max-w-[320px] sm:max-w-[360px] mx-auto mt-12 md:mt-0">
            
            {/* Dashed ring */}
            <div className="absolute inset-8 sm:inset-4 rounded-full border border-dashed border-[#00d4ff]/30 shadow-[0_0_50px_rgba(0,212,255,0.1)]"></div>

            {/* Center Connect */}
            <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center z-20 glass shadow-[0_0_30px_rgba(0,212,255,0.3)] bg-gradient-to-br from-[#00d4ff]/20 to-[#7c3aed]/20" style={{ border: "2px solid rgba(0,212,255,0.6)" }}>
               <span className="font-display font-bold text-lg sm:text-lg text-white tracking-widest drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]">CONNECT</span>
            </div>

            {/* Circular Items */}
            {[
              { label: "Email", value: basics.email, href: `mailto:${basics.email}`, img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg", invert: false },
              { label: "GitHub", value: "Sakura-hack01", href: basics.github, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invert: true },
              { label: "LinkedIn", value: "saket-dixit03", href: basics.linkedin, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg", invert: false }
            ].map((item, i, arr) => {
              const angle = (i / arr.length) * (2 * Math.PI) - (Math.PI / 2);
              const x = 50 + 50 * Math.cos(angle);
              const y = 50 + 50 * Math.sin(angle);
              
              const isLucide = !!(item as any).lucide;
              const IconComp = (item as any).lucide as React.ElementType;

              const content = (
                <div className="flex flex-col items-center gap-2 group cursor-pointer transition-transform hover:scale-110">
                   <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#080c14]/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl group-hover:border-[#00d4ff] transition-all p-2 sm:p-2.5 relative z-30 overflow-hidden"
                        style={{ border: "1px solid rgba(0,212,255,0.3)", boxShadow: "0 0 20px rgba(0,0,0,0.8)" }}>
                      {/* Glow Behind Icon */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/0 to-[#00d4ff]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      {item.img ? (
                         <img src={item.img} alt={item.label} className="w-full h-full object-contain relative z-10 transition-transform group-hover:scale-110" style={item.invert ? { filter: 'brightness(0) invert(1)' } : {}} />
                      ) : (
                         isLucide && <IconComp size={24} className="text-[#00d4ff]/80 group-hover:text-[#00d4ff] transition-all relative z-10" />
                      )}
                   </div>
                   <div className="bg-[#080c14]/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[#00d4ff]/20 group-hover:border-[#00d4ff]/60 shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                     <span className="font-mono text-[9px] sm:text-[11px] font-bold text-[#00d4ff]/80 group-hover:text-[#00d4ff] transition-colors uppercase tracking-wider">{item.label}</span>
                   </div>
                </div>
              );

              return (
                <div key={item.label} className="absolute z-30 flex items-center justify-center" style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}>
                   {item.href ? (
                     <a href={item.href} target="_blank" rel="noreferrer" className="block outline-none">{content}</a>
                   ) : (
                     <div className="outline-none">{content}</div>
                   )}
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/30">© 2025 Saket Dixit. Built with Next.js & Framer Motion.</p>
          <p className="font-mono text-xs text-white/20">Data Science · LPU · India</p>
        </div>
      </div>
    </section>
  );
}
