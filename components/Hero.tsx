"use client";

import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

const Hero = () => {
    const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], ["0%", "50%"]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
          <img src={`/images/close.webp`} alt="Community Gathering" className="w-full h-full object-cover object-center" />
        </motion.div>

        <div className="relative z-20 container mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-block py-2 px-6 bg-[#FFB800] text-[#0B0F19] font-black text-sm uppercase tracking-[0.3em] mb-6 shadow-xl transform -rotate-1">
              Re-Elect Murfreesboro's Voice
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] max-w-5xl mx-auto drop-shadow-2xl">
              Leading With My <span className="text-[#E53935] inline-block -rotate-2 transform">Heart</span> <br className="hidden md:block"/> For All People.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-200 font-bold max-w-3xl mx-auto mb-12 drop-shadow-lg"
          >
            16 Years of Unyielding Service. Standing Firm in Conflict. Always Fighting for You.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <a href="#volunteer" className="group flex items-center justify-center gap-3 bg-[#FFB800] hover:bg-white text-[#0B0F19] px-10 py-5 text-xl font-black uppercase tracking-widest transition-all shadow-[8px_8px_0px_#E53935] hover:shadow-[4px_4px_0px_#E53935] hover:translate-x-1 hover:translate-y-1">
              Join The Movement <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
  );
};

export default Hero;
