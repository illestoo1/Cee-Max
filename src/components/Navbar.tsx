"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = ["About", "Products", "Why Us", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Overlay (mobile) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-16 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/image/logo.png" // ✅ FIXED PATH
              alt="CEE-MAX Logo"
              width={42}
              height={42}
              className="opacity-90 group-hover:opacity-100 transition duration-300"
            />

            <div>
              <p className="text-lg tracking-widest font-bold text-yellow-400">
                CEE-MAX
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400">
                Manufacturing Ltd
              </p>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-10">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="relative text-xs tracking-widest uppercase text-gray-300 hover:text-yellow-400 transition"
                >
                  {link}
                  <span className="absolute left-0 -bottom-1 w-0 h-px bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-block text-xs tracking-widest uppercase px-6 py-3 bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
          >
            Get a Quote
          </a>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden z-50 flex flex-col gap-1.5"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-yellow-400 transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full bg-black/95 backdrop-blur-xl transition-all duration-500 z-50 ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="flex flex-col gap-6 px-6 pt-28 pb-10">
            {links.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMenuOpen(false)}
                className="text-lg tracking-widest uppercase text-gray-300 hover:text-yellow-400 transition transform hover:translate-x-2"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {link}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 text-center px-6 py-4 bg-yellow-400 text-black font-bold tracking-widest uppercase"
            >
              Get a Quote →
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
