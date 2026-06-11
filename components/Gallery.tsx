"use client";

import { Camera } from "lucide-react";
import { useState } from "react";

const galleryItems = [
  {
    id: 1,
    image: "/images/close.jpg",
    title: "Serving the Community",
    description:
      "For more than 16 years, Madelyn Scales Harris has worked to strengthen neighborhoods, support local families, and ensure every resident has a voice in city government.",
  },
  {
    id: 2,
    image: "/images/scales.jpg",
    title: "Leadership in Action",
    description:
      "From public safety initiatives to community development projects, Madelyn has consistently fought for practical solutions that improve quality of life across Murfreesboro.",
  },
  {
    id: 3,
    image: "/images/judgeScales.png",
    title: "Listening to Residents",
    description:
      "Strong leadership begins with listening. Community meetings and direct engagement have always been at the center of her approach to public service.",
  },
  {
    id: 4,
    image: "/images/thePeople4.jpg",
    title: "Building the Future",
    description:
      "Investing in future generations means creating opportunities, supporting education, and ensuring Murfreesboro remains a place families are proud to call home.",
  },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(galleryItems[0]);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#0B0F19] text-white py-24"
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#FFB800_1px,_transparent_1px)] bg-[length:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <Camera size={48} className="text-[#FFB800] mb-6" />

          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Campaign <br />
            <span className="text-[#FFB800]">Gallery</span>
          </h2>

          <p className="mt-6 text-slate-400 text-lg max-w-2xl">
            A look at the people, events, and moments that define a lifetime of
            service to Murfreesboro.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Image Side */}
          <div className="bg-white border-4 border-[#FFB800] shadow-[8px_8px_0px_#E53935] overflow-hidden">
            <div className="h-[500px]">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Description Side */}
          <div className="bg-slate-900 border-4 border-[#FFB800] shadow-[8px_8px_0px_#E53935] p-8 md:p-12 flex flex-col justify-between">
            <div>
              <p className="text-[#FFB800] font-black uppercase tracking-widest mb-4">
                Featured Moment
              </p>

              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                {selectedImage.title}
              </h3>

              <p className="text-slate-300 text-lg leading-relaxed">
                {selectedImage.description}
              </p>
            </div>

            <div className="mt-12">
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4">
                Browse Gallery
              </h4>

              <div className="grid grid-cols-4 gap-3">
                {galleryItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedImage(item)}
                    className={`overflow-hidden border-2 transition-all hover:cursor-pointer ${
                      selectedImage.id === item.id
                        ? "border-[#FFB800] scale-105"
                        : "border-slate-700 hover:border-white"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-square object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};