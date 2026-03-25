"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

// Procedurally generate glowing fiery asteroid rocks for the high-speed impact blast
const generateShards = (count: number) => {
  const fieryColors = ["#ea580c", "#dc2626", "#f59e0b", "#fef08a", "#ffffff"];
  return Array.from({ length: count }).map((_, i) => {
    // Blast evenly in all directions
    const angle = (i / count) * Math.PI * 2 + Math.random() * 0.5;
    const distance = 250 + Math.random() * 600; // Explode massive distance covering whole screen
    const size = 15 + Math.random() * 60; // Huge variation in debris size
    const color = fieryColors[Math.floor(Math.random() * fieryColors.length)];
    
    return {
      id: i,
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      rotation: Math.random() * 360,
      size,
      color,
      delay: 1.2, // Burst exactly at 1.2s collision millisecond
      duration: 0.8 + Math.random() * 1.5 // Extremely fast initial blast fading slowly
    };
  });
};

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);
  const shards = useMemo(() => generateShards(40), []); // Break into 40 burning asteroid pieces

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 800); 
    }, 4000); 
    return () => clearTimeout(timer);
  }, [onDone]);

  // Left Meteoroid (S) - Magma Orange
  const leftMeteor = {
    // scaleX heavily distorts the shape horizontally to create a traditional animation "Smear Frame" for extreme velocity
    initial: { x: "-100vw", opacity: 0, scaleX: 3, scaleY: 0.6 },
    animate: { 
      x: ["-100vw", "-80vw", "0px"], 
      opacity: [1, 1, 0], 
      scaleX: [3, 3, 0], // Instantly compresses to 0 collision volume on impact
      scaleY: [0.6, 0.6, 0],
      transition: { 
        duration: 1.2, 
        // 85% of the time it barely enters the screen. The last 15% (0.18s) it crosses the whole screen to create true blinding speed!
        times: [0, 0.85, 1], 
        ease: ["circIn", "circIn"] 
      }
    }
  };

  // Right Meteoroid (D) - Burning Red / Crimson
  const rightMeteor = {
    initial: { x: "100vw", opacity: 0, scaleX: 3, scaleY: 0.6 },
    animate: { 
      x: ["100vw", "80vw", "0px"], 
      opacity: [1, 1, 0], 
      scaleX: [3, 3, 0], 
      scaleY: [0.6, 0.6, 0],
      transition: { 
        duration: 1.2, 
        times: [0, 0.85, 1],
        ease: ["circIn", "circIn"] 
      }
    }
  };

  // Screen Shake mimicking immense cinematic weight and kinetic energy displacement
  const screenShake = {
    initial: { x: 0, y: 0 },
    animate: {
      x: [0, -25, 25, -20, 20, -10, 10, -5, 5, 0],
      y: [0, 25, -25, 20, -20, 15, -15, 10, -10, 0],
      transition: { delay: 1.2, duration: 0.6, ease: "linear" }
    }
  };

  // The Collision Flash (Supernova blinding heat)
  const supernova = {
    initial: { scale: 0, opacity: 1, rotate: 0 },
    animate: { 
      scale: [0, 20, 50], 
      opacity: [1, 1, 0], 
      rotate: [0, 180, 360],
      transition: { delay: 1.2, duration: 0.6, ease: "easeOut" }
    }
  };

  // The Name Reveal - Forged from the ashes of the fire
  const nameReveal = {
    initial: { scale: 0.5, opacity: 0, filter: "blur(50px)", y: 50 },
    animate: { 
      scale: 1, opacity: 1, filter: "blur(0px)", y: 0,
      transition: { delay: 1.3, duration: 1.5, type: "spring", bounce: 0.5 }
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] overflow-hidden"
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Entire internal wrapper shakes violently upon collision */}
          <motion.div variants={screenShake} initial="initial" animate="animate" className="relative flex items-center justify-center w-full h-full max-w-[100vw] overflow-hidden">
            
            {/* The Left Meteoroid (S) */}
            <motion.div variants={leftMeteor} initial="initial" animate="animate" className="absolute z-20 flex items-center justify-center">
               <div className="w-24 h-14 sm:w-36 sm:h-20 rounded-full bg-[#ea580c] flex items-center justify-center shadow-[0_0_150px_#f97316] relative">
                 {/* Intense blazing tail stretching massively over the viewport causing kinetic distortion */}
                 <div className="absolute right-[30%] w-[120vw] h-12 sm:h-16 bg-gradient-to-l from-[#f97316] via-[#fde047] to-transparent opacity-100 blur-[20px] rounded-l-full"></div>
                 {/* White hot plasma core */}
                 <div className="absolute inset-0 bg-[#fef08a] rounded-full blur-md mix-blend-overlay"></div>
                 {/* Counter-scaling the text so it doesn't look illegibly flattened by the smear frame container */}
                 <span className="font-display text-5xl sm:text-7xl font-extrabold text-[#fffbeb] relative z-10 drop-shadow-[0_0_30px_#fef08a]" style={{ transform: "scaleX(0.33) scaleY(1.4)" }}>S</span>
               </div>
            </motion.div>

            {/* The Right Meteoroid (D) */}
            <motion.div variants={rightMeteor} initial="initial" animate="animate" className="absolute z-20 flex items-center justify-center">
               <div className="w-24 h-14 sm:w-36 sm:h-20 rounded-full bg-[#dc2626] flex items-center justify-center shadow-[0_0_150px_#ef4444] relative">
                 {/* Intense blazing tail stretching massively over the viewport causing kinetic distortion */}
                 <div className="absolute left-[30%] w-[120vw] h-12 sm:h-16 bg-gradient-to-r from-[#ef4444] via-[#fca5a5] to-transparent opacity-100 blur-[20px] rounded-r-full"></div>
                 {/* White hot plasma core */}
                 <div className="absolute inset-0 bg-[#fef2f2] rounded-full blur-md mix-blend-overlay"></div>
                 {/* Counter-scaling the text so it doesn't look illegibly flattened by the smear frame container */}
                 <span className="font-display text-5xl sm:text-7xl font-extrabold text-[#fef2f2] relative z-10 drop-shadow-[0_0_30px_#ffffff]" style={{ transform: "scaleX(0.33) scaleY(1.4)" }}>D</span>
               </div>
            </motion.div>

            {/* The Collision Explosion / Fiery Shockwave */}
            <motion.div variants={supernova} initial="initial" animate="animate" className="absolute z-30 pointer-events-none flex items-center justify-center">
              {/* Massive fiery blast ring */}
              <div className="absolute w-[800px] h-[800px] border-[30px] border-[#fef08a] shadow-[0_0_250px_#ea580c] rounded-full blur-xl"></div>
              {/* Blinding white-hot collision volume */}
              <div className="absolute w-[600px] h-[600px] bg-[#ffffff] rounded-full blur-3xl mix-blend-overlay"></div>
            </motion.div>

            {/* The Shattering Meteor Rocks emerging from the extreme heat blast */}
            {shards.map((shard) => (
               <motion.div
                 key={shard.id}
                 className="absolute z-35 pointer-events-none"
                 initial={{ x: 0, y: 0, scale: 0, rotate: 0, opacity: 1 }}
                 animate={{ 
                   x: shard.x, 
                   y: shard.y, 
                   scale: 2, 
                   rotate: shard.rotation + 1440, // Frantic high-momentum spin (4 full rotations)
                   opacity: [1, 1, 0] // Rocky shards burn up entirely as they fly
                 }}
                 transition={{ 
                   delay: shard.delay, 
                   duration: shard.duration, 
                   ease: "easeOut" 
                 }}
                 style={{
                   width: shard.size,
                   height: shard.size * 1.2,
                   background: `radial-gradient(circle, ${shard.color} 10%, transparent 80%)`,
                   border: `2px solid ${shard.color}`,
                   boxShadow: `0 0 50px ${shard.color}`,
                   clipPath: "polygon(50% 0%, 100% 30%, 80% 100%, 20% 100%, 0% 30%)", // Jagged burning asteroid rock shape
                 }}
               />
            ))}

            {/* The Full Name Reveal (Saket Dixit) rising THROUGH the fire exactly aligned to the meteor aura */}
            <motion.div variants={nameReveal} initial="initial" animate="animate" className="absolute z-40 text-center flex flex-col items-center">
              <h1 className="font-display text-5xl sm:text-8xl md:text-9xl font-black tracking-widest uppercase origin-center">
                <span className="text-[#fffbeb] drop-shadow-[0_0_50px_rgba(255,255,255,1)]">Saket</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#fef08a] via-[#ea580c] to-[#dc2626] ml-4 sm:ml-8" style={{ filter: "drop-shadow(0 0 40px rgba(234,88,12,0.9))" }}>
                  Dixit
                </span>
              </h1>
              {/* Optional tiny flare text dropping down for cinematic style */}
              <motion.p 
                initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 2.2, duration: 1 }}
                className="mt-6 font-mono text-[#fef08a] text-sm tracking-[1em] uppercase opacity-70"
              >
                Igniting Innovation
              </motion.p>
            </motion.div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
