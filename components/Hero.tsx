import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <div className="z-10 flex gap-16 flex-col w-full h-full text-black justify-center items-center pt-15">
            <div className="bg-yellow-500 px-7 py-3  font-black tracking-[0.3em] uppercase -rotate-2">
                <h2>Re-elect Murfreesboro's Voice!</h2>
            </div>
            <div className="tracking-tighter z-10 flex flex-col text-5xl xl:text-9xl  uppercase text-white font-[1000]">
                
                <div className="flex xl:flex-col justify-center items-center">
                    <h1>Leading with my  </h1>
                    <h1 className="text-red-500 -rotate-2 text-6xl xl:text-9xl hover:scale-105 transition-all duration-600 hover:animate-pulse  hover:cursor-pointer">heart</h1>
                </div>
                <div className="flex justify-center items-center">
                    <h1>for all people.</h1>
                </div>
            </div>
            
            <div className=" z-10 text-2xl tracking-wide flex-flex-col justify-center items-center  text-white font-extrabold">
                <h1 className="text-center">24 Years of Unyielding Service. Standing Firm in Conflict. </h1>
                <h1 className="text-center">Always Fighting for You.</h1>
            </div>
            <div className="z-10">
                
                <div className="z-10 relative right-5 bottom-5 hover:right-1 hover:bottom-1 hover:bg-white transition-all duration-400 hover:cursor-pointer  bg-yellow-500 p-6 px-10 text-2xl font-extrabold uppercase">
                    <h1 className="flex items-center tracking-wider">Join the movement <ArrowRight size={35}/></h1>
                    
                </div>
                <div className="-z-1 relative bottom-20  w-full h-full bg-red-500 "></div>
                
                
            </div>
            
        </div>
    )
}

export default Hero;