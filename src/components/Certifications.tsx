"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, Calendar, Maximize2, X } from "lucide-react";
import { resumeData } from "@/data/resume";

const issuerColors: Record<string, string> = {
  "Udemy": "#a435f0",
  "NPTEL / IIT Madras": "#ea580c",
  "NPTEL": "#ea580c",
  "Coursera": "#0056d2",
  "Google": "#ea4335",
  "IBM": "#0f62fe"
};

const techIcons: Record<string, string> = {
  "Cloud Architecture": "https://cdn-icons-png.flaticon.com/512/3256/3256058.png",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "Google Cloud": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  "Distributed Systems": "https://cdn-icons-png.flaticon.com/512/1006/1006509.png",
  "TCP/IP": "https://img.icons8.com/color/512/network-cable.png",
  "Networking": "https://cdn-icons-png.flaticon.com/512/2885/2885417.png",
  "DNS": "https://cdn-icons-png.flaticon.com/512/2885/2885417.png",
  "IPv4": "https://img.icons8.com/color/512/network-cable.png",
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  "Scripting": "https://cdn-icons-png.flaticon.com/512/1006/1006509.png",
  "Cloud": "https://cdn-icons-png.flaticon.com/512/3256/3256058.png",
  "Hardware": "https://cdn-icons-png.flaticon.com/512/3055/3055375.png"
};

