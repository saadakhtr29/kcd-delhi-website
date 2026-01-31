"use client";

export default function NotificationBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center backdrop-blur-sm bg-[#177d69]/95 border-b border-white/10 py-2.5">
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-2.5 md:gap-4">
        {/* Safer internet day Offer */}
        <div className="flex items-center">
<span className="px-3 py-1.5 rounded-2xl bg-white/20 text-white text-[11px] sm:text-xs font-semibold backdrop-blur-sm text-center leading-tight whitespace-normal md:whitespace-nowrap">
  🔐 Safer Internet Day Special - 20% OFF &nbsp; | &nbsp; Valid from 3rd-6th Feb
          </span>
        </div>
      </div>
    </div>
  );
}
