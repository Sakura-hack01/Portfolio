"use client";

import { motion } from "framer-motion";
import { Download, Mail, Phone, Github, Linkedin, Briefcase, GraduationCap, Award, MapPin } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import { resumeData } from "@/data/resume";

const skills = {
  "Languages": ["C++", "Python", "Java", "JavaScript"],
  "Frameworks": ["NodeJS", "React", "NumPy", "Pandas", "Scikit-learn", "SciPy", "TensorFlow", "GPyTorch", "XGBoost", "BoTorch", "Generative AI", "OpenCV", "Flask"],
  "Tools/Platforms": ["MySQL", "MongoDB", "VS Code", "Git", "Power BI", "Figma", "Azure", "AWS", "Linux", "Excel", "Rest API Development", "CI/CD pipelines"],
  "Soft Skills": ["Problem-Solving", "Team Player", "Adaptability"]
};

const experience = [
  {
    title: "CareerMinds",
    role: "AI Career Discovery Platform",
    date: "2024 - Present",
    points: [
      "Built a full-stack AI-powered career platform providing smart career matching, personalized roadmaps, and 24/7 AI mentorship via Google Gemini.",
      "Implemented an AI Resume Builder and Portfolio Generator summarizing skills and roadmap progress.",
      "Developed an optimized backend with Node.js, Express, MongoDB, and secured it with JWT authentication and Bcrypt.",
      "Set up a responsive frontend using React 18, Vite, Tailwind CSS, and Zustand for state management."
    ]
  },
  {
    title: "Vigil AI",
    role: "Real-time anomaly detection system",
    date: "2024",
    points: [
      "Designed a real-time anomaly detection system with Kafka, Flink-style feature engineering, and an ensemble ML model (Isolation Forest, Autoencoder, XGBoost).",
      "Implemented a sophisticated stream processor detecting 4 distinct fraud patterns and simulating seasonal concept drifts.",
      "Built observability stack using Prometheus, Grafana, and CUSUM for drift detection and auto-retraining triggers.",
      "Deployed dual gRPC/REST APIs for sub-10ms batch inference with zero-downtime hot model reloading, scaled via Kubernetes."
    ]
  },
  {
    title: "Opti-Cache",
    role: "Intelligent Predictive Caching",
    date: "2024",
    points: [
      "Built an intelligent middleware that predicts which database records a user will need next and pre-warms the Redis cache.",
      "Leveraged Bayesian Optimization (BoTorch & GPyTorch) to build a Gaussian Process surrogate model that learns from user behavior.",
      "Designed a Node.js API that interfaces with a Python ML Engine to continuously adapt to changing access patterns.",
      "Achieved a 20-40% increase in cache hit rate and a 15-30% reduction in average latency."
    ]
  },
  {
    title: "VisionBridge",
    role: "Eye-tracking Browser Extension",
    date: "2024",
    points: [
      "Developed a highly optimized browser extension that magnifies text based on eye movement or mouse position.",
      "Integrated WebGazer.js for real-time eye tracking and implemented RequestAnimationFrame for a smooth 60fps experience.",
      "Created an intelligent idle power detection system, ensuring minimal battery consumption and a lightweight memory footprint via WeakMap usage.",
      "Designed customizable settings (magnification level, speed, sensitivity) compatible across all Chromium browsers."
    ]
  },
  {
    title: "Materials Discovery",
    role: "ML-driven materials prediction system",
    date: "Jul '25 – Aug '25",
    points: [
      "Built an ML-driven materials prediction system utilizing Bayesian Optimization and Active Learning techniques to significantly accelerate the research and discovery process.",
      "Optimized backend operations through parallelized computations and efficient resource management, successfully reducing query latency by 40% for faster real-time results.",
      "Deployed containerized Flask web services using AWS infrastructure to ensure high system reliability, dynamic scalability, and seamless user access under load.",
      "Collaborated within an Agile environment to rigorously refine API endpoints, ensuring robust performance consistency and smoother integration with frontend systems."
    ]
  }
];

const training = [
  {
    title: "Data to Insights-a hands-on approach to Data Science",
    institution: "Data Science Certificate",
    date: "Jun '25 – Jul '25",
    points: [
      "Completed a comprehensive 60-hour Data Science curriculum covering MySQL, Excel, Power BI, Python, and Machine-Learning with a production focus.",
      "Analysed and processed over 1,000 data points using advanced SQL queries and statistical methods to strengthen data quality and model readiness.",
      "Constructed a machine learning model to forecast crop yield with measurable accuracy, applying supervised learning, hyper-parameter tuning, and rigorous validation.",
      "Delivered a full-stack solution by integrating the prediction model with Flask and Power BI visual analytics, enabling interactive agricultural insights."
    ]
  }
];

