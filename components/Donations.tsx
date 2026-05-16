
import { FileWarning, Heart } from "lucide-react"




export const Donations = () => {


    return(
        <div id="donate" className="w-full  lg:w-1/2 bg-[#E53935] text-white p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none">
            <Heart size={400}  />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
               <span className="text-yellow-400">Fight</span>  with Scales.
            </h2>
            <p className="text-white/90 font-bold mb-12 text-lg">
              Grassroots campaigns rely on the people. Pitch in today to keep strong, proven leadership on the Murfreesboro City Council.
            </p>

            <div className="grid  grid-cols-3 gap-4 mb-6">
              
                <a href={"https://donate.stripe.com/28E9AT5Q5diD5cz18W6Vq00"}
                   target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0B0F19] hover:bg-white text-white hover:text-[#0B0F19] font-black text-2xl py-4 flex items-center justify-center transition-colors">
                    ${5}
                  </a>
                
                <a href={"https://donate.stripe.com/00wdR9guJ4M7dJ52d06Vq01"}
                 target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0B0F19] hover:bg-white text-white hover:text-[#0B0F19] font-black text-2xl py-4 flex items-center justify-center transition-colors">
                    
                    ${10}
                  </a>
                
               <a href={"https://donate.stripe.com/fZu28rbap7Yj6gDeZM6Vq02"}
                target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0B0F19] hover:bg-white text-white hover:text-[#0B0F19] font-black text-2xl py-4 flex items-center justify-center transition-colors">
                    
                    ${25}
                  </a>
                
                <a href={"https://donate.stripe.com/cNicN53HX4M78oLeZM6Vq04"}
                 target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0B0F19] hover:bg-white text-white hover:text-[#0B0F19] font-black text-2xl py-4 flex items-center justify-center transition-colors">
                    
                    ${50}
                  </a>
                
                <a href={"https://donate.stripe.com/cNifZhguJemHbAX2d06Vq05"}
                 target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0B0F19] hover:bg-white text-white hover:text-[#0B0F19] font-black text-2xl py-4 flex items-center justify-center transition-colors">
                    
                    ${100}
                  </a>
                
                 <a href={"https://donate.stripe.com/eVqcN50vL5Qb9sPg3Q6Vq03"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0B0F19] hover:bg-white text-white hover:text-[#0B0F19] font-black text-2xl py-4 flex items-center justify-center transition-colors">
                    
                    ${250}
                  </a>
                
            </div>
            
            <div className="flex gap-4 mb-8">
              <input type="number" placeholder="Other Amount" className="w-full bg-white/10 border-2 border-white/20 text-white placeholder-white/50 p-4 font-bold focus:outline-none focus:border-white" />
            </div>

            <a href={"https://donate.stripe.com/28E9AT5Q5diD5cz18W6Vq00"}
             target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0B0F19] hover:bg-white text-white hover:text-[#0B0F19] font-black text-2xl py-4 flex items-center justify-center transition-colors">
                    
                Donate Now
              </a>
            
            <p className="text-white/60 text-xl font-bold uppercase mt-4 text-center tracking-wider">
              Contributions are not tax deductible. Maximum contribution is $1,900 per individual.
            </p>
          </div>
        </div>
    )
}