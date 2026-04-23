"use client";

import { motion } from "framer-motion";

const stats = [
  { num: "100%", label: "Quality Tested", sub: "Every single batch" },
  { num: "24/7", label: "Production", sub: "Continuous capacity" },
  { num: "B2B", label: "Focused", sub: "Business-to-business" },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-cborder">
      {stats.map((s, i) => (
        <motion.div
          key={s.num}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`
            group relative px-10 py-14 md:py-16 cursor-default
            hover:bg-cpanel transition-colors duration-300
            ${i < 2 ? "sm:border-r border-b sm:border-b-0 border-cborder" : "border-b sm:border-b-0 border-cborder"}
          `}
        >
          {/* Gold accent line on hover */}
          <span className="absolute top-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500" />

          <p
            className="font-bebas text-[3.5rem] md:text-[4rem] text-gold leading-none"
            style={{ textShadow: "0 0 40px rgba(201,168,76,0.2)" }}
          >
            {s.num}
          </p>
          <p className="mt-2 font-condensed text-sm font-bold tracking-[0.14em] uppercase text-cwhite">
            {s.label}
          </p>
          <p className="mt-1 font-condensed text-xs tracking-[0.1em] uppercase text-cmuted">
            {s.sub}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
