"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useState } from "react";

// Sample agenda data - replace with actual sessions
const tracks = [
  {
    name: "Mainstage",
    color: "from-[#F97316] to-[#EA580C]",
    bgColor: "bg-[#F97316]",
    headerBg: "bg-[#F97316]",
    sessions: [
      { time: "09:30 - 10:00", title: "Opening Keynote", speaker: "" },
      { time: "10:00 - 10:30", title: "Session 1", speaker: "TBA" },
      { time: "10:30 - 11:00", title: "Session 2", speaker: "TBA" },
      { time: "11:00 - 11:30", title: "Session 3", speaker: "TBA" },
      { time: "11:30 - 12:00", title: "Tea Break", speaker: "" },
      { time: "12:00 - 12:30", title: "Session 4", speaker: "TBA" },
      { time: "12:30 - 13:00", title: "Session 5", speaker: "TBA" },
      { time: "13:00 - 14:00", title: "Lunch Break", speaker: "" },
      { time: "14:00 - 14:30", title: "Session 6", speaker: "TBA" },
      { time: "14:30 - 15:00", title: "Session 7", speaker: "TBA" },
      { time: "15:00 - 15:30", title: "Session 8", speaker: "TBA" },
      { time: "15:30 - 16:00", title: "Closing Keynote", speaker: "TBA" },
    ],
  },
  {
    name: "Breakout",
    color: "from-[#14B8A6] to-[#0D9488]",
    bgColor: "bg-[#14B8A6]",
    headerBg: "bg-[#14B8A6]",
    sessions: [
      { time: "10:00 - 10:30", title: "Session 1", speaker: "TBA" },
      { time: "10:30 - 11:00", title: "Session 2", speaker: "TBA" },
      { time: "11:00 - 11:30", title: "Session 3", speaker: "TBA" },
      { time: "11:30 - 12:00", title: "Tea Break", speaker: "" },
      { time: "12:00 - 12:30", title: "Session 4", speaker: "TBA" },
      { time: "12:30 - 13:00", title: "Session 5", speaker: "TBA" },
      { time: "13:00 - 14:00", title: "Lunch Break", speaker: "" },
      { time: "14:00 - 14:30", title: "Session 6", speaker: "TBA" },
      { time: "14:30 - 15:00", title: "Session 7", speaker: "TBA" },
      { time: "15:00 - 15:30", title: "Session 8", speaker: "TBA" },
    ],
  },
  {
    name: "Galaxy",
    color: "from-[#EAB308] to-[#CA8A04]",
    bgColor: "bg-[#EAB308]",
    headerBg: "bg-[#EAB308]",
    sessions: [
      { time: "10:00 - 10:30", title: "Session 1", speaker: "TBA" },
      { time: "10:30 - 11:00", title: "Session 2", speaker: "TBA" },
      { time: "11:00 - 11:30", title: "Session 3", speaker: "TBA" },
      { time: "11:30 - 12:00", title: "Tea Break", speaker: "" },
      { time: "12:00 - 12:30", title: "Session 4", speaker: "TBA" },
      { time: "12:30 - 13:00", title: "Session 5", speaker: "TBA" },
      { time: "13:00 - 14:00", title: "Lunch Break", speaker: "" },
      { time: "14:00 - 14:30", title: "Session 6", speaker: "TBA" },
      { time: "14:30 - 15:00", title: "Session 7", speaker: "TBA" },
      { time: "15:00 - 15:30", title: "Session 8", speaker: "TBA" },
    ],
  },
];

