"use client";

import Image from "next/image";
import SpeakerCard from "./SpeakerCard";

const speakers = [
  {
    name: "Saiyam Pathak",
    designation: "Opening Speaker",
    company: "KCD Delhi",
    talkTitle: "Opening Remarks",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Sagar",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Gateway API Deep Dive",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Oshi",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Gateway API Deep Dive",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Gurpreet",
    designation: "Senior Director",
    company: "Capgemini",
    talkTitle: "Securing the Modern Software Supply Chain",
    image: "/speakers/gurpreet.jpg",
  },
  {
    name: "Suman",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Project Sveltos Automation",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Mridul",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Project Sveltos Automation",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Aditya",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Efficient LLM Inference on K8s",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Hrittik",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Efficient LLM Inference on K8s",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Rigin Rajan",
    designation: "Lead Consultant",
    company: "HCL",
    talkTitle: "GPU-Native Observability",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Manjula",
    designation: "Platform Architect",
    company: "Community",
    talkTitle: "OpenChoreo Architecture",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Prashanth",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Zero-Trust Artifact Distribution",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Soham",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Zero-Trust Artifact Distribution",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Sayad Imram",
    designation: "Kubestronaut",
    company: "Community",
    talkTitle: "Multi Cluster Networking with Istio",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Yash Verma",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Zero-Trust Reliability",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Rajan Sharma",
    designation: "Speaker",
    company: "Comtech",
    talkTitle: "AI-Augmented Kubernetes Operations",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Arnab",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Kubernetes 1.35 Lightning Talk",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Nitish",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Contributing to Argo CD",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Aman",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Agent-Native Kubernetes",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Anisha",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Agent-Native Kubernetes",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Rishi",
    designation: "Speaker",
    company: "Community",
    talkTitle: "KServe & KAgent",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Onkar",
    designation: "Speaker",
    company: "Community",
    talkTitle: "KServe & KAgent",
    image: "/speakers/placeholder.jpg",
  },
  {
    name: "Shivkumar",
    designation: "GPU Specialist",
    company: "NVIDIA",
    talkTitle: "Mastering GPU Workloads with DRA",
    image: "/speakers/shiv.jpg",
  },
  {
    name: "Akshay",
    designation: "Speaker",
    company: "Community",
    talkTitle: "AI-Assisted Policy Management",
    image: "/speakers/placeholder.jpg",
  },
];

export default function SpeakersSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
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

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#EAB308]/50 via-[#F97316]/40 to-[#14B8A6]/50 mix-blend-multiply" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-black mb-16">
          Featured Speakers
        </h2>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-8 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[320px] snap-start flex-shrink-0"
            >
              <SpeakerCard {...speaker} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
