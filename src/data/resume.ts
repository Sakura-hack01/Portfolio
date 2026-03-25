export const resumeData = {
  basics: {
    name: "Saket Dixit",
    title: "Software Developer & ML Enthusiast",
    summary:
      "Computer Science & Engineering student at Lovely Professional University building full-stack applications and ML pipelines. Passionate about AI-powered tools, accurate prediction systems, and scalable backend solutions.",
    location: "Punjab, India",
    email: "saketdixit06@gmail.com",
    phone: "8601044086",
    linkedin: "https://www.linkedin.com/in/saket-dixit03/",
    github: "https://github.com/Sakura-hack01",
    photo: "/saket.jpg",
  },
  projects: [
    {
      title: "CareerMinds",
      subtitle: "AI Career Discovery Platform",
      stack: ["React", "Vite", "NodeJS", "Express", "MongoDB", "Gemini", "TailwindCSS", "Zustand"],
      stackLabel: "MERN & Gemini AI",
      dates: "2024 - Present",
      bullets: [
        "Built a full-stack AI-powered career platform providing smart career matching, personalized roadmaps, and 24/7 AI mentorship via Google Gemini.",
        "Implemented an AI Resume Builder and Portfolio Generator summarizing skills and roadmap progress.",
        "Developed an optimized backend with Node.js, Express, MongoDB, and secured it with JWT authentication and Bcrypt.",
        "Set up a responsive frontend using React 18, Vite, Tailwind CSS, and Zustand for state management."
      ],
      link: "https://github.com/melbinroy/CareerMinds.git",
      featured: true,
    },
    {
      title: "Vigil AI",
      subtitle: "Real-time anomaly detection system",
      stack: ["Kafka", "Flink", "XGBoost", "FastAPI", "Grafana", "Prometheus", "Kubernetes", "Docker"],
      stackLabel: "Kafka, Flink, XGBoost",
      dates: "2024",
      bullets: [
        "Designed a real-time anomaly detection system with Kafka, Flink-style feature engineering, and an ensemble ML model (Isolation Forest, Autoencoder, XGBoost).",
        "Implemented a sophisticated stream processor detecting 4 distinct fraud patterns and simulating seasonal concept drifts.",
        "Built observability stack using Prometheus, Grafana, and CUSUM for drift detection and auto-retraining triggers.",
        "Deployed dual gRPC/REST APIs for sub-10ms batch inference with zero-downtime hot model reloading, scaled via Kubernetes."
      ],
      link: "https://github.com/Sakura-hack01",
      featured: true,
    },
    {
      title: "Opti-Cache",
      subtitle: "Intelligent Predictive Caching",
      stack: ["NodeJS", "Python", "MongoDB", "Redis", "Docker", "FastAPI", "Express"],
      stackLabel: "Node.js, Python, Redis",
      dates: "2024",
      bullets: [
        "Built an intelligent middleware that predicts which database records a user will need next and pre-warms the Redis cache.",
        "Leveraged Bayesian Optimization (BoTorch & GPyTorch) to build a Gaussian Process surrogate model that learns from user behavior.",
        "Designed a Node.js API that interfaces with a Python ML Engine to continuously adapt to changing access patterns.",
        "Achieved a 20-40% increase in cache hit rate and a 15-30% reduction in average latency."
      ],
      link: "https://github.com/Sakura-hack01",
      featured: true,
    },
    {
      title: "VisionBridge",
      subtitle: "Eye-tracking Browser Extension",
      stack: ["JavaScript", "CSS"],
      stackLabel: "JavaScript, WebGazer.js",
      dates: "2024",
      bullets: [
        "Developed a highly optimized browser extension that magnifies text based on eye movement or mouse position.",
        "Integrated WebGazer.js for real-time eye tracking and implemented RequestAnimationFrame for a smooth 60fps experience.",
        "Created an intelligent idle power detection system, ensuring minimal battery consumption and a lightweight memory footprint via WeakMap usage.",
        "Designed customizable settings (magnification level, speed, sensitivity) compatible across all Chromium browsers."
      ],
      link: "https://github.com/Sakura-hack01",
      featured: true,
    },
    {
      title: "Materials Discovery",
      subtitle: "ML-driven materials prediction system",
      stack: ["Python", "Flask", "AWS"],
      stackLabel: "Python, Flask, AWS",
      dates: "Jul '25 – Aug '25",
      bullets: [
        "Built an ML-driven materials prediction system utilizing Bayesian Optimization and Active Learning techniques to significantly accelerate the research and discovery process.",
        "Optimized backend operations through parallelized computations and efficient resource management, successfully reducing query latency by 40% for faster real-time results.",
        "Deployed containerized Flask web services using AWS infrastructure to ensure high system reliability, dynamic scalability, and seamless user access under load.",
        "Collaborated within an Agile environment to rigorously refine API endpoints, ensuring robust performance consistency and smoother integration with frontend systems."
      ],
      link: "https://github.com/Sakura-hack01/Materials-Discovery.git",
      featured: true,
    }
  ],
  training: [
    {
      organization: "Centre for Professional Enhancement",
      course: "From Data to Decisions : A Hands-On Approach to Data Science",
      dates: "Jun '25 – Jul '25",
      image: "/certificate.jpg",
      stack: ["MySQL", "Excel", "Power BI", "Python", "Machine-Learning"],
      bullets: [
        "Completed a comprehensive 60-hour Data Science curriculum covering MySQL, Excel, Power BI, Python, and Machine-Learning with a production focus.",
        "Analysed and processed over 1,000 data points using advanced SQL queries and statistical methods to strengthen data quality and model readiness.",
        "Constructed a machine learning model to forecast crop yield with measurable accuracy, applying supervised learning, hyper-parameter tuning, and rigorous validation.",
        "Delivered a full-stack solution by integrating the prediction model with Flask and Power BI visual analytics, enabling interactive agricultural insights."
      ],
      link: "https://github.com/Sakura-hack01/Data-to-Insights--an-hand-on-approach-to-Data-Science.git",
      logo: "/lpu-logo.png"
    },
  ],
  certifications: [
    {
      title: "Introduction to Cloud Computing",
      issuer: "NPTEL / IIT Madras",
      date: "Nov '25",
      link: "https://github.com/Sakura-hack01/Cloud-Computing-Certificate-NPTEL.git",
      image: "/nptel-cert.png",
      logo: "https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg",
      skills: ["Cloud Architecture", "AWS", "Google Cloud", "Distributed Systems"]
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      issuer: "IBM",
      date: "Sep '24",
      link: "https://coursera.org/share/0b2223d5424cee326acddbca7c3e94a8",
      image: "/ibm-cert.png",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      skills: ["Linux", "Cloud", "Scripting", "Hardware"]
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google",
      date: "Aug '24",
      link: "https://coursera.org/share/0035102353f963d4873bcc6a716187df",
      image: "/google-cert.png",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
      skills: ["TCP/IP", "Networking", "IPv4", "DNS"]
    }
  ],
  skills: {
    languages: [
      { name: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "NodeJS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
    ],
    toolsPlatforms: [
      { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "VS Code", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Excel", image: "https://cdn-icons-png.flaticon.com/512/732/732115.png" },
      { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Linux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
    ],
    softSkills: [
      { name: "Problem-Solving", image: "https://cdn-icons-png.flaticon.com/512/1006/1006509.png" },
      { name: "Team Player", image: "https://cdn-icons-png.flaticon.com/512/1256/1256082.png" },
      { name: "Adaptability", image: "https://cdn-icons-png.flaticon.com/512/4341/4341352.png" }
    ],
  },
  education: [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      dates: "Aug '23 – Present",
      score: "CGPA: 7.34",
      logo: "/lpu-logo.png"
    },
    {
      institution: "Saraswati Vidya Niketan Inter College",
      location: "Arjun Nagar, Gola",
      degree: "Intermediate (PCM)",
      field: "",
      dates: "Jun '21 – Apr '23",
      score: "Percentage: 87.80%",
      logo: "/svnic-logo.png"
    }
  ],
};
