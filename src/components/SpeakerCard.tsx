"use client";

import { Linkedin, Twitter } from "lucide-react";

interface SpeakerCardProps {
  name: string;
  designation: string;
  company: string;
  talkTitle: string;
  image?: string;
  bio?: string;
  linkedin?: string;
  twitter?: string;
}

// Generate initials from name
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function SpeakerCard({
  name,
  designation,
  company,
  talkTitle,
  image,
  bio,
  linkedin,
  twitter,
}: SpeakerCardProps) {
  const initials = getInitials(name);
  const hasImage = image && !image.includes("drdo"); // Check if image exists and is not the missing DRDO one

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden border border-gray-200 flex flex-col h-full hover:-translate-y-2 hover:border-[#F97316]/30">

      {/* Image */}
      <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
        {hasImage ? (
          <>
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
            />
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </>
        ) : (
          /* Initials placeholder for missing images */
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#14B8A6] flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
            <span className="text-6xl font-bold text-white/90 select-none">
              {initials}
            </span>
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] bg-[length:20px_20px]" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2 flex-1">

        <h3 className="text-lg font-bold text-black line-clamp-1 group-hover:text-[#F97316] transition-colors duration-300">
          {name}
        </h3>

        <p className="text-sm text-gray-600 font-medium line-clamp-1">
          {designation} • {company}
        </p>

        <p className="text-sm font-semibold text-[#F97316] line-clamp-2 min-h-[40px]">
          {talkTitle}
        </p>

        {bio && (
          <p className="text-sm text-gray-700 leading-relaxed line-clamp-2">
            {bio}
          </p>
        )}

        {/* Social Icons */}
        {(linkedin || twitter) && (
          <div className="flex gap-4 mt-auto pt-2">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#0A66C2] hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}

            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black hover:scale-110 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
