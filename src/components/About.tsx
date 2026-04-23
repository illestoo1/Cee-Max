"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    icon: "🏗️",
    title: "Advanced Manufacturing",
    sub: "State-of-the-art production processes",
  },
  {
    icon: "🔬",
    title: "Rigorous Quality Control",
    sub: "Every product tested before dispatch",
  },
  {
    icon: "🤝",
    title: "B2B Partnership Model",
    sub: "Tailored for businesses & distributors",
  },
];

const current = ["Premium Screening Paints", "Industrial Coatings"];
const coming = [
  "Satin & Matt Finishes",
  "Silk Finish Paints",
  "Gravitex Coatings",
  "Specialized Industrial Glues",
];

export default function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 px-6 md:px-16 py-20 md:py-28 border-b border-cborder bg-cdark"
    >
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-condensed text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-5">
          About Us
          <span className="block w-10 h-px bg-gold" />
        </p>

        <h2 className="font-bebas text-[clamp(3rem,7vw,6rem)] tracking-wide text-cwhite leading-none mb-4">
          The Quality
          <br />
          You Can Trust
        </h2>
        <span className="block w-12 h-0.5 bg-gold mb-7" />

        <p className="text-cwhite/60 leading-7 mb-4 text-sm md:text-base">
          CEE-MAX Manufacturing Ltd was founded with an unwavering commitment to
          excellence in industrial coatings and paints. We combine advanced
          manufacturing techniques with rigorous quality control to deliver
          results that consistently exceed industry standards.
        </p>
        <p className="text-cwhite/60 leading-7 mb-10 text-sm md:text-base">
          Based in Jos, Nigeria, we serve the B2B market with reliability,
          consistency, and the precision that professional operations demand.
        </p>

        <div className="flex flex-col gap-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="flex items-center gap-4 p-4 border border-cborder bg-cpanel hover:border-gold transition-colors duration-300 group"
            >
              <span className="text-2xl shrink-0 group-hover:scale-110 transition-transform duration-200">
                {h.icon}
              </span>
              <div>
                <p className="text-sm font-semibold text-cwhite tracking-wide">
                  {h.title}
                </p>
                <p className="text-xs text-cmuted mt-0.5">{h.sub}</p>
              </div>
              <span className="ml-auto text-gold opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                →
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right — product card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative"
      >
        <div className="border border-cborder bg-cpanel p-8 md:p-10 relative overflow-hidden h-full">
          {/* Decorative accent circle */}
          <div
            className="absolute top-0 right-0 w-40 h-40 rounded-full translate-x-16 -translate-y-16 pointer-events-none"
            style={{ background: "rgba(201,168,76,0.07)" }}
          />
          {/* Top gold line */}
          <span className="absolute top-0 left-0 w-16 h-0.5 bg-gold" />

          <p className="font-bebas text-2xl tracking-widest text-gold">
            CEE-MAX
          </p>
          <p className="font-condensed text-[0.65rem] tracking-[0.18em] uppercase text-cmuted mt-1 mb-8">
            Manufacturing Ltd · Product Range
          </p>
          <hr className="border-cborder mb-6" />

          <p className="font-condensed text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-4">
            Available Now
          </p>
          <div className="flex flex-col gap-3 mb-8">
            {current.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-cwhite py-3 px-4 border border-cborder bg-cdark"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                {item}
                <span className="ml-auto font-condensed text-[0.6rem] tracking-[0.12em] uppercase text-gold">
                  Active
                </span>
              </div>
            ))}
          </div>

          <hr className="border-cborder mb-6" />
          <p className="font-condensed text-[0.65rem] tracking-[0.2em] uppercase text-cmuted mb-4">
            Expansion Roadmap
          </p>
          <div className="flex flex-col gap-2.5">
            {coming.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-cwhite/50 py-2"
              >
                <span className="w-1.5 h-1.5 rounded-full border border-cmuted shrink-0" />
                {item}
                <span className="ml-auto font-condensed text-[0.58rem] tracking-[0.14em] uppercase text-gold/70 border border-gold/20 px-2 py-0.5">
                  Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