const OrbitingCertStack = ({ stack, image, logo, color, onImageClick }: { stack: string[], image?: string, logo?: string, color: string, onImageClick: (img: string) => void }) => {
  return (
    <div className="relative w-full aspect-square max-w-[280px] lg:max-w-[340px] flex items-center justify-center shrink-0 mx-auto hidden md:flex">
      {/* Center Certificate */}
      {image && (
        <div 
           className="absolute w-44 h-32 sm:w-56 sm:h-40 rounded-xl flex items-center justify-center z-10 glass overflow-hidden cursor-pointer hover:scale-110 transition-transform shadow-[0_0_30px_rgba(234,88,12,0.3)]"
           style={{ border: `2px solid ${color}40` }}
           onClick={() => onImageClick(image)}
        >
           <img src={image} alt="Certificate" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
           {logo && (
             <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg p-1.5 border-2" style={{ borderColor: color }}>
                <img src={logo} alt="Logo" className="w-full h-full object-contain" />
             </div>
           )}
           <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <Maximize2 className="text-white w-6 h-6 drop-shadow-md" />
           </div>
        </div>
      )}
      
      {/* Orbit Track */}
      <div className="absolute w-[90%] h-[90%] rounded-full border border-dashed opacity-60 z-0" style={{ borderColor: `${color}40` }}></div>

      {/* Orbital Plane with counter-rotating tech stack */}
      <motion.div 
        className="absolute w-[90%] h-[90%] z-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
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
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center p-2 shadow-xl hover:scale-125 transition-transform cursor-default"
                   style={{ background: 'rgba(255,255,255,0.95)', border: `2px solid ${color}cc`, boxShadow: `0 5px 20px ${color}66` }}>
                <motion.div className="w-full h-full flex flex-col justify-center items-center"
                            animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
                  <img src={iconSrc} alt={tech} className="w-6 h-6 sm:w-8 sm:h-8 object-contain mb-1" />
                  <span className="text-[7.5px] sm:text-[9px] font-mono leading-[1.1] text-[#080c14] font-extrabold uppercase tracking-tighter text-center">{tech}</span>
                </motion.div>
              </div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Safely define any overrides
  const certifications: any[] = resumeData.certifications;
  const featuredCerts = certifications.filter(c => c.image && c.skills);
  const standardCerts = certifications.filter(c => (!c.image || !c.skills));

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
               className="relative max-w-5xl w-full rounded-3xl overflow-hidden glass border border-white/20 shadow-[0_0_50px_rgba(234,88,12,0.3)] flex justify-center bg-black"
               onClick={(e) => e.stopPropagation()}
            >
               <img src={selectedImage} alt="Certificate Full View" className="w-full h-auto object-contain max-h-[85vh] rounded-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="certifications" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#ea580c]/10 border border-[#ea580c]/30 text-[#ea580c] font-mono text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(234,88,12,0.2)]">Certifications</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">Certifications</h2>
            <p className="font-body text-white/50 mb-12">Professional certificates and technical credentials.</p>
          </motion.div>

          {/* Featured Certifications (With Graphics & Orbits) */}
          <div className="flex flex-col gap-10">
            {featuredCerts.map((cert, i) => {
               const color = issuerColors[cert.issuer] || "#ea580c";
               return (
                 <motion.div key={cert.title} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                   transition={{ delay: i * 0.2 }} className="glass rounded-3xl p-8 lg:p-10 relative" style={{ boxShadow: `0 0 30px ${color}15` }}>
                   
                   <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-8">
                     {/* Content Side */}
                     <div className="flex-1 w-full">
                       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/5 pb-6">
                          <div className="flex items-start sm:items-center gap-5">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg p-2"
                              style={{ border: `2px solid ${color}60` }}>
                              {cert.logo ? <img src={cert.logo} alt="Logo" className="w-full h-full object-contain" /> : <Award size={24} style={{ color }} />}
                            </div>
                            <div>
                              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">{cert.title}</h3>
                              <div className="flex flex-wrap gap-2 items-center">
                                <span className="font-mono text-sm px-3 py-1 rounded-md" style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}>
                                  {cert.issuer}
                                </span>
                                <span className="font-mono text-sm text-white/40 flex items-center gap-1 ml-2">
                                  <Calendar size={14} />{cert.date}
                                </span>
                              </div>
                            </div>
                          </div>
                       </div>

                       <div className="space-y-8">
                         <p className="font-body text-white/70 leading-relaxed text-base sm:text-lg">
                            Successfully achieved the <strong>{cert.title}</strong> certification from {cert.issuer}, demonstrating advanced proficiency and gaining hands-on expertise in corresponding technology stacks.
                         </p>

                         {/* Mobile Fallbacks */}
                         {cert.skills && (
                            <div className="flex flex-wrap gap-2 md:hidden w-full">
                              {cert.skills.map((s: string) => (
                                <span key={s} className="font-mono text-xs px-3 py-1.5 rounded-lg shadow-sm" style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}>
                                  {s}
                                </span>
                              ))}
                            </div>
                         )}
                         
                         {/* Mobile image trigger */}
                         {cert.image && (
                            <div className="md:hidden mt-6 w-full rounded-2xl overflow-hidden cursor-pointer" style={{ border: `1px solid ${color}40`, boxShadow: `0 0 20px ${color}30` }} onClick={() => setSelectedImage(cert.image)}>
                               <img src={cert.image} alt="Certificate Mobile View" className="w-full h-auto object-cover opacity-90 transition-opacity" />
                            </div>
                         )}

                         <div className="pt-2">
                           {cert.link && cert.link !== "#" && (
                              <a href={cert.link} target="_blank" rel="noreferrer"
                                 className="inline-flex items-center gap-2 font-mono text-sm px-5 py-2.5 rounded-xl transition-all hover:scale-105"
                                 style={{ background: `${color}18`, border: `1px solid ${color}40`, color }}>
                                VERIFY CERTIFICATE <ExternalLink size={16} />
                              </a>
                           )}
                         </div>
                       </div>
                     </div>

                     {/* Orbital Skills Side */}
                     <OrbitingCertStack stack={cert.skills} image={cert.image} logo={cert.logo} color={color} onImageClick={setSelectedImage} />

                   </div>
                 </motion.div>
               )
            })}
          </div>

          <div className="w-full h-px bg-white/5 my-4"></div>

          {/* Standard Minor Certifications */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {standardCerts.map((cert, i) => {
              const color = issuerColors[cert.issuer] || "#00d4ff";
              return (
                <motion.div key={cert.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-5 glass-hover flex flex-col justify-between"
                  style={{ boxShadow: `0 0 20px ${color}10` }}>
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${color}15`, border: `1px solid ${color}35` }}>
                        {cert.logo ? <img src={cert.logo} alt="Logo" className="w-6 h-6 object-contain" /> : <Award size={18} style={{ color }} />}
                      </div>
                      {cert.link && cert.link !== "#" ? (
                        <a href={cert.link} target="_blank" rel="noreferrer"
                          className="w-8 h-8 flex items-center justify-center rounded-lg glass text-white/50 hover:text-[#00d4ff] transition-colors">
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <div className="w-8 h-8" />
                      )}
                    </div>
                    <h3 className="font-display font-semibold text-white text-sm leading-tight mb-4">{cert.title}</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs px-2 py-0.5 rounded-md"
                      style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}>
                      {cert.issuer}
                    </span>
                    <span className="font-mono text-xs text-white/40 flex items-center gap-1">
                      <Calendar size={10} />{cert.date}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
        </div>
      </section>
    </>
  );
}
