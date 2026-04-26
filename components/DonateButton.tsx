import { Heart } from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react";

interface DonateButtonProps {
    className?: string;
}

export const DonateButton = ({className}: DonateButtonProps) => {
    return(
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`md:flex flex-col sm:flex-row hidden gap-6 items-center ${className}`}
            >
            <Link href="#volunteer" className={`group flex items-center justify-center gap-3 bg-red-500 hover:bg-white text-[#0B0F19] px-10 py-5 text-xl font-black uppercase tracking-widest transition-all shadow-[8px_8px_0px_#E53935] hover:shadow-[4px_4px_0px_#E53935] hover:translate-x-1 hover:translate-y-1 ${className}`}>
               Fight with Scales <Heart size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
    )
}