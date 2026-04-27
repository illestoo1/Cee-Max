"use client";

import Image from "next/image";
import WhatsAppQR from "./WhatsAppQR";

const links = ["About", "Products", "Why Us", "Contact"];

export default function Footer() {
  return (
    <footer className="border-t border-cborder bg-cdark">
      {/* Top */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16 py-14 border-b border-cborder">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/image/logo.png"
              alt="CEE-MAX"
              width={40}
              height={40}
              className="invert opacity-80"
            />
            <div>
              <p className="font-bebas text-[1.25rem] tracking-[0.12em] text-gold leading-none">
                CEE-MAX
              </p>
              <p className="font-condensed text-[0.5rem] tracking-[0.2em] uppercase text-cmuted">
                Manufacturing Ltd
              </p>
            </div>
          </div>

          <p className="text-xs text-cmuted leading-7 max-w-65">
            Leading producer of high-quality screening paints and industrial
            coatings. Based in Jos, Nigeria.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="block w-6 h-px bg-gold/40" />
            <span className="font-condensed text-[0.6rem] tracking-[0.16em] uppercase text-gold/60">
              The Quality You Can Trust
            </span>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="font-condensed text-[0.65rem] tracking-[0.22em] uppercase text-gold mb-6">
            Quick Links
          </p>
          <ul className="list-none m-0 p-0 flex flex-col gap-3">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="font-condensed text-xs tracking-[0.14em] uppercase text-cmuted hover:text-gold transition-colors duration-200 no-underline group flex items-center gap-2"
                >
                  <span className="w-3 h-px bg-cmuted group-hover:bg-gold group-hover:w-5 transition-all duration-200" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* QR */}
        <div>
          <p className="font-condensed text-[0.65rem] tracking-[0.22em] uppercase text-gold mb-6">
            Chat With Us
          </p>
          <WhatsAppQR size={100} />
          <p className="mt-4 text-xs text-cmuted leading-6 max-w-45">
            Scan to start a WhatsApp conversation with our team.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="px-6 md:px-16 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 flex-wrap">
        <span className="font-bebas text-[1.15rem] tracking-widest text-gold">
          CEE-MAX MANUFACTURING LTD
        </span>

        <span className="font-condensed text-[0.68rem] tracking-[0.18em] uppercase text-cmuted">
          © {new Date().getFullYear()} — All rights reserved
        </span>
      </div>
    </footer>
  );
}
