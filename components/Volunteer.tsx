export const Volunteer = () => {
    return(
         <div className="w-full lg:w-1/2 bg-[#0B0F19] text-white p-12 md:p-24 flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                Join The <span className="text-[#FFB800]">Movement.</span>
            </h2>
            <p className="text-slate-400 font-medium mb-12 text-lg">
                A campaign is only as strong as its community. Sign up to knock doors, make calls, or host a yard sign. Your time makes the difference.
            </p>
            
            <form className="space-y-6 max-w-md">
                <div>
                <input type="text" placeholder="Full Name" className="w-full bg-slate-800/50 border border-slate-700 text-white p-4 focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] transition-colors font-bold" />
                </div>
                <div>
                <input type="email" placeholder="Email Address" className="w-full bg-slate-800/50 border border-slate-700 text-white p-4 focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] transition-colors font-bold" />
                </div>
                <div>
                <input type="tel" placeholder="Phone Number" className="w-full bg-slate-800/50 border border-slate-700 text-white p-4 focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] transition-colors font-bold" />
                </div>
                <button type="button" className="w-full bg-[#FFB800] hover:bg-white text-[#0B0F19] font-black uppercase tracking-widest py-4 transition-colors shadow-[4px_4px_0px_#E53935]">
                I'm In
                </button>
            </form>
            </div>
    )
}