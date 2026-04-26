"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface VolunteerButtonProps {
    className?: string;
}

export const VolunteerButton = ({className}: VolunteerButtonProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`flex flex-col sm:flex-row  gap-6 items-center `}
            >
            <a href="#volunteer" className={`group flex items-center justify-center gap-3 bg-[#FFB800]  hover:bg-white text-[#0B0F19] px-10 py-5 text-xl font-black uppercase tracking-widest transition-all shadow-[8px_8px_0px_#E53935] hover:shadow-[4px_4px_0px_#E53935] hover:translate-x-1 hover:translate-y-1 ${className}`}>
                Join The Movement <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </motion.div>
    )
}