const certifications = [
  { title: "Introduction to Cloud Computing", issuer: "NPTEL", date: "Nov '25" },
  { title: "Introduction to Hardware and Operating Systems", issuer: "IBM", date: "Sep '24" },
  { title: "The Bits and Bytes of Computer Networking", issuer: "Google", date: "Aug '24" }
];

const achievements = [
  "Secured Global Rank 7232rd: Among 701k+ participants in Leetcode Bitwise Weekly Contest 139 (Sep '24)"
];

const LeetCodeOrbit = () => {
  const icons = [
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" }
  ];

  // Generates physical 2D paths for 3D-looking elliptical orbital rings
  const generateAtomPath = (angleOffsetDeg: number, radiusX = 64, radiusY = 24) => {
    const steps = 60;
    const pathX = [];
    const pathY = [];
    const rad = (angleOffsetDeg * Math.PI) / 180;
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * Math.PI * 2;
      const x = Math.cos(t) * radiusX;
      const y = Math.sin(t) * radiusY;
      const rotatedX = x * Math.cos(rad) - y * Math.sin(rad);
      const rotatedY = x * Math.sin(rad) + y * Math.cos(rad);
      pathX.push(rotatedX);
      pathY.push(rotatedY);
    }
    return { x: pathX, y: pathY };
  };

  const path1 = generateAtomPath(0);
  const path2 = generateAtomPath(60);
  const path3 = generateAtomPath(120);

  return (
    <div className="relative w-48 h-48 flex items-center justify-center shrink-0">
      <div className="absolute w-16 h-16 bg-white/95 rounded-2xl border-[3px] border-yellow-500/80 flex items-center justify-center z-20 shadow-[0_0_25px_rgba(234,179,8,0.5)]">
        <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" 
             className="w-10 h-10 object-contain filter drop-shadow-md" alt="LeetCode" />
      </div>

      {icons.map((icon, i) => {
        const path = i === 0 ? path1 : i === 1 ? path2 : path3;
        const color = i === 0 ? "#f59e0b" : i === 1 ? "#00d4ff" : "#7c3aed";
        return (
          <motion.div
            key={icon.name}
            className="absolute z-30"
            animate={{ x: path.x, y: path.y }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-12 h-12 -ml-6 -mt-6 bg-white/95 rounded-full flex flex-col items-center justify-center p-1.5 shadow-xl hover:scale-125 transition-transform cursor-default"
                 style={{ border: `2px solid ${color}90`, boxShadow: `0 5px 15px ${color}40` }}>
              <img src={icon.src} alt={icon.name} className="w-6 h-6 object-contain" />
              <span className="text-[7px] font-mono leading-none text-[#080c14] font-extrabold uppercase mt-1">{icon.name}</span>
            </div>
          </motion.div>
        )
      })}

      {[0, 60, 120].map((deg) => (
        <div key={deg} className="absolute w-[128px] h-[48px] rounded-full border-[1.5px] border-dashed border-white/20 opacity-60 z-0"
             style={{ transform: `rotate(${deg}deg)` }}></div>
      ))}
    </div>
  )
};

