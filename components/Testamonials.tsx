"use client";

import { useState } from "react";
import { Megaphone } from "lucide-react";
import { VolunteerButton } from "./VolunteerButton";
import { DonateButton } from "./DonateButton";

export type Testimonial = {
  id: string;
  author: string;
  area: string;
  testimonial_text: string;
  image_url: string | null;
  updated_at: string;
  created_at: string;
  display_order: 0;
  is_approved: boolean;
  is_featured: boolean;
};

interface TestimonialProps {
  testimonial_list?: any[] | null;
}

export const Testimonials = ({ testimonial_list }: TestimonialProps) => {



  return (
    <section id="testimonials" className="py-24 bg-[#FFB800] text-[#0B0F19]">
      <div className="mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <Megaphone size={48} className="mb-6 text-[#E53935]" />

          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            The People's <br />
            Voice.
          </h2>
        </div>

        

       

        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonial_list?.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 shadow-[8px_8px_0px_#0B0F19] border-2 border-[#0B0F19] transform hover:-translate-y-2 transition-transform"
              >
                {testimonial.image_url && (
                  <div className="w-full h-72 bg-slate-800 flex items-center justify-center mb-6">
                    <img
                      src={testimonial.image_url}
                      alt={testimonial.author}
                      className="w-full h-72 object-cover object-top"
                    />
                  </div>
                )}

                <div className="text-[#E53935] font-serif text-6xl leading-none h-10">
                  "
                </div>

                <p className="text-lg font-bold text-slate-800 mb-6 max-h-28 overflow-scroll">
                  {testimonial.testimonial_text}
                </p>

                <div className="border-t-2 border-slate-100 pt-4">
                  <p className="font-black uppercase tracking-widest text-[#0B0F19]">
                    {testimonial.author}
                  </p>

                  <p className="text-sm font-bold text-slate-500 uppercase">
                    {testimonial.area}
                  </p>
                </div>
              </div>
            ))}
          </div>
        
      </div>

      <div className="flex w-full p-10 md:justify-center gap-4 md:flex-row flex-col items-center">
        <VolunteerButton className="bg-red-500 text-white" />
        <DonateButton className="text-white" />
      </div>
    </section>
  );
};
