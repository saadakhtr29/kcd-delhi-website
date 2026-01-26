"use client";

import React, { useState } from "react";

const republicDaySlides = [
  {
    title: "Republic Day Special!",
    discount: "26% OFF",
    code: "REPUBLIC26",
    description: "Celebrate Republic Day with a special discount!",
    link: "https://konfhub.com/kcd-delhi-2026",
    cta: "Register Now →"
  }
];

const womenDaySlides = [
  {
    message: "Women's Discount is LIVE till Jan 26"
  }
];


function RepublicDayCarousel({ slides }: { slides: any[] }) {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full bg-white/30 backdrop-blur-md border border-white/40 rounded-none shadow-none overflow-hidden my-0 py-2 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-2 px-2">
        <span className="font-bold text-base md:text-xl text-[#000080] drop-shadow-sm">
          {slides[current].title}
        </span>
        <span className="font-extrabold text-xl md:text-2xl text-orange-500 drop-shadow-md bg-white/80 px-3 py-1 rounded-full">
          {slides[current].discount}
        </span>
        <span className="text-gray-700 hidden md:inline">{slides[current].description}</span>
        <span className="flex items-center gap-2 bg-blue-900 text-white px-4 py-1.5 rounded-lg">
          <span className="text-sm md:text-base">Use Code:</span>
          <span className="font-bold text-base md:text-lg tracking-wider">{slides[current].code}</span>
        </span>
        <a
          href={slides[current].link}
          target="_blank"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded-full shadow-lg transition-all hover:scale-105 text-sm md:text-base"
        >
          {slides[current].cta}
        </a>
      </div>
      {slides.length > 1 && (
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button onClick={prev} className="p-2 text-gray-600 hover:text-black">&#8592;</button>
        </div>
      )}
      {slides.length > 1 && (
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button onClick={next} className="p-2 text-gray-600 hover:text-black">&#8594;</button>
        </div>
      )}
    </div>
  );
}

function WomenDayStrip({ slides }: { slides: any[] }) {
  return (
    <div className="w-full bg-white/30 backdrop-blur-md border border-white/40 rounded-none shadow-none overflow-hidden my-0 py-2 flex items-center justify-center">
      <span className="font-bold text-base md:text-xl text-pink-700 drop-shadow-sm">
        {slides[0].message}
      </span>
    </div>
  );
}

export default function DiscountCarousels() {
  return (
    <div className="w-full flex flex-col gap-0 z-[60]">
      <RepublicDayCarousel slides={republicDaySlides} />
      <WomenDayStrip slides={womenDaySlides} />
    </div>
  );
}
