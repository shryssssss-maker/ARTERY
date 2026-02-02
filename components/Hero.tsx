"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Hero = () => {
    const router = useRouter();

    return (
        <section className="relative pt-20 pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
            <div className="mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <span className="text-[#A38A6D] font-serif italic text-lg">Curated Intelligence</span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl text-[#2C2C2C] leading-[1.1] mb-8 max-w-4xl opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Where imagination meets <br /> <span className="italic text-[#787065]">craftsmanship.</span>
            </h2>
            <p className="font-sans text-[#787065] text-lg max-w-2xl mb-12 leading-relaxed opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                A curated space to generate unique imagery and connect with master artisans.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <button
                    onClick={() => router.push('/generate')}
                    className="bg-[#A38A6D] text-[#F7F5F0] px-8 py-4 rounded-md font-sans tracking-wide hover:bg-[#8F765A] transition-all duration-300 shadow-lg"
                >
                    Generate Your Artwork
                </button>
                <button
                    onClick={() => router.push('/explore')}
                    className="px-8 py-4 rounded-md font-sans tracking-wide text-[#2C2C2C] border border-[#EAE6DE] hover:border-[#A38A6D] hover:text-[#A38A6D] transition-all duration-300 bg-white"
                >
                    Explore Artists
                </button>
            </div>
        </section>
    );
};

export default Hero;
