"use client";

import { Megaphone } from "lucide-react"
import { VolunteerButton } from "./VolunteerButton"
import { DonateButton } from "./DonateButton"

export const Testamonials = () => {
    return(
        <section id="testimonials" className="py-24 bg-[#FFB800] text-[#0B0F19]">
            <div className=" mx-auto px-6 md:px-12">
                <div className="flex flex-col items-center text-center mb-16">
                    <Megaphone size={48} className="mb-6 text-[#E53935]" />
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                    The People's <br/>Voice.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                    { text: "When my neighborhood was facing unfair zoning changes, she was the only one who stood up and fought for us. She doesn't back down.", author: "Sarah M.", area: "Ward 3", src: "/images/thePeople.webp" },
                    { text: "Seeing a Black woman lead with such confidence and grace for 16 years has inspired a whole new generation of young women in our city.", author: "Marcus T.", area: "Local Business Owner", src: "/images/thePeople2.webp" },
                    { text: "It's rare to find a politician who actually answers their phone and shows up to community meetings even when it's not election season. She is the real deal.", author: "Elena R.", area: "Community Advocate", src:"/images/thePeople3.png" }
                    ].map((testimonial, i) => (
                    <div key={i} className="bg-white p-8 shadow-[8px_8px_0px_#0B0F19] border-2 border-[#0B0F19] transform hover:-translate-y-2 transition-transform">
                        <div className="w-full h-48 bg-slate-800 flex items-center justify-center">
                            <img src={testimonial.src} alt="Historical Legacy" className="w-full h-48 object-cover " />
                        </div>
                        <div className="text-[#E53935] font-serif text-6xl leading-none h-10">"</div>
                        <p className="text-lg font-bold text-slate-800 mb-6">{testimonial.text}</p>
                        <div className="border-t-2 border-slate-100 pt-4">
                        <p className="font-black uppercase tracking-widest text-[#0B0F19]">{testimonial.author}</p>
                        <p className="text-sm font-bold text-slate-500 uppercase">{testimonial.area}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="flex w-full p-10 md:justify-center gap-4 md:flex-row flex-col items-center">
                <VolunteerButton className="bg-red-500 text-white"/>
                <DonateButton className="text-white"/>
            </div>
        </section>
    )
}