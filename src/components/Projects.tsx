"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { resumeData } from "@/data/resume";

const techIcons: Record<string, string> = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "TailwindCSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "NodeJS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "Kafka": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "Grafana": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
  "Prometheus": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
  "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  "Zustand": "https://upload.wikimedia.org/wikipedia/commons/1/17/Zustand_Logo.svg",
  "Gemini": "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
  "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "XGBoost": "https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png",
  "Flink": "https://flink.apache.org/img/logo/png/100/flink_squirrel_100_color.png",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
};

const OrbitingStack = ({ stack, stackColors }: { stack: string[], stackColors: Record<string, string> }) => {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center shrink-0 my-4 lg:my-0 lg:ml-8 ml-auto mr-auto hidden md:flex">
      <div className="absolute w-14 h-14 bg-gradient-to-br from-[#00d4ff]/20 to-[#7c3aed]/20 rounded-full border border-[#00d4ff]/30 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,212,255,0.3)]">
        <span className="font-mono text-[11px] text-[#00d4ff] font-bold text-center leading-tight">Tech<br/>Stack</span>
      </div>
      
      <div className="absolute w-full h-full rounded-full border border-dashed border-white/20 opacity-60 z-0"></div>

      <motion.div 
        className="absolute w-full h-full z-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {stack.map((tech, i) => {
          const angle = (i / stack.length) * (2 * Math.PI);
          const x = 50 + 50 * Math.cos(angle); 
          const y = 50 + 50 * Math.sin(angle);
          const iconSrc = techIcons[tech] || "https://cdn-icons-png.flaticon.com/512/1006/1006509.png";
          const color = stackColors[tech] || "#00d4ff";
          
          return (
            <div 
              key={tech} 
              className="absolute w-10 h-10 -ml-5 -mt-5 rounded-full flex items-center justify-center p-1.5 shadow-xl"
              style={{ top: `${y}%`, left: `${x}%`, background: 'rgba(255,255,255,0.95)', border: `2px solid ${color}80`, boxShadow: `0 5px 15px ${color}40` }}
              title={tech}
            >
              <motion.img 
                src={iconSrc} 
                alt={tech} 
                className="w-full h-full object-contain" 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: (typeof resumeData.projects)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const stackColors: Record<string, string> = {
    "React": "#00d4ff", "NodeJS": "#22c55e", "MongoDB": "#22c55e", "Express": "#f59e0b",
    "Python": "#f59e0b", "Flask": "#3b82f6", "JavaScript": "#eab308", "AWS": "#f97316"
  };

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass rounded-2xl overflow-hidden glass-hover cursor-pointer transition-all"
      onClick={() => setExpanded(!expanded)}
      style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.3)" }}>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {project.featured && (
                <span className="font-mono text-xs px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(0,212,255,0.1)", color: "#00d4ff", border: "1px solid rgba(0,212,255,0.2)" }}>
                  Featured
                </span>
              )}
              <span className="font-mono text-xs text-white/30">{project.dates}</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">{project.title}</h3>
            <p className="font-body text-sm text-[#7c3aed] font-medium">{project.subtitle}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl glass text-white/60 hover:text-[#00d4ff] hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,212,255,0.1)] hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                onClick={(e) => e.stopPropagation()}>
                <Github size={18} />
              </a>
            )}
            {expanded ? <ChevronUp size={20} className="text-[#00d4ff]/60" /> : <ChevronDown size={20} className="text-[#00d4ff]/60" />}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-6 items-center border-t border-white/5 pt-4">
          <div className="flex-1 w-full">
            {/* Stack chips for mobile (since orbiting UI is hidden on small screens) */}
            <div className="flex flex-wrap gap-2 mb-5 md:hidden">
              {project.stack.map((s) => (
                <span key={s} className="font-mono text-xs px-2 py-1 rounded-md"
                  style={{ background: `${stackColors[s] || "#64748b"}18`, color: stackColors[s] || "#94a3b8", border: `1px solid ${stackColors[s] || "#64748b"}30` }}>
                  {s}
                </span>
              ))}
            </div>

            {/* First bullet always visible */}
            <p className="font-body text-[15px] text-white/70 leading-relaxed mb-1">{project.bullets[0]}</p>

            {/* Expanded bullets */}
            {expanded && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }} className="mt-3 space-y-3">
                {project.bullets.slice(1).map((b, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#7c3aed] shadow-[0_0_5px_rgba(124,58,237,0.8)]" />
                    <p className="font-body text-[14px] text-white/60 leading-relaxed">{b}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
          
          <OrbitingStack stack={project.stack} stackColors={stackColors} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] font-mono text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,212,255,0.2)]">Projects</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Latest Work</h2>
          <p className="font-body text-white/50 mb-16 max-w-lg text-lg">Building highly scalable AI systems and intelligent full-stack applications with modern technology stacks.</p>
        </motion.div>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {resumeData.projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
