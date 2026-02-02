"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function PreLandingPage() {
    const router = useRouter();

    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#F7F5F0] flex flex-col justify-center select-none cursor-default">

            {/* --- 1. Texture & Grain Overlay --- 
                (Soft noise to prevent digital flatness) */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-noise animate-grain" />

            {/* --- 2. Ambient Gradient Drifts ---
                (Slow, organic movement in background) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -bottom-1/2 -right-1/4 w-[80vw] h-[80vw] rounded-full mix-blend-multiply blur-3xl opacity-[0.04] animate-drift"
                    style={{ background: 'radial-gradient(circle, #8F765A 0%, transparent 70%)', animationDuration: '25s' }}
                />
                <div
                    className="absolute -top-1/2 -left-1/4 w-[70vw] h-[70vw] rounded-full mix-blend-multiply blur-3xl opacity-[0.03] animate-drift"
                    style={{ background: 'radial-gradient(circle, #5A4A3A 0%, transparent 70%)', animationDirection: 'alternate-reverse', animationDuration: '30s' }}
                />
            </div>

            {/* --- 3. Vignette & Atmosphere --- */}
            <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(44,44,44,0.08)_100%)]" />

            {/* --- Content Center --- */}
            <div className="relative z-20 w-full max-w-[1400px] mx-auto px-12 md:px-24 h-full flex flex-col justify-center items-center md:items-start">

                {/* Brand Title with "Heartbeat" Pulse */}
                <div className="relative">
                    {/* Subtle radial glow behind text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#A38A6D] blur-[100px] opacity-[0.05] pointer-events-none" />

                    <h1
                        className="font-serif text-[100px] sm:text-[120px] md:text-[160px] leading-none text-[#2C2C2C] tracking-tighter opacity-0 animate-fade-in origin-center"
                        style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.03)', animationDuration: '1.2s' }}
                    >
                        ARTERY
                    </h1>
                </div>

                {/* Tagline - Refined Typography */}
                <p
                    className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#787065] mt-6 tracking-wide opacity-0 animate-fade-in text-opacity-80 font-light"
                    style={{ animationDelay: '300ms', letterSpacing: '0.04em' }}
                >
                    helping you pump that art in your blood
                </p>

                {/* --- Action Buttons --- */}
                <div
                    className="flex flex-col sm:flex-row gap-12 sm:gap-24 mt-24 opacity-0 animate-fade-in"
                    style={{ animationDelay: '0.6s' }}
                >
                    {/* PATRON Button */}
                    <div className="group flex flex-col items-center gap-4">
                        <button
                            onClick={() => router.push('/home')}
                            className="relative px-14 py-5 rounded-full bg-[#EAE6DE] border border-[#EAE6DE] text-[#2C2C2C] font-serif text-lg tracking-[0.2em] transition-all duration-300 ease-in-out hover:bg-[#DCD8D0] hover:border-[#DCD8D0] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(44,44,44,0.1)] overflow-hidden"
                            style={{ fontWeight: 500 }}
                        >
                            <span className="relative z-10 block w-full text-center">PATRON</span>
                        </button>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#787065] opacity-60 font-sans font-medium transition-opacity duration-300 group-hover:opacity-90">
                            Commission &middot; Collect &middot; Discover
                        </span>
                    </div>

                    {/* ARTIST Button */}
                    <div className="group flex flex-col items-center gap-4">
                        <button
                            onClick={() => router.push('/artist')}
                            className="relative px-14 py-5 rounded-full bg-[#EAE6DE] border border-[#EAE6DE] text-[#2C2C2C] font-serif text-lg tracking-[0.2em] transition-all duration-300 ease-in-out hover:bg-[#DCD8D0] hover:border-[#DCD8D0] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(44,44,44,0.1)] overflow-hidden"
                            style={{ fontWeight: 500 }}
                        >
                            <span className="relative z-10 block w-full text-center">ARTIST</span>
                        </button>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#787065] opacity-60 font-sans font-medium transition-opacity duration-300 group-hover:opacity-90">
                            Create &middot; Sell &middot; Collaborate
                        </span>
                    </div>
                </div>
            </div>

            {/* --- 5. Coffee Spill / Organic Stain --- 
                (Right side visual element) */}
            <div
                className="absolute top-1/2 right-[-5%] w-[500px] h-[500px] bg-[#8F765A] opacity-[0.08] mix-blend-multiply pointer-events-none rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] animate-drift"
                style={{
                    transform: 'translateY(-50%) rotate(15deg)',
                    filter: 'blur(40px)',
                    animationDuration: '40s'
                }}
            />

            {/* --- 6. Signature Detail: Drifting Stroke ---
                (Subtle organic ink stroke at extreme opacity) */}
            <div
                className="absolute bottom-12 right-12 w-32 h-1 bg-[#2C2C2C] opacity-[0.05] rounded-full blur-[1px] animate-drift pointer-events-none"
                style={{ animationDuration: '15s' }}
            />
        </div>
    );
}
