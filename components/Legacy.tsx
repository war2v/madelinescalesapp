import { History, UserCheck } from "lucide-react"

export const Legacy = () => {
    return(
        <section id="legacy" className="py-24 md:py-32 bg-slate-100 overflow-hidden">
        <div className="mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-[#0B0F19] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              A Legacy Built <br/>On <span className="text-[#E53935]">History.</span>
            </h2>
            <p className="text-xl text-slate-600 font-bold max-w-3xl mx-auto">
              Public service runs deep in our veins. From groundbreaking firsts to building the foundation of modern Murfreesboro, this is more than a campaign—it is a continuation of a family's promise to its people.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-300 transform md:-translate-x-1/2" />

            {/* Event 1 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 group">
              <div className="hidden md:block w-5/12 text-right pr-8">
                <h3 className="text-3xl font-black text-[#0B0F19] uppercase tracking-tighter">Breaking Barriers</h3>
                <p className="text-slate-600 font-medium mt-2">Daughter of the first African American elected in the South since Reconstruction and Murfreesboro’s first Black Vice Mayor.</p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-[#FFB800] border-4 border-slate-100 rounded-full transform -translate-x-1/2 z-10 shadow-lg group-hover:scale-150 transition-transform" />
              <div className="w-full md:w-5/12 pl-12 md:pl-8">
                <div className="bg-white p-6 shadow-xl border-t-4 border-[#FFB800]">
                  <History className="text-[#0B0F19] mb-4" size={32} />
                  <h3 className="md:hidden text-2xl font-black text-[#0B0F19] uppercase tracking-tighter mb-2">Breaking Barriers</h3>
                  <p className="md:hidden text-slate-600 font-medium mb-4">Daughter of the first African American elected in the South since Reconstruction and Murfreesboro’s first Black Vice Mayor.</p>
                  <img src={"images/Dad.jpeg"} alt="Historical Legacy" className="w-full h-48 object-cover grayscale" />
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 group">
              <div className="w-full md:w-5/12 pl-12 md:pl-0 md:pr-8 text-left md:text-right mb-4 md:mb-0 order-2 md:order-1">
                <div className="bg-[#0B0F19] text-white p-6 shadow-xl border-t-4 border-[#E53935]">
                  <UserCheck className="text-[#E53935] mb-4 md:ml-auto" size={32} />
                  <h3 className="md:hidden text-2xl font-black text-white uppercase tracking-tighter mb-2">A Mother's Impact</h3>
                  <p className="md:hidden text-slate-400 font-medium mb-4">Daughter of the first Black female mayor, showing that leadership is about compassion, strength, and unwavering dedication.</p>
                  <div className="h-48 bg-slate-800 flex items-center justify-center">
                    <img src={"/images/Mom.jpg"} alt="Historical Legacy" className="w-full h-48 object-cover grayscale" />
                  </div>
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-[#E53935] border-4 border-slate-100 rounded-full transform -translate-x-1/2 z-10 shadow-lg group-hover:scale-150 transition-transform" />
              <div className="hidden md:block w-5/12 pl-8 order-3">
                <h3 className="text-3xl font-black text-[#0B0F19] uppercase tracking-tighter">A Mother's Impact</h3>
                <p className="text-slate-600 font-medium mt-2">Daughter of the first Black female mayor, showing that leadership is about compassion, strength, and unwavering dedication.</p>
              </div>
            </div>

            {/* Event 3 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between group">
              <div className="hidden md:block w-5/12 text-right pr-8">
                <h3 className="text-3xl font-black text-[#0B0F19] uppercase tracking-tighter">Scales Elementary</h3>
                <p className="text-slate-600 font-medium mt-2">A family legacy set in stone. The community honored this generational impact by naming a school after the family—a daily reminder of our commitment to education and the future.</p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-[#0B0F19] border-4 border-slate-100 rounded-full transform -translate-x-1/2 z-10 shadow-lg group-hover:scale-150 transition-transform" />
              <div className="w-full md:w-5/12 pl-12 md:pl-8">
                <div className="bg-white p-6 shadow-xl border-t-4 border-[#0B0F19]">
                  <img src={"images/school.webp"} alt="Scales Elementary" className="w-full h-48 object-cover mb-4" />
                  <h3 className="md:hidden text-2xl font-black text-[#0B0F19] uppercase tracking-tighter mb-2">Scales Elementary</h3>
                  <p className="md:hidden text-slate-600 font-medium">A family legacy set in stone. The community honored this generational impact by naming a school after the family.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}