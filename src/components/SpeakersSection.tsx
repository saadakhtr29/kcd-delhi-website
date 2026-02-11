"use client";

import Image from "next/image";
import SpeakerCard from "./SpeakerCard";

const speakers = [
  {
    name: "Saiyam Pathak",
    designation: "Opening Speaker",
    company: "KCD Delhi",
    talkTitle: "Opening Remarks",
    image: "/team-assets/saiyam.png",
  },
  {
    name: "Sagar",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Gateway API Deep Dive",
    image: "/speakers/Sagar-Utekar.png",
  },
  {
    name: "Oshi",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Gateway API Deep Dive",
    image: "/speakers/Oshi-Gupta.png",
  },
  {
    name: "Gurpreet",
    designation: "Senior Director",
    company: "Capgemini",
    talkTitle: "Securing the Modern Software Supply Chain",
    image: "/speakers/Gurpreet-Sachdeva.png",
  },
  {
    name: "Suman",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Project Sveltos Automation",
    image: "/speakers/Suman-Chakraborty.png",
  },
  {
    name: "Mridul",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Project Sveltos Automation",
    image: "/speakers/Mridul-Gain.png",
  },
  {
    name: "Aditya",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Efficient LLM Inference on K8s",
    image: "/speakers/aditya soni (1).png",
  },
  {
    name: "Hrittik",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Efficient LLM Inference on K8s",
    image: "/speakers/Hrittik-Roy.png",
  },
  {
    name: "Rigin Rajan",
    designation: "Lead Consultant",
    company: "HCL",
    talkTitle: "GPU-Native Observability",
    image: "/speakers/Rigin-Rajan.png",
  },
  {
    name: "Manjula",
    designation: "Platform Architect",
    company: "Community",
    talkTitle: "OpenChoreo Architecture",
    image: "/speakers/Manjula-Rathnayaka.png",
  },
  {
    name: "Prashanth",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Zero-Trust Artifact Distribution",
    image: "/speakers/Prasanth-Baskar.png",
  },
  {
    name: "Soham",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Zero-Trust Artifact Distribution",
    image: "/speakers/Soham-Chakraborty.png",
  },
  {
    name: "Sayad Imram",
    designation: "Kubestronaut",
    company: "Community",
    talkTitle: "Multi Cluster Networking with Istio",
    image: "/speakers/Sayed-Imran.png",
  },
  {
    name: "Yash Verma",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Zero-Trust Reliability",
    image: "/speakers/Yash-Verma.png",
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
    image: "/speakers/Arnab-Chatterjee.png",
  },
  {
    name: "Nitish",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Contributing to Argo CD",
    image: "/speakers/Nitish-Kumar.png",
  },
  {
    name: "Aman",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Agent-Native Kubernetes",
    image: "/speakers/Amandeep-Singh.png",
  },
  {
    name: "Anisha",
    designation: "Speaker",
    company: "Community",
    talkTitle: "Agent-Native Kubernetes",
    image: "/speakers/Anisha-Singla.png",
  },
  {
    name: "Rishi",
    designation: "Speaker",
    company: "Community",
    talkTitle: "KServe & KAgent",
    image: "/speakers/Rishi-Mondal.png",
  },
  {
    name: "Onkar",
    designation: "Speaker",
    company: "Community",
    talkTitle: "KServe & KAgent",
    image: "/speakers/Onkar-Shelke.png",
  },
  {
    name: "Shivkumar",
    designation: "GPU Specialist",
    company: "NVIDIA",
    talkTitle: "Mastering GPU Workloads with DRA",
    image: "/speakers/Shivkumar-Ople.png",
  },
  {
    name: "Akshay",
    designation: "Speaker",
    company: "Community",
    talkTitle: "AI-Assisted Policy Management",
    image: "/speakers/Akshay-Kumar.png",
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
          Featured Speakers
        </h2>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-8 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[320px] snap-start shrink-0"
            >
              <SpeakerCard {...speaker} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
