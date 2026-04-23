"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    num: "01",
    title: "Consistent Quality",
    desc: "Every single batch is tested against strict quality benchmarks before it leaves our facility. Zero compromise on standards.",
  },
  {
    num: "02",
    title: "24/7 Production",
    desc: "Our manufacturing runs around the clock so we can meet your timelines and volume requirements without delay.",
  },
  {
    num: "03",
    title: "B2B Expertise",
    desc: "We understand the needs of businesses, distributors, and large-scale buyers. Bulk orders, competitive pricing, reliable supply.",
  },
  {
    num: "04",
    title: "Local Manufacturer",
    desc: "Proudly based in Jos, Nigeria. Supporting local industry while delivering world-class product quality to the Nigerian market.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="px-6 md:px-16 py-20 md:py-28 border-t border-b border-cborder bg-cdark"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className="font-condensed text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-5">
          Why Choose Us
          <span className="block w-10 h-px bg-gold" />
        </p>
        <h2 className="font-bebas text-[clamp(2.8rem,6vw,6rem)] tracking-wide text-cwhite leading-none">
          Our Commitment
          <br />
          to Excellence
        </h2>
      </motion.div>

      {/* Same bordered-grid technique */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-cborder">
        {reasons.map((r, i) => (
          <motion.div
            key={r.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative border-r border-b border-cborder bg-cdark p-8 md:p-10 hover:bg-cpanel transition-colors duration-300"
          >
            {/* Hover gold accent */}
            <span className="absolute top-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500" />

            <p
              className="font-bebas text-[4rem] leading-none mb-5 select-none"
              style={{ color: "rgba(201,168,76,0.2)" }}
            >
              {r.num}
            </p>
            <p className="font-condensed text-sm font-bold tracking-[0.1em] uppercase text-cwhite mb-3">
              {r.title}
            </p>
            <p className="text-xs text-cmuted leading-7">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
