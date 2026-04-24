import { Heart } from "lucide-react"

export const Donations = () => {
    return(
        <div id="donate" className="w-full lg:w-1/2 bg-[#E53935] text-white p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none">
            <Heart size={400} fill="currentColor" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              Fuel The <span className="text-[#0B0F19]">Fight.</span>
            </h2>
            <p className="text-white/90 font-bold mb-12 text-lg">
              Grassroots campaigns rely on the people. Pitch in today to keep strong, proven leadership on the Murfreesboro City Council.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[25, 50, 100, 250].map(amount => (
                <button key={amount} className="bg-[#0B0F19] hover:bg-white hover:text-[#0B0F19] text-white font-black text-2xl py-4 transition-colors border-2 border-transparent hover:border-[#0B0F19]">
                  ${amount}
                </button>
              ))}
            </div>
            
            <div className="flex gap-4 mb-8">
              <input type="number" placeholder="Other Amount" className="w-full bg-white/10 border-2 border-white/20 text-white placeholder-white/50 p-4 font-bold focus:outline-none focus:border-white" />
            </div>

            <button type="button" className="w-full bg-[#0B0F19] hover:bg-white text-white hover:text-[#0B0F19] font-black uppercase tracking-widest py-5 text-xl transition-all shadow-xl">
              Donate Now
            </button>
            <p className="text-white/60 text-xs font-bold uppercase mt-4 text-center tracking-wider">
              Contributions are not tax deductible. Maximum contribution is $1,800 per individual.
            </p>
          </div>
        </div>
    )
}