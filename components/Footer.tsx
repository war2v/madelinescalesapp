"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import QRCode from "react-qr-code";

interface FooterProps {
    date: Number;
    navLinks: {
        name: string;
        href: string;
    }[];
}
export const Footer = ({navLinks}: FooterProps) => {
  

  return (
    <footer className="bg-[#0B0F19] w-full text-white pt-24 pb-12 border-t-8 border-[#FFB800]">
      <div className=" mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link
            href={"#"}
              className="flex flex-col items-start gap-0.5 mb-6 group"
            >
              <span className="font-black text-4xl leading-none uppercase tracking-tighter text-white">
                Scales
              </span>
              <span className="font-bold text-sm uppercase tracking-[0.2em] text-[#FFB800]">
                For City Council
              </span>
            </Link>
            <p className="text-slate-400 font-medium leading-relaxed mb-6 max-w-sm">
              A legacy of 16 years of service. Daughter of history. Advocate for
              all. Leading with heart and standing firm for Murfreesboro.
            </p>
          </div>

          <div>
            <h4 className="text-[#FFB800] font-black uppercase tracking-widest mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300">
                <Mail size={18} className="text-[#E53935]" />
                <span>info@scalesforcouncil.com</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Phone size={18} className="text-[#E53935]" />
                <span>(615) 555-0124</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin size={18} className="text-[#E53935] mt-1" />
                <span>
                  P.O. Box 1234
                  <br />
                  Murfreesboro, TN 37133
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFB800] font-black uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white uppercase font-bold text-sm tracking-wider transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFB800] font-black uppercase tracking-widest mb-6">
              Share the Vision
            </h4>
            <div className="bg-white p-4 inline-block rounded-xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform">
              <QRCode
                value="https://scalesforcouncil.com"
                size={120}
                level="H"
              />
              <p className="text-[#0B0F19] text-xs font-black text-center mt-2 uppercase">
                Scan to Join
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium uppercase tracking-wider">
          <p>Paid for by the Committee to Elect Scales.</p>
          <p>&copy; {} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
