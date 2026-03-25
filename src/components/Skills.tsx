"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Wrench, Heart } from "lucide-react";
import { resumeData } from "@/data/resume";

const groups = [
  { key: "languages", label: "Languages", icon: Code2, color: "#00d4ff", items: resumeData.skills.languages },
  { key: "toolsPlatforms", label: "Tools & Platforms", icon: Wrench, color: "#7c3aed", items: resumeData.skills.toolsPlatforms },
  { key: "softSkills", label: "Soft Skills", icon: Heart, color: "#f59e0b", items: resumeData.skills.softSkills },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/30 text-[#7c3aed] font-mono text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(124,58,237,0.2)]">Skills</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Core Competencies</h2>
          <p className="font-body text-white/50 mb-16 max-w-lg text-lg">My highly interactive technical toolkit mapped out into orbiting skill galaxies.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
          {groups.map((g, gi) => {
            const Icon = g.icon;
            return (
              <motion.div key={g.key} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: gi * 0.2 }}
                className="glass rounded-3xl p-6 md:p-4 lg:p-8 relative flex flex-col items-center glass-hover w-full shrink-0"
                style={{ boxShadow: `0 0 30px ${g.color}15`, minHeight: "450px" }}>
                
                <h3 className="font-display text-2xl font-bold text-center mb-10 w-full tracking-wide" style={{ color: g.color }}>
                  {g.label}
                </h3>

                <div className="relative w-full aspect-square flex items-center justify-center -mt-6 max-w-[320px] mx-auto">
                  {/* Sun / Core of the solar system */}
                  <div className="absolute w-16 h-16 rounded-3xl flex items-center justify-center z-10 glass"
                       style={{ background: `${g.color}30`, border: `2px solid ${g.color}60`, boxShadow: `0 0 30px ${g.color}40` }}>
                    <Icon size={28} style={{ color: "white" }} />
                  </div>

                  {/* Orbit Track */}
                  <div className="absolute w-[85%] h-[85%] rounded-full border border-dashed z-0 opacity-50" style={{ borderColor: `${g.color}50` }}></div>

                  {/* Orbital Plane */}
                  <motion.div className="absolute w-[85%] h-[85%] z-20"
                    animate={{ rotate: 360 }} transition={{ duration: 40 + (gi * 5), repeat: Infinity, ease: "linear" }}>
                    
                    {g.items.map((item, i) => {
                      const angle = (i / g.items.length) * (2 * Math.PI);
                      const x = 50 + 50 * Math.cos(angle);
                      const y = 50 + 50 * Math.sin(angle);
                      
                      return (
                        <div key={item.name} 
                             className="absolute z-30"
                             style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}>
                          
                          <div className="w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center rounded-2xl shadow-xl hover:scale-125 transition-transform cursor-pointer"
                               style={{ border: `2px solid ${g.color}80`, background: `rgba(255, 255, 255, 0.95)`, boxShadow: `0 8px 25px ${g.color}40` }}>
                            
                            <motion.div className="w-full h-full flex flex-col items-center justify-center p-2"
                                        animate={{ rotate: -360 }} transition={{ duration: 40 + (gi * 5), repeat: Infinity, ease: "linear" }}>
                              <img src={item.image} alt={item.name} className="w-7 h-7 sm:w-8 sm:h-8 object-contain mb-1.5" />
                              <span className="text-[9px] sm:text-[11px] font-mono leading-[1.1] font-extrabold text-center uppercase tracking-tighter text-[#080c14]">
                                {item.name}
                              </span>
                            </motion.div>
                          
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