function TrackTable({
  track,
  isActive,
}: {
  track: (typeof tracks)[0];
  isActive: boolean;
}) {
  return (
    <div
      className={`shrink-0 w-full transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 absolute"}`}
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* Table Header with Room Name */}
        <div
          className={`${track.headerBg} px-4 md:px-6 py-3 md:py-4 flex items-center gap-2 md:gap-3`}
        >
          <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
          <h3 className="text-lg md:text-2xl font-bold text-white">
            {track.name}
          </h3>
        </div>

        {/* Desktop Table - Hidden on Mobile */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`${track.headerBg}/20`}>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 w-40">
                  Time
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200">
                  Session
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 w-48">
                  Speaker
                </th>
              </tr>
            </thead>
            <tbody>
              {track.sessions.map((session, index) => {
                const isBreak = session.title.includes("Break");
                return (
                  <tr
                    key={index}
                    className={`${
                      isBreak
                        ? "bg-gray-100"
                        : index % 2 === 0
                          ? "bg-white"
                          : "bg-gray-50"
                    } hover:bg-gray-100 transition-colors`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 border-b border-gray-100">
                      {session.time}
                    </td>
                    <td
                      className={`px-6 py-4 text-sm border-b border-gray-100 ${
                        isBreak
                          ? "text-gray-600 italic font-medium"
                          : "text-gray-900 font-semibold"
                      }`}
                    >
                      {session.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 border-b border-gray-100">
                      {session.speaker || "—"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Card List - Hidden on Desktop */}
        <div className="md:hidden max-h-[400px] overflow-y-auto">
          {track.sessions.map((session, index) => {
            const isBreak = session.title.includes("Break");
            return (
              <div
                key={index}
                className={`p-3 border-b border-gray-100 ${
                  isBreak
                    ? "bg-gray-100"
                    : index % 2 === 0
                      ? "bg-white"
                      : "bg-gray-50"
                }`}
              >
                <div
                  className={`inline-block text-xs font-semibold ${track.bgColor} text-white px-2 py-1 rounded-full mb-2`}
                >
                  {session.time}
                </div>
                <div
                  className={`text-sm ${isBreak ? "text-gray-600 italic" : "text-gray-900 font-semibold"}`}
                >
                  {session.title}
                </div>
                {session.speaker && (
                  <div className="text-xs text-gray-500 mt-1">
                    {session.speaker}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Speakers() {
  const [activeTrack, setActiveTrack] = useState(0);

  const nextTrack = () => {
    setActiveTrack((prev) => (prev + 1) % tracks.length);
  };

  const prevTrack = () => {
    setActiveTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  return (
    <section
      id="speakers"
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/loksabha.png"
          alt="Lok Sabha Background"
          fill
          className="object-cover object-center"
          quality={100}
        />
      </div>

      {/* Top Fade Gradient - matching Event Journey bottom */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-[#EFBB9E] to-transparent z-5" />

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#1a6b7c] to-transparent z-5" />

      {/* Main Container */}
      <div className="relative z-10 w-full px-2 md:px-16">
        {/* Large Glassmorphism Box */}
        <div className="bg-[#DEDEDE]/30 backdrop-blur-sm border border-black/50 rounded-xl p-4 md:p-12 flex flex-col items-center gap-4 md:gap-8 relative overflow-hidden">
          {/* Title */}
          <h2 className="text-3xl md:text-6xl font-bold text-black text-center tracking-tight">
            Agenda
          </h2>

          {/* Track Selector Tabs */}
          <div className="flex justify-center gap-1 md:gap-4 w-full">
            {tracks.map((track, index) => (
              <button
                key={index}
                onClick={() => setActiveTrack(index)}
                className={`flex items-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-3 rounded-full font-semibold text-xs md:text-base transition-all ${
                  activeTrack === index
                    ? `${track.bgColor} text-white shadow-lg scale-105`
                    : "bg-white/80 text-gray-700 hover:bg-white"
                }`}
              >
                <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                <span className="truncate">{track.name}</span>
              </button>
            ))}
          </div>

          {/* Carousel Container */}
          <div className="relative w-full">
            {/* Left Arrow */}
            <button
              onClick={prevTrack}
              className="absolute -left-1 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-1.5 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-black" />
            </button>

            {/* Table Display */}
            <div className="relative mx-6 md:mx-12 overflow-hidden">
              {tracks.map((track, index) => (
                <TrackTable
                  key={index}
                  track={track}
                  isActive={activeTrack === index}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextTrack}
              className="absolute -right-1 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-1.5 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {tracks.map((track, index) => (
              <button
                key={index}
                onClick={() => setActiveTrack(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                  activeTrack === index
                    ? `${track.bgColor} w-6 md:w-8`
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
