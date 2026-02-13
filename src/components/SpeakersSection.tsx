"use client";

import Image from "next/image";
import SpeakerCard from "./SpeakerCard";

// Keynote Speakers
const keynoteSpeakers = [
  {
    name: "Amanda Brock",
    designation: "CEO",
    company: "OpenUK",
    talkTitle: "Panel Discussion",
    image: "/speakers/amanda.jpeg",
  },
  {
    name: "Atulpriya Sharma",
    designation: "Senior Developer Advocate",
    company: "Infracloud",
    talkTitle: "Panel Discussion",
    image: "/speakers/atulpriya-sharma.jpg",
  },
  {
    name: "Ram Iyengar",
    designation: "Chief Evangelist",
    company: "Cloud Foundary Foundation",
    talkTitle: "Panel Discussion",
    image: "/ram-iyengar.jpg",
  },
  {
    name: "Saiyam Pathak",
    designation: "Head of Developer Relations",
    company: "vCluster",
    talkTitle: "Opening Remarks",
    image: "/team-assets/saiyam.png",
  },
  {
    name: "Saloni Narang",
    designation: "Co-Founder",
    company: "Kubesimplify",
    talkTitle: "Panel Discussion",
    image: "/speakers/saloni-narang.jpg",
  },
  {
    name: "Sanchita Malik",
    designation: "Scientist",
    company: "DRDO",
    talkTitle: "Keynote Talk: AI-Driven Decision Support System in Defence",
    image: "/speakers/drdo 2.png",
  },
];

