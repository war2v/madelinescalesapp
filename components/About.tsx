"use client";

import { DonateButton } from "./DonateButton"
import { VolunteerButton } from "./VolunteerButton"

export const About = () => {
    return(
             <section id="about" className="py-24 md:py-32 bg-[#0B0F19] border-y-8 border-[#FFB800]">
        <div className=" mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-[#E53935] transform translate-x-6 translate-y-6" />
              <img src={"/images/scales.webp"} alt="Candidate Portrait" className="relative z-10 w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 object-cover shadow-2xl" />
              <div className="absolute -bottom-8 -left-8 bg-[#FFB800] text-[#0B0F19] p-6 z-20 shadow-xl">
                <span className="block text-6xl font-black tracking-tighter leading-none">16</span>
                <span className="block text-sm font-bold uppercase tracking-widest mt-1">Years of<br/>Service</span>
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-white">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Unapologetic.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#E53935]">Unwavering.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-300 font-medium leading-relaxed">
                <p>
                  For over almost two decades, I have proudly served the people of Murfreesboro. Leadership isn't just a title—it is a calling. When faced with tough decisions, I have never backed down from conflict if it meant protecting our community.
                </p>
                <p>
                  As the <strong className="text-white">only woman on the city council for 10 years</strong>, I learned early on that representation matters. Our city makes the best decisions when every voice is heard, and I have made it my mission to ensure women always have a seat at the leadership table.
                </p>
                <p>
                  But this isn't just about my time in office. It’s about a generational commitment to justice, equity, and the people of this great city.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="border-l-4 border-[#FFB800] pl-4">
                  <h4 className="text-white font-black text-2xl uppercase tracking-tighter">10 Years</h4>
                  <p className="text-slate-400 text-sm font-bold uppercase">Sole Woman on Council</p>
                </div>
                <div className="border-l-4 border-[#E53935] pl-4">
                  <h4 className="text-white font-black text-2xl uppercase tracking-tighter">1,000+</h4>
                  <p className="text-slate-400 text-sm font-bold uppercase">Community Interventions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full p-10 md:justify-center gap-4 md:flex-row flex-col items-center">
            <VolunteerButton/>
            <DonateButton/>
        </div>
      </section>
    )
}