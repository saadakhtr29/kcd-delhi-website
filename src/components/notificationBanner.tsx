"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";

export default function NotificationBanner() {
  const END_DATE = new Date("2026-01-26T23:59:59");

  if (new Date() > END_DATE) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[50] lg:h-9  px-4 backdrop-blur-sm bg-[#004e66]/40">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        <div className="flex items-center gap-2 text-white">
          <Calendar className="w-4 h-4 opacity-80" />
          <span className="font-semibold text-sm md:text-base drop-shadow-md">
            🎉 Women&apos;s Discount is LIVE — valid till <strong>26 Jan</strong>
          </span>
        </div>

        <Link
          href="https://konfhub.com/kcd-delhi-2026"
          target="_blank"
          className="text-white underline font-semibold hover:opacity-80 transition-opacity drop-shadow-md text-sm md:text-base"
        >
          Register Now
        </Link>
      </div>
    </div>
  );
}