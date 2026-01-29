"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useState } from "react";

const tracks = [
  {
    name: "Mainstage",
    color: "from-[#F97316] to-[#EA580C]",
    bgColor: "bg-[#F97316]",
    headerBg: "bg-[#F97316]",
    sessions: [
      { time: "07:30 – 09:15", title: "Registrations", speaker: "" },

      { time: "09:30 – 09:50", title: "Opening Remarks", speaker: "" },
      { time: "09:50 – 10:00", title: "Keynote 1", speaker: "TBA" },
      { time: "10:00 – 10:10", title: "Keynote 2", speaker: "TBA" },
      { time: "10:10 – 10:30", title: " AI on Kubernetes: A Community Roundtable on What’s Working, What’s Not", speaker: "Atulpriya Sharma, Ram Iyengar, Saloni Narang" },

      { time: "10:30 – 11:15", title: "Tea Break", speaker: "" },

      { time: "11:15 – 11:45", title: "Trust But Verify: Securing the Modern Software Supply Chain with Zero Trust", speaker: " Gurpreet Sachdeva - Senior Director, capegemini" },
      { time: "11:45 – 12:15", title: "Gateway API Deep Dive: The Modern Replacement for Ingress NGINX", speaker: "Sagar Utekar - Site Reliability Engineer, CrowdStrike & Oshi Gupta - Site Reliability Engineer, Improving Pune" },
      { time: "12:15 – 12:45", title: "TBA", speaker: "TBA" },
      { time: "12:45 – 13:15", title: "Stop the GPU Madness! Making LLM Inference Actually Efficient on K8s", speaker: "Hrittik Roy - Platform Advocate, vCluster & Aditya Soni - SRE, SailPoint" },

      { time: "13:15 – 14:15", title: "Lunch Break", speaker: "" },

      { time: "14:15 – 14:45", title: "TBA", speaker: "TBA" },
      { time: "14:45 – 15:15", title: "TBA", speaker: "TBA" },
      { time: "15:15 – 15:45", title: "TBA", speaker: "TBA" },

      { time: "15:45 – 16:15", title: "Tea Break", speaker: "" },

      { time: "16:15 – 16:45", title: "TBA", speaker: "TBA" },
      { time: "16:45 – 17:15", title: "Taming the Multi-Cluster Sprawl: Add-on Automation with Project Sveltos", speaker: "Suman Chakraborty - Solutions Architect, Platform9  & Mridul Gain - Senior Member of Technical Staff, Platform9" },

      {
        time: "17:15 – 17:30",
        title: "Closing Remarks & Group Photo",
        speaker: "",
      },
    ],
  },

  {
    name: "Breakout",
    color: "from-[#14B8A6] to-[#0D9488]",
    bgColor: "bg-[#14B8A6]",
    headerBg: "bg-[#14B8A6]",
    sessions: [
      { time: "11:15 – 11:45", title: "GPU-Native Observability: Reducing LLM Latency with eBPF and Grafana Beyla", speaker: "Rigin Rajan - Lead Consultant, HCLTech" },
      { time: "11:45 – 12:15", title: "OpenChoreo: A Plane-Based Architecture for Internal Developer Platforms ", speaker: "Manjula Rathnayaka - Director of Engineering, WSO2 " },
      { time: "12:15 – 12:45", title: "From Cloud to Pi: Zero-Trust Artifact Distribution to Edge & Remote Sites with Harbor Satellite", speaker: " Prasanth Baskar - Software Engineer,  Sematext Group & Soham Chakraborty - SRE,  Sematext Group" },
      { time: "12:45 – 13:15", title: "GitOps at Scale using FluxCD", speaker: "Aditya Joshi - Senior Software Engineer, Walmart" },

      { time: "13:15 – 14:15", title: "Lunch Break", speaker: "" },

      { time: "14:15 – 14:45", title: "TBA", speaker: "TBA" },
      { time: "14:45 – 15:00", title: "Kubernetes 1.35: The Release That Finally Saves My Budget (and My Sanity)", speaker: " Arnab Chatterjee - Cloud Native Expert" },
      { time: "15:00 – 15:15", title: "Contributing to Argo CD: A Hands-On Guide for New Contributors in India", speaker: " Nitish Kumar -  Software Engineer, Akuity &  Argo Project Maintainer" },
      { time: "15:15 – 15:45", title: "KMCP and the Future of Agent-Native Kubernetes: Control Planes ", speaker: "Anisha Singla - Founder, Teeny Tech Trek & Aman Mundra -  Founder and CEO, Welzin" },

      { time: "15:45 – 16:15", title: "Tea Break", speaker: "" },

      { time: "16:15 – 16:45", title: "Beyond Device Plugins: Mastering GPU Workloads with DRA and NVIDIA GPU Operator", speaker: " Shivkumar Ople - Senior Software Engineer, NVIDIA" },
      { time: "16:45 – 17:00", title: "AI-Assisted Kubernetes Policy Management with Kyverno", speaker: "Akshay kumar -  Open Source Evangelist, Obmondo" },
    ],
  },

  {
    name: "Galaxy",
    color: "from-[#EAB308] to-[#CA8A04]",
    bgColor: "bg-[#EAB308]",
    headerBg: "bg-[#EAB308]",
    sessions: [
      { time: "11:15 – 13:15", title: "Workshop (TBA)", speaker: "TBA" },

      { time: "13:15 – 14:15", title: "Lunch Break", speaker: "" },

      {
        time: "14:15 – 15:30",
        title: " Real-World Multi Cluster Networking Patterns with Istio",
        speaker: "Sayad Imram, Kubestronaut",
      },
      {
        time: "15:30 – 15:45",
        title: "Why AIOps Failed, And Why Agents Might Finally Work",
        speaker: "TBA",
      },

      { time: "15:45 – 16:15", title: "Tea Break", speaker: "" },

      {
        time: "16:15 – 17:15",
        title: "Women Gathering – Community Meetup",
        speaker: "",
      },
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
      className={`shrink-0 w-full transition-all duration-300 ${
  isActive
    ? "opacity-100 relative pointer-events-auto"
    : "opacity-0 absolute pointer-events-none"
}`}
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-300">
        <div className={`${track.headerBg} px-6 py-4 flex items-center gap-3`}>
          <MapPin className="w-6 h-6 text-white" />
          <h3 className="text-2xl font-bold text-white">{track.name}</h3>
        </div>

        <table className="w-full">
          <thead>
            <tr className={`${track.headerBg}/20`}>
              <th className="px-6 py-4 text-left text-sm font-bold text-black">
                Time
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-black">
                Session
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-black">
                Speaker
              </th>
            </tr>
          </thead>
          <tbody>
            {track.sessions.map((s, i) => (
              <tr key={i} className="border-b border-gray-200">
                <td className="px-6 py-3 font-semibold text-black whitespace-nowrap">
                  {s.time}
                </td>
                <td className="px-6 py-3 font-medium text-black">{s.title}</td>
                <td className="px-6 py-3 text-black">{s.speaker || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Agenda() {
  const [activeTrack, setActiveTrack] = useState(0);

  return (
    <section id="agenda" className="relative w-full min-h-screen py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/loksabha.png"
          alt="Lok Sabha Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-black mb-8">
          Agenda
        </h2>

        <div className="flex justify-center gap-4 mb-6">
          {tracks.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveTrack(i)}
              className={`px-5 py-2 rounded-full font-semibold transition-all ${
                activeTrack === i
                  ? `${t.bgColor} text-white`
                  : "bg-white text-black"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        <div className="relative">
          {/* Desktop arrows */}
          <button
            onClick={() =>
              setActiveTrack((activeTrack + tracks.length - 1) % tracks.length)
            }
            className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>

          <button
            onClick={() => setActiveTrack((activeTrack + 1) % tracks.length)}
            className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>

          {tracks.map((track, i) => (
            <TrackTable key={i} track={track} isActive={i === activeTrack} />
          ))}

          {/* Mobile arrows */}
          <div className="flex md:hidden justify-center gap-6 mt-6">
            <button
              onClick={() =>
                setActiveTrack(
                  (activeTrack + tracks.length - 1) % tracks.length,
                )
              }
              className="bg-white p-3 rounded-full shadow-md active:scale-95 transition"
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>

            <button
              onClick={() => setActiveTrack((activeTrack + 1) % tracks.length)}
              className="bg-white p-3 rounded-full shadow-md active:scale-95 transition"
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
