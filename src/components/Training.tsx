"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { BookOpen, ExternalLink, Maximize2, X } from "lucide-react";
import { resumeData } from "@/data/resume";

const techIcons: Record<string, string> = {
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "Excel": "https://cdn-icons-png.flaticon.com/512/732/732115.png",
  "Power BI": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "Machine-Learning": "https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
};

const OrbitingTrainingStack = ({ stack, image, onImageClick }: { stack: string[], image?: string, onImageClick: (img: string) => void }) => {
  return (
    <div className="relative w-full aspect-square max-w-[320px] flex items-center justify-center shrink-0 my-8 xl:my-0 xl:ml-12 mx-auto hidden md:flex">
      {/* Center Certificate */}
      {image ? (
        <div 
           className="absolute w-36 h-28 sm:w-44 sm:h-32 rounded-xl flex items-center justify-center z-10 glass overflow-hidden cursor-pointer hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,212,255,0.3)] border-2 border-[#00d4ff]/40"
           onClick={() => onImageClick(image)}
        >
           <img src={image} alt="Certificate" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
           <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <Maximize2 className="text-white w-6 h-6 drop-shadow-md" />
           </div>
        </div>
      ) : (
        <div className="absolute w-20 h-20 bg-gradient-to-br from-[#00d4ff]/20 to-[#7c3aed]/20 rounded-full border border-[#00d4ff]/30 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,212,255,0.3)]">
          <BookOpen className="text-[#00d4ff] w-8 h-8" />
        </div>
      )}
      
      {/* Orbit Track */}
      <div className="absolute w-[90%] h-[90%] rounded-full border border-dashed border-[#7c3aed]/30 opacity-60 z-0"></div>

      {/* Orbital Plane */}
      <motion.div 
        className="absolute w-[90%] h-[90%] z-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {stack.map((tech, i) => {
          const angle = (i / stack.length) * (2 * Math.PI);
          const x = 50 + 50 * Math.cos(angle); 
          const y = 50 + 50 * Math.sin(angle);
          const iconSrc = techIcons[tech] || "https://cdn-icons-png.flaticon.com/512/1006/1006509.png";
          
          return (
            <div 
              key={tech} 
              className="absolute z-30"
              style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex flex-col items-center justify-center p-2 shadow-xl hover:scale-125 transition-transform cursor-default"
                   style={{ background: 'rgba(255,255,255,0.95)', border: '2px solid rgba(124,58,237,0.8)', boxShadow: '0 5px 20px rgba(124,58,237,0.4)' }}>
                <motion.div className="w-full h-full flex flex-col justify-center items-center"
                            animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
                  <img src={iconSrc} alt={tech} className="w-6 h-6 sm:w-7 sm:h-7 object-contain mb-1" />
                  <span className="text-[7px] sm:text-[9px] font-mono leading-[1.1] text-[#080c14] font-extrabold uppercase tracking-tighter text-center">{tech}</span>
                </motion.div>
              </div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default function Training() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10"
            style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(10px)" }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-[110]">
              <X size={24} />
            </button>
            <motion.div 
               initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
               className="relative max-w-5xl w-full rounded-3xl overflow-hidden glass border border-white/20 shadow-[0_0_50px_rgba(0,212,255,0.3)] flex justify-center bg-black"
               onClick={(e) => e.stopPropagation()}
            >
               <img src={selectedImage} alt="Certificate Full View" className="w-full h-auto object-contain max-h-[85vh] rounded-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="training" className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] font-mono text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(245,158,11,0.2)]">Training</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">Hands-On Experience</h2>
            <p className="font-body text-white/50 mb-16 max-w-lg text-lg">Professional training and structured skill development.</p>
          </motion.div>

          <div className="flex flex-col gap-10 max-w-6xl mx-auto">
            {resumeData.training.map((t, i) => (
              <motion.div key={t.organization} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2 }} className="glass rounded-3xl p-8 lg:p-10 relative shadow-[0_0_30px_rgba(124,58,237,0.1)]">
                
                <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
                  {/* Left: Content */}
                  <div className="flex-1 w-full">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-white/5 pb-6">
                      <div className="flex items-center gap-5">
                          {(t as any).logo ? (
                            <div className="w-14 h-14 bg-white rounded-2xl flex flex-shrink-0 items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.5)] p-1.5"
                                 style={{ border: "2px solid rgba(0,212,255,0.6)" }}>
                              <img src={(t as any).logo} alt="Organization Logo" className="w-full h-full object-contain" />
                            </div>
                          ) : (
                            <div className="w-14 h-14 rounded-2xl flex flex-shrink-0 items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.2)]"
                                 style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)" }}>
                              <BookOpen size={24} style={{ color: "#00d4ff" }} />
                            </div>
                          )}
                        <div>
                          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                            {t.organization}
                          </h3>
                          <p className="font-body text-[#7c3aed] text-base mt-2 mb-3 font-semibold max-w-lg">{t.course}</p>
                          {t.link && t.link !== "#" && (
                            <a href={t.link} target="_blank" rel="noreferrer"
                               className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-lg transition-all hover:bg-[#00d4ff]/20 hover:scale-105"
                               style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.4)", color: "#00d4ff" }}>
                              VERIFY PROJECT <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                      <span className="font-mono text-sm px-4 py-1.5 rounded-full self-start md:self-auto whitespace-nowrap"
                        style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.3)" }}>
                        {t.dates}
                      </span>
                    </div>

                    <div className="space-y-4 ml-0 md:ml-20">
                      {t.bullets.map((b, bi) => (
                        <div key={bi} className="flex gap-4 items-start">
                          <span className="mt-2.5 flex-shrink-0 w-2 h-2 rounded-full bg-[#00d4ff] shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
                          <p className="font-body text-[15px] sm:text-base text-white/70 leading-relaxed">{b}</p>
                        </div>
                      ))}
                      
                      {/* Mobile Tech Stack Fallback */}
                      {/* @ts-ignore - stack optional binding fallback */}
                      {t.stack && (
                        <div className="flex flex-wrap gap-2 mt-8 md:hidden w-full">
                          {/* @ts-ignore */}
                          {t.stack.map((s) => (
                            <span key={s} className="font-mono text-xs px-3 py-1.5 bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/30 rounded-lg shadow-sm">
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {/* Mobile Certificate Fallback */}
                      {/* @ts-ignore */}
                      {t.image && (
                         <div className="md:hidden mt-8 w-full rounded-2xl overflow-hidden border border-[#00d4ff]/30 shadow-[0_0_20px_rgba(0,212,255,0.2)] cursor-pointer" onClick={() => setSelectedImage(t.image as string)}>
                            {/* @ts-ignore */}
                            <img src={t.image} alt="Certificate Mobile View" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" />
                         </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Right: Orbital Tech Stack around Image */}
                  {/* @ts-ignore */}
                  {(t.stack && t.image) && (
                    /* @ts-ignore */
                    <OrbitingTrainingStack stack={t.stack} image={t.image} onImageClick={setSelectedImage} />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
