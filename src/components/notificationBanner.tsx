"use client";

export default function NotificationBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center backdrop-blur-sm bg-[#177d69]/95 border-b border-white/10 py-2.5">
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-2.5 md:gap-4">
        {/* Women's Offer */}
        <div className="flex items-center">
          <span className="px-3 py-1 rounded-full bg-white/20 text-white text-[11px] sm:text-xs font-semibold backdrop-blur-sm whitespace-nowrap">
            🎉 Women&apos;s Discount - 40% OFF | Extended till 30th Jan
          </span>
        </div>
      </div>
    </div>
  );
}
