import Link from "next/link";
import ImageBtn from "../components/ImageBtn";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative w-full py-24 bg-linear-to-b from-[#172B4C] to-[#9FBAC3] min-h-[60vh] flex flex-col items-center justify-center overflow-hidden gap-16"
    >
      <div className="absolute inset-0 bg-white/5 pointer-events-none" />

      {/* Sponsors Box */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-5xl">
        <div className="bg-white/25 backdrop-blur-md border border-white/30 rounded-xl p-6 md:p-20 text-center shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] mb-12 tracking-tight">
            Sponsors
          </h2>
          {/* ...existing code... */}
        </div>
      </div>

      {/* Community Partners */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-5xl">
        <div className="bg-white/25 backdrop-blur-md border border-white/30 rounded-xl p-6 md:p-20 text-center shadow-2xl">
          <h3 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] mb-12 tracking-tight">
            Community Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            <div className="flex items-center justify-center bg-white/95 rounded-xl p-8 shadow-lg w-full max-w-md h-32">
              <ImageBtn
                href="https://kubesimplify.com/"
                src="/kubesimplify-logo.svg"
                alt="KubeSimplify Logo"
                width={220}
                height={50}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center bg-white/95 rounded-xl p-8 shadow-lg w-full max-w-md h-32">
              <ImageBtn
                href="https://www.wemakedevs.org/"
                src="/we-make-devs-logo.jpeg"
                alt="WeMakeDevs Logo"
                width={260}
                height={60}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            {/* Grafana and Friends Delhi as Community Partner (no border) */}
            <div className="flex items-center justify-center bg-transparent shadow-none w-full max-w-md h-32">
              <ImageBtn
                href="#"
                src="/grafana-and-friends-delhi.avif"
                alt="Grafana and Friends Delhi Community Partner"
                width={220}
                height={80}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            {/* GrowIn Community Partner (no rectangular border) */}
            <div className="flex items-center justify-center bg-transparent shadow-none w-full max-w-md h-32">
              <ImageBtn
                href="#"
                src="/growinn-community.png"
                alt="GrowIn Community Partner"
                width={120}
                height={120}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Media Partners */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-5xl mt-16">
        <div className="bg-white/25 backdrop-blur-md border border-white/30 rounded-xl p-6 md:p-20 text-center shadow-2xl">
          <h3 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] mb-12 tracking-tight">
            Media Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center justify-center bg-white/95 rounded-xl p-8 shadow-lg w-full max-w-md h-32">
              <ImageBtn
                href="https://kube.events/"
                src="/logo-light-bg@3x.png"
                alt="Kube Events Logo"
                width={220}
                height={60}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
