"use client";

export default function NotificationBanner() {
  const END_DATE = new Date("2026-01-26T23:59:59");

  if (new Date() > END_DATE) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center backdrop-blur-sm bg-[#177d69]/95 border-b border-white/10 py-2.5">
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-2.5 md:gap-4">
        {/* Republic Day Offer with CODE */}
        <span className="px-3 py-1 rounded-full bg-white/20 text-white text-[11px] sm:text-xs font-semibold backdrop-blur-sm whitespace-nowrap flex items-center gap-2">
          <span>🇮🇳 Republic Day Special - 26% OFF</span>

          {/* Code Highlight */}
          <span className="bg-white/10 px-1.5 py-0.5 rounded border border-white/20 text-yellow-300 font-bold tracking-wide">
            CODE: REPUBLIC26
          </span>
        </span>

        <span className="hidden md:inline text-white/40 text-[10px]">|</span>

        {/* Women's Offer */}
        <div className="flex items-center">
          <span className="px-3 py-1 rounded-full bg-white/20 text-white text-[11px] sm:text-xs font-semibold backdrop-blur-sm whitespace-nowrap">
            🎉 Women&apos;s Discount - 40% OFF
          </span>
        </div>
      </div>
    </div>
  );
}
