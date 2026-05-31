
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

interface VideoCarouselProps {
  videoTestimonials: any[]
}

export const VideoCarousel = ({videoTestimonials}: VideoCarouselProps) => {
    

    return (
        <section className="py-24 w-full  overflow-hidden relative border-t-8 border-[#E53935]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className=" mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                For The <br/><span className="text-[#FFB800]">Next Generation.</span>
              </h2>
              <p className="text-lg text-slate-400 font-medium max-w-lg mb-8">
                Every policy we pass, every neighborhood we defend, and every barrier we break is about the future we leave behind. The work we do today ensures our children and grandchildren inherit a city they are proud to call home. Hear from the young voices driving this movement.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2 relative pb-8">
              {/* Decorative backgrounds */}
              <div className="absolute -inset-4 bg-[#E53935] transform rotate-3 opacity-20 rounded-3xl z-0"></div>
              <div className="absolute -inset-4 bg-[#FFB800] transform -rotate-2 opacity-10 rounded-3xl z-0"></div>
              
              <div className="relative z-10 rounded-tr-3xl rounded-bl-3xl shadow-2xl border-4 border-slate-800 bg-slate-900 overflow-hidden">
                <Carousel
                  opts={{
                    loop: true,
                    align: "start",
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {videoTestimonials?.map((video) => (
                      <CarouselItem key={video.id}>
                        <div className="relative group cursor-pointer outline-none">
                          <video 
                           
                            controls
                            className="w-full aspect-video opacity-80 group-hover:opacity-60 transition-opacity duration-500 rounded-tr-2xl rounded-bl-2xl"
                          >
                            <source  src={video.image} type="video/mp4" />

                            <source  src={video.image} type="video/quicktime" />
                          </video>
                          
                          
                          
                          
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 border-none bg-[#FFB800] hover:bg-white text-[#0B0F19] hover:text-[#0B0F19] w-12 h-12 [&>svg]:w-6 [&>svg]:h-6 shadow-lg z-20" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 border-none bg-[#FFB800] hover:bg-white text-[#0B0F19] hover:text-[#0B0F19] w-12 h-12 [&>svg]:w-6 [&>svg]:h-6 shadow-lg z-20" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}