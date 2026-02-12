"use client";

import Image from "next/image";
import SpeakerCard from "./SpeakerCard";

const speakers = [
  {
    name: "Saiyam Pathak",
    designation: "Head of Developer Relations",
    company: "vCluster",
    talkTitle: "Opening Remarks",
    image: "/team-assets/saiyam.png",
  },
  {
    name: "Ms. Sanchita Malik",
    designation: "Scientist",
    company: "DRDO",
    talkTitle: "Keynote Talk: AI-Driven Decision Support System in DEfence",
    image: "/speakers/drdo 2.png",
  },
  {
    name: "Saloni Narang",
    designation: "Co-Founder",
    company: "Kubesimplify",
    talkTitle: "Panel Discussion",
    image: "/speakers/Saloni-Narang.png",
  },
  {
    name: "Atulpriya Sharma",
    designation: "Senior Developer Advocate",
    company: "Infracloud",
    talkTitle: "Panel Discussion",
    image: "/speakers/Atulpriya-Sharma.png",
  },
  {
    name: "Ram Iyengar",
    designation: "Chief Evangelist",
    company: "Cloud Foundary Foundation",
    talkTitle: "Panel Discussion",
    image: "/speakers/Ram-Iyengar.png",
  },
  {
    name: "Amanda Brock",
    designation: "CEO",
    company: "OpenUK",
    talkTitle: "Panel Discussion",
    image: "/speakers/Amanda-Brock.png",
  },
  {
    name: "Sagar",
    designation: "SRE",
    company: "CrowdStrike",
    talkTitle: "Gateway API Deep Dive",
    image: "/speakers/Sagar-Utekar.png",
  },
  {
    name: "Oshi",
    designation: "SRE",
    company: "CrowdStrike",
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
    name: "Mridul",
    designation: "SMTS",
    company: "Platform9",
    talkTitle: "Project Sveltos Automation",
    image: "/speakers/Suman-Chakraborty.png",
  },
  {
    name: "Suman",
    designation: "Solutions Architect",
    company: "Platform9",
    talkTitle: "Project Sveltos Automation",
    image: "/speakers/Mridul-Gain.png",
  },
  {
    name: "Aditya",
    designation: "DevOps & SRE",
    company: "SailPoint",
    talkTitle: "Efficient LLM Inference on K8s",
    image: "/speakers/aditya soni (1).png",
  },
  {
    name: "Hrittik",
    designation: "Platform Advocate",
    company: "vCluster",
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
    designation: "Director of Engineering",
    company: "WSO2",
    talkTitle: "OpenChoreo Architecture",
    image: "/speakers/Manjula-Rathnayaka.png",
  },
  {
    name: "Prashanth",
    designation: "Software Engineer",
    company: "8gears",
    talkTitle: "Zero-Trust Artifact Distribution",
    image: "/speakers/Prasanth-Baskar.png",
  },
  {
    name: "Soham Chakraborty",
    designation: "SRE",
    company: "Sematext",
    talkTitle: "Zero-Trust Artifact Distribution",
    image: "/speakers/Soham-Chakraborty.png",
  },
  {
    name: "Sayad Imram",
    designation: "DevOps Engineer",
    company: "Convin",
    talkTitle: "Multi Cluster Networking with Istio",
    image: "/speakers/Sayed-Imran.png",
  },
  {
    name: "Yash Verma",
    designation: "Community Advocate",
    company: "OpenTelemetry",
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
    designation: "Global Head - Container & AI Platform",
    company: "Nomura",
    talkTitle: "Kubernetes 1.35 Lightning Talk",
    image: "/speakers/Arnab-Chatterjee.png",
  },
  {
    name: "Nitish",
    designation: "Software Engineer",
    company: "Akuity",
    talkTitle: "Contributing to Argo CD",
    image: "/speakers/Nitish-Kumar.png",
  },
  {
    name: "Amandeep",
    designation: "Founder & CEO",
    company: "Welzin.ai",
    talkTitle: "Agent-Native Kubernetes",
    image: "/speakers/Amandeep-Singh.png",
  },
  {
    name: "Anisha",
    designation: "Founder",
    company: "Teeny Tech Trek",
    talkTitle: "Agent-Native Kubernetes",
    image: "/speakers/Anisha-Singla.png",
  },
  {
    name: "Rishi",
    designation: "Maintainer",
    company: "CNCF Kubestellar",
    talkTitle: "KServe & KAgent",
    image: "/speakers/Rishi-Mondal.png",
  },
  {
    name: "Onkar",
    designation: "SRE Engineer & LFX Mentee",
    company: "CNCF Kubestellar",
    talkTitle: "KServe & KAgent",
    image: "/speakers/Onkar-Shelke.png",
  },
  {
    name: "Shivkumar",
    designation: "Senior Software Engineer",
    company: "NVIDIA",
    talkTitle: "Mastering GPU Workloads with DRA",
    image: "/speakers/Shivkumar-Ople.png",
  },
  {
    name: "Akshay",
    designation: "Open Source Evangelist",
    company: "Obmondo",
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
