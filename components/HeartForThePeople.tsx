"use client";

import { HeartHandshake, Scale, ShieldCheck } from "lucide-react";
import { motion } from "motion/react"

export const HeartForThePeople = () => {
    return(
        <section id="impact" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0  h-full bg-slate-50 -skew-x-12 transform origin-top right-[-10%]" />
        
        <div className="mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mb-20">
            <h2 className="text-[#0B0F19] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              A Heart For <br/><span className="text-[#E53935]">The People.</span>
            </h2>
            <p className="text-xl text-slate-700 font-bold max-w-2xl border-l-4 border-[#FFB800] pl-6">
              Leadership isn't about sitting in an office. It's about being on the ground, helping neighbors, and standing firm when the community needs a champion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#0B0F19] p-8 group relative overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-2xl"
            >
              <div className="absolute inset-0 bg-[#E53935] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500 ease-out z-0" />
              <div className="relative z-10">
                <HeartHandshake className="text-[#FFB800] w-16 h-16 mb-6 group-hover:text-white transition-colors" />
                <h3 className="text-2xl text-white font-black uppercase tracking-tight mb-4 group-hover:text-white">Relentless Advocacy</h3>
                <p className="text-slate-400 group-hover:text-white/90 font-medium leading-relaxed">
                  Whether it’s advocating for fair housing or ensuring every voice is heard at the zoning board, she has stood between the people and bureaucracy for over two decades.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#0B0F19] p-8 group relative overflow-hidden rounded-tl-3xl rounded-br-3xl shadow-2xl md:mt-12"
            >
              <div className="absolute inset-0 bg-[#FFB800] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500 ease-out z-0" />
              <div className="relative z-10">
                <ShieldCheck className="text-[#E53935] w-16 h-16 mb-6 group-hover:text-[#0B0F19] transition-colors" />
                <h3 className="text-2xl text-white font-black uppercase tracking-tight mb-4 group-hover:text-[#0B0F19]">Standing Firm in Conflict</h3>
                <p className="text-slate-400 group-hover:text-[#0B0F19]/90 font-medium leading-relaxed">
                  Not afraid to be the dissenting vote when it matters. True leadership requires the courage to stand alone when the community's best interests are on the line.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#0B0F19] p-8 group relative overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-2xl"
            >
              <div className="absolute inset-0 bg-[#E53935] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500 ease-out z-0" />
              <div className="relative z-10">
                <Scale className="text-[#FFB800] w-16 h-16 mb-6 group-hover:text-white transition-colors" />
                <h3 className="text-2xl text-white font-black uppercase tracking-tight mb-4 group-hover:text-white">Women in Leadership</h3>
                <p className="text-slate-400 group-hover:text-white/90 font-medium leading-relaxed">
                  As the only woman on the council for 10 years, she broke barriers and fought relentlessly to ensure women are represented in every major city decision.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-20 relative h-[400px] w-full bg-[#0B0F19] flex items-center overflow-hidden">
            <div className="absolute inset-0 opacity-40 mix-blend-luminosity">
              <img src={"https://images.pexels.com/photos/11596918/pexels-photo-11596918.jpeg"} alt="Helping Hands" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/80 to-transparent" />
            <div className="relative z-10 p-8 md:p-16 max-w-2xl">
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-6">"She showed up when no one else would."</h3>
              <p className="text-[#FFB800] font-bold text-xl uppercase tracking-widest">— A Murfreesboro Resident</p>
            </div>
          </div>
        </div>
      </section>
    )
}