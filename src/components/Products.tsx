"use client";

import { motion } from "framer-motion";

interface Product {
  icon: string;
  name: string;
  desc: string;
  active: boolean;
}

const products: Product[] = [
  {
    icon: "🎨",
    name: "Screening Paints",
    desc: "Our flagship product. Premium-grade screening paints engineered for professional and industrial applications with consistent, reliable coverage.",
    active: true,
  },
  {
    icon: "🏭",
    name: "Industrial Coatings",
    desc: "High-performance coatings designed for durability in demanding industrial environments. Resistance to weather, abrasion, and chemical exposure.",
    active: true,
  },
  {
    icon: "✨",
    name: "Satin & Matt",
    desc: "Premium satin and matt finish paints for professional interior and exterior applications.",
    active: false,
  },
  {
    icon: "💫",
    name: "Silk Finish",
    desc: "Smooth, elegant silk finish paints for luxury residential and commercial spaces.",
    active: false,
  },
  {
    icon: "🛡️",
    name: "Gravitex",
    desc: "Heavy-duty surface protection coatings engineered for maximum durability.",
    active: false,
  },
  {
    icon: "🔩",
    name: "Industrial Glues",
    desc: "High-strength industrial adhesive solutions for demanding bonding applications.",
    active: false,
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-cblack px-6 md:px-16 py-20 md:py-28">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-condensed text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-4">
            Products
            <span className="block w-10 h-px bg-gold" />
          </p>
          <h2 className="font-bebas text-[clamp(2.8rem,6vw,6rem)] tracking-wide text-cwhite leading-none">
            What We
            <br />
            Manufacture
          </h2>
        </motion.div>

        <a
          href="#contact"
          className="self-start md:self-end font-condensed text-xs tracking-[0.18em] uppercase px-8 py-4 bg-gold text-cblack font-bold hover:bg-gold-light transition-colors duration-200 no-underline"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
          }}
        >
          Get a Quote →
        </a>
      </div>

      {/* 
        Bordered grid technique for Tailwind v4:
        Container: border-l + border-t
        Each cell:  border-r + border-b
        Result: every grid line appears exactly once — no double borders.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-cborder">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className={`
              group relative border-r border-b border-cborder bg-cdark
              p-8 md:p-11 flex flex-col gap-4 transition-colors duration-300
              ${p.active ? "hover:bg-cpanel" : ""}
            `}
          >
            {/* Coming Soon overlay */}
            {!p.active && (
              <div className="absolute inset-0 bg-cblack/50 flex items-start justify-end p-4 pointer-events-none z-10">
                <span className="font-condensed text-[0.58rem] tracking-[0.18em] uppercase border border-gold/25 text-gold/60 px-2.5 py-1">
                  Coming Soon
                </span>
              </div>
            )}

            {/* Gold top accent on active hover */}
            {p.active && (
              <span className="absolute top-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500" />
            )}

            <div
              className={`text-3xl ${!p.active ? "opacity-40" : ""} transition-transform duration-200 group-hover:scale-110`}
            >
              {p.icon}
            </div>

            <div className={!p.active ? "opacity-40" : ""}>
              <p className="font-condensed text-sm font-bold tracking-[0.1em] uppercase text-cwhite mb-2">
                {p.name}
              </p>
              <p className="text-xs text-cmuted leading-6">{p.desc}</p>
            </div>

            {p.active && (
              <span className="font-condensed text-[0.6rem] tracking-[0.14em] uppercase text-gold mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Available Now →
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
