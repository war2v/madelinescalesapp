"use client";

import { Star } from "lucide-react"
import { motion } from "motion/react"


export const Markee = () => {
    return(
        <div className="bg-[#E53935] py-4 md:py-6 overflow-hidden flex items-center border-y-4 border-[#0B0F19] border-t-yellow-500 z-30 relative shadow-2xl">
            <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex whitespace-nowrap"
            >
            {[...Array(8)].map((_, i) => (
                <span key={i} className="text-[#0B0F19] font-black text-4xl md:text-5xl uppercase tracking-tighter px-8 flex items-center gap-8">
                Your Voice, Your Choice <Star className="text-[#FFB800] fill-current" size={32} />
                </span>
            ))}
            </motion.div>
      </div>
    )
}
