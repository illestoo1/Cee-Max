"use client";

import { motion } from "framer-motion";

const tickerItems = [
  "🎨 Screening Paints · Premium Quality",
  "🏭 Industrial Coatings · B2B Focused",
  "✅ 100% Quality Tested",
  "⚙️ 24/7 Production",
  "🔜 Satin · Matt · Silk · Gravitex · Coming Soon",
  "📍 No. 250 Bauchi Road, Jos North",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-20 px-6 md:px-16 overflow-hidden bg-cblack"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 40%, rgba(201,168,76,0.06) 0%, transparent 65%),
            repeating-linear-gradient(0deg,  transparent, transparent 60px, rgba(255,255,255,0.015) 60px, rgba(255,255,255,0.015) 61px),
            repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.015) 60px, rgba(255,255,255,0.015) 61px)
          `,
        }}
      />

      {/* Gold vertical accent */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-6 md:left-16 top-32 bottom-24 w-px bg-gradient-to-b from-transparent via-gold to-transparent origin-top"
      />

      {/* Large watermark */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-bebas text-[clamp(8rem,22vw,22rem)] leading-none tracking-tight select-none pointer-events-none"
        style={{ color: "rgba(201,168,76,0.04)", right: "-0.05em" }}
        aria-hidden
      >
        CEEMAX
      </div>

      {/* Content */}
      <div className="relative z-10 pl-6 md:pl-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="block w-8 h-px bg-gold" />
          <span className="font-condensed text-xs tracking-[0.22em] uppercase text-gold">
            CEE-MAX Manufacturing Ltd · Jos, Nigeria
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-bebas leading-[0.9] tracking-wide text-cwhite"
          style={{ fontSize: "clamp(4rem, 9vw, 9rem)" }}
        >
          Precision
          <br />
          Manufacturing
          <br />
          for{" "}
          <span
            className="text-gold"
            style={{
              textShadow: "0 0 60px rgba(201,168,76,0.35)",
            }}
          >
            Superior
          </span>
          <br />
          Results
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-8 max-w-md text-base leading-7 text-cwhite/55"
        >
          Leading producer of high-quality screening paints and industrial
          coatings. Advanced manufacturing, rigorous quality control, products
          that exceed industry standards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-12 flex gap-4 flex-wrap items-center"
        >
          <a
            href="#contact"
            className="font-condensed text-xs tracking-[0.18em] uppercase px-10 py-4 bg-gold text-cblack font-bold hover:bg-gold-light transition-colors duration-200 no-underline"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
            }}
          >
            Request a Quote
          </a>
          <a
            href="#products"
            className="font-condensed text-xs tracking-[0.18em] uppercase px-10 py-4 border border-cborder text-cwhite hover:border-gold hover:text-gold transition-all duration-200 no-underline"
          >
            View Products →
          </a>
        </motion.div>

        {/* Mini stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 flex gap-8 md:gap-12 flex-wrap"
        >
          {[
            { num: "100%", label: "Quality Tested" },
            { num: "24/7", label: "Production" },
            { num: "B2B", label: "Focused" },
          ].map((s) => (
            <div key={s.num} className="flex flex-col gap-1">
              <span className="font-bebas text-2xl text-gold leading-none">
                {s.num}
              </span>
              <span className="font-condensed text-[0.6rem] tracking-[0.18em] uppercase text-cmuted">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-cborder py-3 overflow-hidden bg-cblack/80 backdrop-blur-sm">
        <div
          className="whitespace-nowrap inline-block"
          style={{ animation: "ticker 35s linear infinite" }}
        >
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="font-condensed text-[0.68rem] tracking-[0.18em] uppercase text-cmuted mx-10"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
