"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import WhatsAppQR from "./WhatsAppQR";

const contactInfo = [
  {
    icon: "📍",
    label: "Address",
    value:
      "No. 250, Bauchi Road\nAdjacent Jevicho Filling Station\nJos North, Plateau State, Nigeria",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "07026672259",
    href: "tel:+2347026672259",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "ceemaxmanufacturingltd@gmail.com",
    href: "mailto:ceemaxmanufacturingltd@gmail.com",
  },
  {
    icon: "🕐",
    label: "Business Hours",
    value: "Monday – Saturday\n8:30 AM – 6:00 PM",
  },
];

const products = [
  "Screening Paints",
  "Industrial Coatings",
  "Satin / Matt Finish (Coming Soon)",
  "Silk Finish (Coming Soon)",
  "Gravitex Coatings (Coming Soon)",
  "Industrial Glues (Coming Soon)",
  "Multiple Products / General Enquiry",
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    from_name: "",
    company: "",
    from_email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      if (!formRef.current) throw new Error("Form ref is null");
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      );
      setStatus("success");
      setForm({
        from_name: "",
        company: "",
        from_email: "",
        phone: "",
        product: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-cdark border border-cborder text-cwhite text-sm px-4 py-3.5 outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-200 placeholder:text-cmuted font-barlow rounded-none";

  return (
    <section
      id="contact"
      className="bg-cblack px-6 md:px-16 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20"
    >
      {/* Left — contact info */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-condensed text-xs tracking-[0.25em] uppercase text-gold flex items-center gap-3 mb-5">
          Contact
          <span className="block w-10 h-px bg-gold" />
        </p>
        <h2 className="font-bebas text-[clamp(2.8rem,6vw,6rem)] tracking-wide text-cwhite leading-none mb-4">
          Reach Out
          <br />
          Today
        </h2>
        <span className="block w-12 h-0.5 bg-gold mb-10" />

        <div className="flex flex-col">
          {contactInfo.map((c) => (
            <div
              key={c.label}
              className="flex items-start gap-5 py-5 border-b border-cborder last:border-b-0"
            >
              <div
                className="w-11 h-11 shrink-0 flex items-center justify-center text-lg border border-cborder"
                style={{ background: "rgba(201,168,76,0.08)" }}
              >
                {c.icon}
              </div>
              <div>
                <p className="font-condensed text-[0.62rem] tracking-[0.18em] uppercase text-cmuted mb-1.5">
                  {c.label}
                </p>
                {c.href ? (
                  <a
                    href={c.href}
                    className="text-sm text-gold hover:text-gold-light transition-colors no-underline"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="text-sm text-cwhite whitespace-pre-line leading-6">
                    {c.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp QR */}
        <div className="mt-8 border border-cborder p-6 bg-cpanel flex items-center gap-8">
          <WhatsAppQR size={110} />
          <div>
            <p className="font-condensed text-xs tracking-[0.18em] uppercase text-gold mb-2">
              WhatsApp Us
            </p>
            <p className="text-xs text-cmuted leading-6">
              Scan the QR code or tap the link to start a WhatsApp conversation
              with our team directly.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right — form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <div className="border border-cborder bg-cdark p-8 md:p-10 relative">
          <span className="absolute top-0 left-0 w-12 h-0.5 bg-gold" />

          <h3 className="font-bebas text-3xl tracking-wide text-cwhite mb-1">
            Send an Enquiry
          </h3>
          <p className="text-xs text-cmuted mb-8 leading-6">
            Fill in your details and our team will respond promptly within
            business hours.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-condensed text-[0.62rem] tracking-[0.18em] uppercase text-cmuted block mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={form.from_name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="font-condensed text-[0.62rem] tracking-[0.18em] uppercase text-cmuted block mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                  placeholder="Your Company Ltd"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="font-condensed text-[0.62rem] tracking-[0.18em] uppercase text-cmuted block mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
                required
                placeholder="you@company.com"
                className={inputClass}
              />
            </div>

            <div>
              <label className="font-condensed text-[0.62rem] tracking-[0.18em] uppercase text-cmuted block mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+234 ..."
                className={inputClass}
              />
            </div>

            <div>
              <label className="font-condensed text-[0.62rem] tracking-[0.18em] uppercase text-cmuted block mb-2">
                Product of Interest
              </label>
              <select
                name="product"
                value={form.product}
                onChange={handleChange}
                className={inputClass}
                style={{ appearance: "none" }}
              >
                <option value="">Select a product...</option>
                {products.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-condensed text-[0.62rem] tracking-[0.18em] uppercase text-cmuted block mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about your requirements, volumes, or any questions..."
                className={inputClass}
                style={{ resize: "vertical" }}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="font-condensed text-xs tracking-[0.18em] uppercase px-10 py-4 bg-gold text-cblack font-bold hover:bg-gold-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed self-start mt-1"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
            >
              {status === "sending" ? "Sending..." : "Send Enquiry →"}
            </button>

            {status === "success" && (
              <p className="text-sm text-green-400 tracking-wide">
                ✅ Message sent! We'll get back to you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400 tracking-wide">
                ❌ Something went wrong. Please try again or contact us
                directly.
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
