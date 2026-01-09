import Image from "next/image";
import { Calendar } from "lucide-react";

export default function Speakers() {
    return (
        <section id="speakers" className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
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
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#EFBB9E] to-transparent z-[5]" />

            {/* Bottom Fade Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a6b7c] to-transparent z-[5]" />

            {/* Main Container */}
            <div className="relative z-10 w-full px-4 md:px-16">

                {/* Large Glassmorphism Box */}
                <div className="bg-[#DEDEDE]/20 backdrop-blur-xs border border-black/50 rounded-xl p-8 md:p-16 flex flex-col items-center gap-8 md:gap-12 relative overflow-hidden">

                    {/* Inner Content */}
                    <div className="flex flex-col items-center gap-6 md:gap-8 max-w-4xl mx-auto w-full">

                        {/* Title */}
                        <h2 className="text-4xl md:text-7xl font-bold text-black text-center tracking-tight">
                            Agenda
                        </h2>

                        {/* Coming Soon Badge */}
                        <div className="flex items-center gap-3 bg-[#cc9c68]/90 border border-[#b08050] rounded-2xl px-8 py-4 shadow-sm">
                            <Calendar className="w-8 h-8 text-black/70" />
                            <span className="text-2xl md:text-4xl font-semibold text-black">
                                Coming Soon
                            </span>
                        </div>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-gray-800 text-center font-normal leading-relaxed max-w-3xl mt-4">
                            Stay tuned! We&apos;re preparing an exciting lineup of talks and sessions for KCD Delhi 2026.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}
