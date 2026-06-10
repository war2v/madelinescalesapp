import { CalendarDays } from "lucide-react";

export const EarlyVoting = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFB800] border-y-4 border-[#E53935]">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#0B0F19_1px,_transparent_1px)] bg-[length:24px_24px]" />

      <div className="relative max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center">
          <CalendarDays
            size={48}
            className="text-[#E53935] mb-4"
          />

          <p className="text-[#E53935] font-black uppercase tracking-[0.3em] text-sm mb-3">
            Make Your Voice Heard
          </p>

          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0B0F19] mb-8">
            Voting Dates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            <div className="bg-white border-4 border-[#0B0F19] shadow-[6px_6px_0px_#0B0F19] p-8">
              <p className="text-[#E53935] font-black uppercase tracking-widest text-sm mb-2">
                Early Voting
              </p>

              <h3 className="text-3xl font-black text-[#0B0F19]">
                July 17 – August 1
              </h3>
            </div>

            <div className="bg-[#0B0F19] text-white border-4 border-white shadow-[6px_6px_0px_#E53935] p-8">
              <p className="text-[#FFB800] font-black uppercase tracking-widest text-sm mb-2">
                Election Day
              </p>

              <h3 className="text-3xl font-black">
                August 6
              </h3>
            </div>
          </div>

          <p className="mt-8 text-[#0B0F19] font-bold uppercase tracking-wide">
            Every Vote Matters
          </p>
        </div>
      </div>
    </section>
  );
};