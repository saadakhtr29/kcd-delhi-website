import Image from "next/image";
import { Calendar } from "lucide-react";

const sessions = [
  // Session Block 1 — Stage 1
  {
    time: "11:15 – 11:45",
    title: "Trust But Verify: Securing the Modern Software Supply Chain with Zero Trust",
    speakers: "Gurpreet Sachdeva",
  },
  {
    time: "11:45 – 12:15",
    title: "Gateway API Deep Dive: The Modern Replacement for Ingress NGINX",
    speakers: "Sagar Utekar, Oshi Gupta",
  },
  {
    time: "12:15 – 12:45",
    title: "How to Defeat OTel’s Silent Killer, the Performance Overhead",
    speakers: "Diana Todea",
  },
  {
    time: "12:45 – 1:15",
    title: "Stop the GPU Madness! Making LLM Inference Actually Efficient on K8s",
    speakers: "Hrittik Roy, Aditya Soni",
  },

  // Session Block 1 — Stage 2
  {
    time: "11:15 – 11:45",
    title: "GPU-Native Observability: Reducing LLM Latency with eBPF and Grafana Beyla",
    speakers: "Rigin Rajan",
  },
  {
    time: "11:45 – 12:15",
    title: "OpenChoreo: A Plane-Based Architecture for Internal Developer Platforms",
    speakers: "Manjula Rathnayaka",
  },
  {
    time: "12:15 – 12:45",
    title: "From Cloud to Pi: Zero-Trust Artifact Distribution to Edge & Remote Sites with Harbor Satellite",
    speakers: "Prasanth Baskar, Soham Chakraborty",
  },
  {
    time: "12:45 – 1:15",
    title: "GitOps at Scale using FluxCD",
    speakers: "Aditya Joshi",
  },

  // Session Block 2 — Stage 1
  {
    time: "2:15 – 2:45",
    title: "Patterns of building platform operators",
    speakers: "George Hantzaras",
  },
  {
    time: "3:15 – 3:45",
    title: "Thinking Fast on the Edge: Real-Time, On-Device AI for Billion-User Apps",
    speakers: "Neeraj Poddar",
  },

  // Session Block 2 — Stage 2
  {
    time: "2:45 – 3:00",
    title: "Kubernetes 1.35: The Release That Finally Saves My Budget (and My Sanity)",
    speakers: "Arnab Chatterjee",
  },
  {
    time: "3:00 – 3:15",
    title: "Contributing to Argo CD: A Hands-On Guide for New Contributors in India",
    speakers: "Nitish Kumar",
  },
  {
    time: "3:15 – 3:45",
    title: "KMCP and the Future of Agent-Native Kubernetes Control Planes",
    speakers: "Anisha Singla, Amandeep Singh",
  },

  // Galaxy Room — Workshop
  {
    time: "2:15 – 3:30",
    title: "Real-World Multi Cluster Networking Patterns with Istio (Workshop)",
    speakers: "Sayed Imran",
  },

  // Session Block 3 — Stage 1
  {
    time: "4:45 – 5:15",
    title: "Taming the Multi-Cluster Sprawl: Add-on Automation with Project Sveltos",
    speakers: "Suman Chakraborty, Mridul Gain",
  },

  // Session Block 3 — Stage 2
  {
    time: "4:15 – 4:45",
    title: "Beyond Device Plugins: Mastering GPU Workloads with DRA and NVIDIA GPU Operator",
    speakers: "Shivkumar Ople",
  },
  {
    time: "4:45 – 5:00",
    title: "AI-Assisted Kubernetes Policy Management with Kyverno",
    speakers: "Akshay Kumar",
  },
];

export default function Speakers() {
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
          sizes="100vw"
          className="object-cover object-center"
          quality={100}
        />
      </div>

      {/* Gradients */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#EFBB9E] to-transparent z-[5]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a6b7c] to-transparent z-[5]" />

      {/* Main Container */}
      <div className="relative z-10 w-full px-4 md:px-16">
        <div className="bg-[#DEDEDE]/20 backdrop-blur-xs border border-black/50 rounded-xl p-8 md:p-16 flex flex-col gap-14 max-w-6xl mx-auto">

          {/* Header */}
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-4xl md:text-7xl font-bold text-black text-center">
              Speakers
            </h2>
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-black/70" />
              <p className="text-lg md:text-2xl text-gray-800 text-center">
                KCD New Delhi 2026 — Event Day Overview
              </p>
            </div>
          </div>

          {/* Sessions Table */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-4xl font-bold text-black text-center">
              What to Expect
            </h3>

            <div className="w-full overflow-x-auto">
              <table className="w-full border border-black/40 rounded-lg overflow-hidden">
                <thead className="bg-black/80 text-white">
                  <tr>
                    <th className="px-4 py-4 text-lg font-semibold text-center w-40">
                      Time
                    </th>
                    <th className="px-6 py-4 text-lg font-semibold text-centerleft">
                      Session Title & Speaker(s)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white/70 divide-y divide-black/20 text-gray-900">
                  {sessions.map((session, idx) => (
                    <tr key={idx}>
                      <td className="px-4 py-4 font-medium whitespace-nowrap text-center">
                        {session.time}
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-lg font-medium text-center">
                          {session.title}
                        </p>
                        <p className="text-sm text-gray-700 mt-1 text-center">
                          by {session.speakers}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-center text-gray-700 text-base md:text-lg">
              Track-wise details, abstracts, and workshop registrations will be announced soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
