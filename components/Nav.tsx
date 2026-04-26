"use client";

import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Heart, Menu } from "lucide-react";
import { useEffect, useState } from "react";


const Nav = () => {
    const [scrollPos, setScrollPos] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrollPos(window.scrollY > 10);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll)
    }, []);

    return (
        <nav className={`fixed top-0 flex w-full px-10 py-3 text-white bg-slate-950 transition-colors duration-400 ease-out z-100 ${scrollPos ? `bg-black/80 backdrop-blur-md`  :  `bg-transparent backdrop-blur-0`}`}>
            <div className="flex w-full">
                <div className="flex flex-col w-full ">
                    <h1 className="text-2xl font-extrabold uppercase">
                        Scales <span className="hidden md:flex">Harris</span>
                    </h1>
                    <h3 className="font-semibold text-yellow-400 uppercase">
                        For City Council
                    </h3>
                </div>

                <div className="w-full flex justify-end xl:hidden">
                    <div className="flex p-4">
                        <Link  href="#donate" className="group rounded hover:scale-105 hover:bg-red-600  bg-red-500 text-lg p-2 px-4 font-semibold flex items-center gap-2 transition-all duration-300">DONATE <Heart className="size-6 group-hover:size-8 transition-all duration-300"/></Link>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Menu/>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-full flex flex-col text-white items-center font-bold bg-slate-950 ">
                            <DropdownMenuItem>
                                <Link href="#about" className="text-lg">About</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="#legacy" className="text-lg">Legacy</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="#impact" className="text-lg">Impact</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="#testimonials" className="text-lg">Testamonials</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="#" className="rounded-lg bg-yellow-500 text-lg p-2 font-extrabold text-white flex items-center gap-2">Volunteer!</Link>
                            </DropdownMenuItem>
                           
                        </DropdownMenuContent>
                        
                    </DropdownMenu>
                    
                </div>

                <div className="justify-between font-semibold text-lg items-center w-full uppercase hidden xl:flex ">
                    <Link href="#" className="hover:font-bold hover:text-xl transition-all duration-300">About</Link>
                    <Link href="#" className="hover:font-bold hover:text-xl transition-all duration-300">Legacy</Link>
                    <Link href="#" className="hover:font-bold hover:text-xl transition-all duration-300">Impact</Link>
                    <Link href="#" className="hover:font-bold hover:text-xl transition-all duration-300">Testamonials</Link>
                </div>

                <div className="justify-end px-4 items-center w-full uppercase hidden xl:flex gap-6">
                    <Link href="#donate" className="text-lg hover:font-bold hover:text-xl transition-all duration-300 font-semibold text-yellow-300">Volunteer!</Link>
                    <Link  href="#donate" className="group rounded hover:scale-105 hover:bg-red-600  bg-red-500 text-2xl p-4 px-7 font-semibold flex items-center gap-2 transition-all duration-300">DONATE <Heart className="size-7 group-hover:size-8 transition-all duration-300"/></Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;