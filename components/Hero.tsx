"use client";

import { ArrowRight, Heart } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { VolunteerButton } from "./VolunteerButton";
import { DonateButton } from "./DonateButton";

const Hero = () => {
    const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], ["0%", "50%"]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section id="hero" className=" relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
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
              Leading With My <span className="flex text-[#E53935] justify-center items-center gap-2 transform">Heart </span> <br className="hidden md:block"/> For All People.
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

          <div className="flex w-full p-10 md:justify-center gap-4 md:flex-row flex-col items-center">
                <VolunteerButton/>
                <DonateButton/>
            </div>
        </div>
      </section>
  );
};

export default Hero;
