"use client";

import { QRCodeSVG } from "qrcode.react";

const WHATSAPP_NUMBER = "2347026672259";
const WHATSAPP_MESSAGE = "Hello CEE-MAX, I'm interested in your products.";

const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export default function WhatsAppQR({ size = 120 }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="p-3"
        style={{ background: "var(--white)", lineHeight: 0 }}
      >
        <QRCodeSVG
          value={whatsappURL}
          size={size}
          bgColor="#f0ece4"
          fgColor="#0c0c0c"
          level="H"
          imageSettings={{
            src: "/logo.png",
            height: size * 0.22,
            width: size * 0.22,
            excavate: true,
          }}
        />
      </div>

      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-gold hover:text-gold-light transition-colors tracking-wide"
      >
        or tap to chat →
      </a>
    </div>
  );
}
