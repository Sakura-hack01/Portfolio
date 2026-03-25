"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] font-mono text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,212,255,0.2)]">Education</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">Education</h2>
          <p className="font-body text-white/50 mb-12">Academic journey and qualifications.</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(180deg, #00d4ff, #7c3aed, transparent)" }} />

          <div className="space-y-6">
            {resumeData.education.map((edu, i) => (
              <motion.div key={edu.institution} initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="relative md:ml-16">

                {/* Timeline dot */}
                <div className="absolute -left-[52px] top-6 w-3 h-3 rounded-full border-2 hidden md:block"
                  style={{ background: i === 0 ? "#00d4ff" : "#1a2540", borderColor: "#00d4ff" }} />

                <div className="glass rounded-2xl p-6 glass-hover">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-4">
                      {edu.logo ? (
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-[#00d4ff]/40 shadow-[0_0_15px_rgba(0,212,255,0.4)] flex-shrink-0 flex items-center justify-center p-0.5">
                          <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain rounded-full" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 scroll-m-0 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}>
                          <GraduationCap size={20} style={{ color: "#00d4ff" }} />
                        </div>
                      )}
                      <div>
                        <h3 className="font-display font-bold text-white text-lg sm:text-xl">{edu.institution}</h3>
                        <p className="font-body text-sm text-[#00d4ff] mt-0.5">{edu.degree}{edu.field ? ` — ${edu.field}` : ""}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center sm:text-right">
                      <span className="font-mono text-xs px-3 py-1 rounded-full"
                        style={{ background: "rgba(0,212,255,0.1)", color: "#00d4ff", border: "1px solid rgba(0,212,255,0.2)" }}>
                        {edu.score}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs font-mono text-white/40">
                    <span className="flex items-center gap-1 text-[#00d4ff] font-semibold drop-shadow-[0_0_5px_rgba(0,212,255,0.5)]"><MapPin size={12} className="mr-1" />{edu.location}</span>
                    <span className="flex items-center gap-1"><Calendar size={11} />{edu.dates}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
