"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { VolunteerButton } from "./VolunteerButton";
import { DonateButton } from "./DonateButton";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], ["0%", "50%"]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section
      id="hero"
      className=" pt-60 relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="min-w-3xl">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply z-10" />
          <img
            src={`/images/close.jpg`}
            alt="Community Gathering"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className=" relative z-20 container mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-10 pb-10"
          >
            
            <h1 className="text-4xl sm:text-4xl  md:text-5xl lg:text-6xl xl:text-7xl font-black text-white uppercase tracking-wide leading-[0.9] max-w-5xl mx-auto drop-shadow-2xl">
              Leading With My{" "}
              <span className="flex text-[#E53935] justify-center items-center gap-2 transform">
                Heart{" "}
              </span>{" "}
              <br className="hidden md:block" /> For All People
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.4 }}
            className="sm:text-xl md:text-2xl text-slate-200 font-bold max-w-3xl mx-auto mb-12 drop-shadow-lg"
          >
            16 Years of Unyielding Service. Standing Firm in Conflict. Always
            Fighting for You.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex w-full md:justify-center gap-4 md:flex-row flex-col items-center">
            <VolunteerButton />
            <DonateButton />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="pt-36">
            <span className="inline-block xs:py-1 xs:hidden py-5 px-7 bg-[#FFB800] text-[#0B0F19] font-black text-lg uppercase tracking-[0.3em] mb-6 shadow-xl transform">
              Re-Elect Murfreesboro's Voice
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
