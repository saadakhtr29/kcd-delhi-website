"use client";

import Link from "next/link";

export default function NotificationBanner() {
  const END_DATE = new Date("2026-01-26T23:59:59");

  if (new Date() > END_DATE) return null;

  return (
    <div className="w-full z-[60]">
      {/* Indian Flag Tricolor Gradient Banner */}
      <div 
        className="w-full py-3 md:py-4"
        style={{
          background: "linear-gradient(90deg, #FF9933 0%, #FF9933 33%, #FFFFFF 33%, #FFFFFF 66%, #138808 66%, #138808 100%)"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
          {/* Republic Day Message */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
              <span className="font-bold text-base md:text-xl text-[#000080] drop-shadow-sm">
                🎉 Republic Day Special!
              </span>
              <span className="font-extrabold text-xl md:text-2xl text-[#FF9933] drop-shadow-md bg-white/80 px-3 py-1 rounded-full">
                26% OFF
              </span>
            </div>
          </div>

          {/* Promo Code */}
          <div className="flex items-center gap-2 bg-[#000080] text-white px-4 py-1.5 rounded-lg shadow-lg">
            <span className="text-sm md:text-base">Use Code:</span>
            <span className="font-bold text-base md:text-lg tracking-wider">REPUBLIC26</span>
          </div>

          {/* Register Button */}
          <Link
            href="https://konfhub.com/kcd-delhi-2026"
            target="_blank"
            className="bg-[#FF9933] hover:bg-[#e68a2e] text-white font-bold px-5 py-2 rounded-full shadow-lg transition-all hover:scale-105 text-sm md:text-base"
          >
            Register Now →
          </Link>

          {/* Indian Flag Emoji */}
          <span className="text-2xl md:text-3xl">🇮🇳</span>
        </div>
      </div>
    </div>
  );
}