export default function ResumePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      
      <main className="relative z-10 min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto font-body text-white/80">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-16">
          
          {/* Header Section */}
          <motion.header variants={itemVariants} className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 to-[#7c3aed]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold glow-text">Saket Dixit</h1>
                <h2 className="text-xl md:text-2xl text-[#00d4ff] font-medium">Software Developer & ML Enthusiast</h2>
                <div className="flex flex-col sm:flex-row gap-3 pt-2 text-sm text-white/70">
                  <a href="mailto:saketdixit06@gmail.com" className="flex items-center gap-2 hover:text-[#00d4ff] transition-colors"><Mail size={16} /> saketdixit06@gmail.com</a>
                  <a href="tel:+918601044086" className="flex items-center gap-2 hover:text-[#00d4ff] transition-colors"><Phone size={16} /> +91 8601044086</a>
                </div>
                <div className="flex gap-4 pt-2">
                  <a href="https://www.linkedin.com/in/saket-dixit03/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors"><Linkedin size={22} /></a>
                  <a href="https://github.com/Sakura-hack01" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors"><Github size={22} /></a>
                </div>
              </div>
              <div className="flex-shrink-0">
                <a 
                  href="/saket.pdf" 
                  download="Saket_Dixit_Resume.pdf"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all transform hover:-translate-y-1"
                >
                  <Download size={20} /> Download CV
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 text-white/70 leading-relaxed text-sm md:text-base">
              Computer Science & Engineering student at Lovely Professional University building full-stack applications and ML pipelines. Passionate about AI-powered tools, accurate prediction systems, and scalable backend solutions. Strong problem-solving skills and adaptability in team settings.
            </div>
          </motion.header>

          {/* Skills Section */}
          <motion.section variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-display font-semibold flex items-center gap-3"><Award className="text-[#00d4ff]" /> Skills Focus</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[ 
                { title: "Languages", data: resumeData.skills.languages },
                { title: "Tools & Platforms", data: resumeData.skills.toolsPlatforms },
                { title: "Soft Skills", data: resumeData.skills.softSkills } 
              ].map((category) => (
                <div key={category.title} className="glass p-6 rounded-2xl glass-hover">
                  <h4 className="text-lg font-medium text-[#7c3aed] mb-8 text-center">{category.title}</h4>
                  <div className="flex flex-wrap gap-x-6 gap-y-8 justify-center">
                    {category.data.map((skill: { name: string; image: string }, si: number) => (
                      <motion.div 
                        key={skill.name} 
                        className="flex flex-col items-center justify-center w-16"
                        animate={{ y: [-5, 5, -5] }} 
                        transition={{ repeat: Infinity, duration: 3 + si * 0.2, ease: "easeInOut" }}
                      >
                        <div className="w-12 h-12 rounded-full bg-white/95 border-2 border-[#00d4ff]/50 shadow-[0_0_15px_rgba(0,212,255,0.3)] flex items-center justify-center p-2 mb-2">
                          <img src={skill.image} alt={skill.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="text-[9px] font-mono text-white/80 font-bold uppercase tracking-tighter text-center leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-display font-semibold flex items-center gap-3"><Briefcase className="text-[#00d4ff]" /> Projects & Experience</h3>
            <div className="pl-6 border-l-2 border-[#00d4ff]/30 space-y-10">
              {experience.map((exp, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(0,212,255,1)]" />
                  <div className="glass p-6 rounded-2xl glass-hover group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-[#00d4ff] transition-colors">{exp.title}</h4>
                        <p className="text-[#00d4ff] text-sm font-medium mt-1">{exp.role}</p>
                      </div>
                      <span className="text-white/50 text-sm whitespace-nowrap">{exp.date}</span>
                    </div>
                    <ul className="space-y-2 mt-4 text-sm text-white/70">
                      {exp.points.map((point, j) => (
                        <li key={j} className="flex gap-3">
                          <span className="text-[#7c3aed] mt-1">•</span> <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              
              {/* Training as an experience block */}
              {training.map((tr, i) => (
                <div key={`tr-${i}`} className="relative group">
                  <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-[#7c3aed] group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
                  <div className="glass p-6 rounded-2xl glass-hover hover:border-[#7c3aed]/50 transition-colors group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-[#7c3aed] transition-colors">{tr.title}</h4>
                        <p className="text-[#7c3aed] text-sm font-medium mt-1">{tr.institution}</p>
                      </div>
                      <span className="text-white/50 text-sm whitespace-nowrap">{tr.date}</span>
                    </div>
                    <ul className="space-y-2 mt-4 text-sm text-white/70">
                      {tr.points.map((point, j) => (
                        <li key={j} className="flex gap-3">
                          <span className="text-[#00d4ff] mt-1">•</span> <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Removed Education from Resume page per user request, leaving only 1 merged column for Certifications & Achievements */}
          <div className="grid md:grid-cols-1 max-w-3xl mx-auto gap-10">

            {/* Certifications and Achievements */}
            <motion.section variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-semibold flex items-center gap-3 mb-6"><Award className="text-[#7c3aed]" /> Certifications</h3>
                <div className="space-y-3">
                  {certifications.map((cert, i) => (
                    <div key={i} className="glass px-4 py-3 border border-white/5 rounded-xl flex justify-between items-center group hover:bg-white/10 hover:border-[#7c3aed]/30 transition-all">
                      <div className="truncate pr-4 flex flex-col gap-1">
                        <p className="text-sm font-medium leading-tight text-white/90 group-hover:text-[#00d4ff] transition-colors whitespace-normal">{cert.title}</p>
                        <p className="text-xs text-[#7c3aed] font-medium">{cert.issuer}</p>
                      </div>
                      <div className="text-xs font-mono text-[#7c3aed] whitespace-nowrap bg-[#7c3aed]/10 px-2 py-1 rounded">
                        {cert.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-semibold flex items-center gap-3 mb-6"><Award className="text-yellow-500" /> Achievements</h3>
                
                <div className="glass p-6 md:p-8 rounded-3xl border border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.1)] flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 group glass-hover hover:border-yellow-500/40 transition-colors">
                  
                  {/* Left: Orbit Graphic */}
                  <LeetCodeOrbit />

                  {/* Right: Text */}
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors mb-2">Competitive Programming</h4>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4 max-w-lg mx-auto md:mx-0">
                      {achievements[0]}
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <span className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/30 px-3 py-1 text-xs font-mono rounded-full">Top 1% Global</span>
                      <span className="bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30 px-3 py-1 text-xs font-mono rounded-full">Algorithms</span>
                      <span className="bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/30 px-3 py-1 text-xs font-mono rounded-full">Data Structures</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

        </motion.div>
      </main>
    </>
  );
}