// Regular Speakers
const speakers = [
  {
    name: "Aditya Joshi",
    designation: "Senior Software Engineer",
    company: "Walmart",
    talkTitle: "GitOps at Scale using FluxCD",
    image: "/speakers/aditya-joshi.jpg",
  },
  {
    name: "Aditya Soni",
    designation: "SRE",
    company: "SailPoint",
    talkTitle:
      "Stop the GPU Madness! Making LLM Inference Actually Efficient on K8s",
    image: "/speakers/aditya-soni.jpg",
  },
  {
    name: "Akshay Kumar",
    designation: "Open Source Evangelist",
    company: "Obmondo",
    talkTitle: "AI-Assisted Kubernetes Policy Management with Kyverno",
    image: "/speakers/akshay-kumar.jpg",
  },
  {
    name: "Aman Mundra",
    designation: "Founder & CEO",
    company: "Welzin",
    talkTitle: "KMCP and the Future of Agent-Native Kubernetes",
    image: "/speakers/amandeep-singh.jpg",
  },
  {
    name: "Anisha Singla",
    designation: "Founder",
    company: "Teeny Tech Trek",
    talkTitle: "KMCP and the Future of Agent-Native Kubernetes",
    image: "/speakers/Anisha-Singla.png",
  },
  {
    name: "Arnab Chatterjee",
    designation: "Cloud Native Expert",
    company: "",
    talkTitle: "Kubernetes 1.35: The Release That Finally Saves My Budget",
    image: "/speakers/arnab-chatterjee.jpg",
  },
  {
    name: "Gurpreet Sachdeva",
    designation: "Senior Director",
    company: "Capgemini",
    talkTitle: "Trust But Verify: Securing the Modern Software Supply Chain",
    image: "/speakers/gurpreet-sachdeva.jpg",
  },
  {
    name: "Hrittik Roy",
    designation: "Platform Advocate",
    company: "vCluster",
    talkTitle:
      "Stop the GPU Madness! Making LLM Inference Actually Efficient on K8s",
    image: "/speakers/hrittik-roy.jpg",
  },
  {
    name: "Manjula Rathnayaka",
    designation: "Director of Engineering",
    company: "WSO2",
    talkTitle:
      "OpenChoreo: A Plane-Based Architecture for Internal Developer Platforms",
    image: "/speakers/Manjula-Rathnayaka.png",
  },
  {
    name: "Mridul Gain",
    designation: "Senior Member of Technical Staff",
    company: "Platform9",
    talkTitle:
      "Taming the Multi-Cluster Sprawl: Add-on Automation with Project Sveltos",
    image: "/speakers/mridul-gain.jpg",
  },
  {
    name: "Mridul Swarup",
    designation: "Manager, Developer Relations",
    company: "Vultr",
    talkTitle: "Running Isolated AI Workloads on Modern GPU Accelerators",
    image: "/speakers/mridul.jpg",
  },
  {
    name: "Nitish Kumar",
    designation: "Software Engineer & Argo Project Maintainer",
    company: "Akuity",
    talkTitle: "Contributing to Argo CD: A Hands-On Guide for New Contributors",
    image: "/speakers/nitish-kumar.jpg",
  },
  {
    name: "Onkar Shelke",
    designation: "SRE Engineer & LFX Mentee",
    company: "CNCF Kubestellar",
    talkTitle: "KServe & KAgent: Simplifying AI Model Deployment at Scale",
    image: "/speakers/onkar-shelke.jpg",
  },
  {
    name: "Oshi Gupta",
    designation: "Site Reliability Engineer",
    company: "Improving Pune",
    talkTitle:
      "Gateway API Deep Dive: The Modern Replacement for Ingress NGINX",
    image: "/speakers/oshi-gupta.jpg",
  },
  {
    name: "Prasanth Baskar",
    designation: "Software Engineer",
    company: "8gears AG",
    talkTitle: "Zero-Trust Artifact Distribution to Edge with Harbor Satellite",
    image: "/speakers/Prasanth-Baskar.png",
  },
  {
    name: "Rajan Sharma",
    designation: "Principal Architect",
    company: "Comtech",
    talkTitle: "AI-Augmented Kubernetes Operations with LLMs & Semantic Search",
    image: "/speakers/rajan-sharma.jpg",
  },
  {
    name: "Rakesh Rajendran",
    designation: "Co-Founder & CEO",
    company: "Nudgebee",
    talkTitle:
      "Why First-Generation AIOps Stalled, And What Agentic AIOps Changes",
    image: "/speakers/rakesh-rajendran.jpeg",
  },
  {
    name: "Rigin Rajan",
    designation: "Lead Consultant",
    company: "HCLTech",
    talkTitle:
      "GPU-Native Observability: Reducing LLM Latency with eBPF and Grafana Beyla",
    image: "/speakers/rigin-rajan.jpg",
  },
  {
    name: "Rishi Mondal",
    designation: "Maintainer",
    company: "CNCF Kubestellar",
    talkTitle: "KServe & KAgent: Simplifying AI Model Deployment at Scale",
    image: "/speakers/Rishi-Mondal.png",
  },
  {
    name: "Sagar Utekar",
    designation: "Site Reliability Engineer",
    company: "CrowdStrike",
    talkTitle:
      "Gateway API Deep Dive: The Modern Replacement for Ingress NGINX",
    image: "/speakers/sagar-utekar.jpg",
  },
  {
    name: "Sanket Modi",
    designation: "Sr Engineering Manager, Community",
    company: "CleanStart Security",
    talkTitle:
      "Shift Left Without Slowing Down: Pre-Hardened Containers for Developer Velocity",
    image: "/speakers/sanket-modi.jpeg",
  },
  {
    name: "Sayed Imran",
    designation: "Kubestronaut",
    company: "",
    talkTitle: "Real-World Multi Cluster Networking Patterns with Istio",
    image: "/speakers/sayed-imran.jpg",
  },
  {
    name: "Shivkumar Ople",
    designation: "Senior Software Engineer",
    company: "NVIDIA",
    talkTitle: "Mastering GPU Workloads with DRA and NVIDIA GPU Operator",
    image: "/speakers/shivkumar-ople.jpg",
  },
  {
    name: "Soham Chakraborty",
    designation: "SRE",
    company: "Sematext Group",
    talkTitle: "Zero-Trust Artifact Distribution to Edge with Harbor Satellite",
    image: "/speakers/soham-chakraborty.jpg",
  },
  {
    name: "Someshwaran M",
    designation: "Speaker",
    company: "Elastic",
    talkTitle:
      "Building Elastic Cloud Serverless on K8s: Lessons from Operating at Scale",
    image: "/speakers/someshwaram.jpeg",
  },
  {
    name: "Suman Chakraborty",
    designation: "Solutions Architect",
    company: "Platform9",
    talkTitle:
      "Taming the Multi-Cluster Sprawl: Add-on Automation with Project Sveltos",
    image: "/speakers/suman-chakraborty.jpg",
  },
  {
    name: "Yash Verma",
    designation: "Community Advocate",
    company: "OpenTelemetry",
    talkTitle: "Surviving Zero-Trust-Reliability with Observability and eBPF",
    image: "/speakers/yash-verma.jpg",
  },
];

export default function SpeakersSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden" id="speakers">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/jantar-mantar.svg"
          alt="Jantar Mantar Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#EAB308]/50 via-[#F97316]/40 to-[#14B8A6]/50 mix-blend-multiply" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-black mb-16">
          Speakers
        </h2>

        {/* Keynote Speakers Subsection */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-4xl font-bold text-center text-black mb-10">
            <span className="inline-block bg-linear-to-r from-[#1e3a8a] to-[#3b82f6] bg-clip-text text-transparent">
              Keynote Speakers
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {keynoteSpeakers.map((speaker, index) => (
              <div key={index} className="w-[280px]">
                <SpeakerCard {...speaker} />
              </div>
            ))}
          </div>
        </div>

        {/* Speakers Subsection */}
        <div>
          <h3 className="text-2xl md:text-4xl font-bold text-center text-black mb-10">
            <span className="inline-block bg-linear-to-r from-[#1e3a8a] to-[#3b82f6] bg-clip-text text-transparent">
              Speakers
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => (
              <div key={index} className="w-full">
                <SpeakerCard {...speaker} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
