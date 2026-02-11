"use client";

import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

interface SpeakerCardProps {
  name: string;
  designation: string;
  company: string;
  talkTitle: string;
  image: string;
  bio?: string;
  linkedin?: string;
  twitter?: string;
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
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col">

      {/* Image */}
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">

        <h3 className="text-xl font-bold text-black">
          {name}
        </h3>

        <p className="text-sm text-gray-600 font-medium">
          {designation} • {company}
        </p>

        <p className="text-sm font-semibold text-[#F97316]">
          {talkTitle}
        </p>

        {bio && (
          <p className="text-sm text-gray-700 leading-relaxed">
            {bio}
          </p>
        )}

        {/* Social Icons */}
        <div className="flex gap-4 mt-auto pt-3">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}

          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
