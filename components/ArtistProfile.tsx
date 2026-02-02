"use client";

import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Artist } from '@/lib/types';
import { MOCK_IMAGES } from '@/lib/data';
import { useStore } from '@/context/StoreContext';

interface ArtistProfileProps {
    artist: Artist;
    isOwner?: boolean;
}

const ArtistProfile = ({ artist, isOwner = false }: ArtistProfileProps) => {
    const router = useRouter();
    const { openCommissionModal } = useStore();
    const [showSales, setShowSales] = React.useState(false);

    // Mock sales data for the last 3 months
    const salesData = [
        { month: 'Oct', amount: 1250, label: '₹1,250' },
        { month: 'Nov', amount: 980, label: '₹980' },
        { month: 'Dec', amount: 2100, label: '₹2,100' },
    ];
    const maxSale = Math.max(...salesData.map(d => d.amount));

    return (
        <div className="bg-[#F7F5F0] min-h-screen animate-slide-up">
            {/* Profile Header */}
            <div className="bg-white border-b border-[#EAE6DE] pt-12 pb-12 px-6 md:px-12">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#F7F5F0] shadow-xl shrink-0">
                        <img src={artist.profileImage || MOCK_IMAGES.portrait} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        {!isOwner && (
                            <button onClick={() => router.push('/explore')} className="text-[#787065] hover:text-[#A38A6D] text-sm mb-4 flex items-center gap-1 mx-auto md:mx-0">
                                <ArrowRight className="rotate-180" size={14} /> Back to Directory
                            </button>
                        )}
                        <h1 className="font-serif text-5xl text-[#2C2C2C] mb-4">{artist.name}</h1>
                        <p className="font-sans text-[#787065] leading-relaxed max-w-2xl mb-8">
                            {artist.name === "Priya Singh"
                                ? "keeps the ancestral art of 'mitti' alive, blending centuries-old regional techniques with a distinct artistic vision. Rooted in the rich soil of UP, crafted for the soul."
                                : artist.name === "Aarav Patel"
                                    ? "Distilling the heritage of the Pink City into lapis and gold. Using ancestral techniques and hand-ground minerals, Aarav captures the dialogue between Mughal precision and Rajput soul on every wasli canvas."
                                    : artist.name === "Rohan Gupta"
                                        ? "Weaving ancestral silk and gold zari with a Mumbai pulse. Distilling Maharashtrian heritage into hand-loomed luxury."
                                        : 'Combining traditional techniques with algorithmic design patterns. My work explores the intersection of ancient earth and digital precision, finding the "Wabi-Sabi" in generated imagery.'
                            }
                        </p>

                        {isOwner ? (
                            <div className="w-full max-w-md">
                                <button
                                    onClick={() => setShowSales(!showSales)}
                                    className="bg-[#A38A6D] text-[#F7F5F0] px-8 py-3 rounded-md font-sans tracking-wide hover:bg-[#8F765A] transition-colors shadow-lg shadow-[#A38A6D]/20 mb-6"
                                >
                                    {showSales ? "Hide Sales Data" : "Sales This Month"}
                                </button>

                                {showSales && (
                                    <div className="bg-[#F7F5F0] p-6 rounded-md border border-[#EAE6DE] animate-fade-in">
                                        <h4 className="font-serif text-[#2C2C2C] text-lg mb-6">Sales Performance (Last 3 Months)</h4>
                                        <div className="flex items-end justify-between h-40 gap-4">
                                            {salesData.map((data, idx) => (
                                                <div key={idx} className="flex flex-col items-center flex-1 gap-2">
                                                    <div className="w-full bg-[#A38A6D]/20 rounded-t-sm relative group overflow-hidden"
                                                        style={{ height: `${(data.amount / maxSale) * 100}%` }}>
                                                        <div className="absolute inset-x-0 bottom-0 bg-[#A38A6D] opacity-80 h-full w-full transition-all duration-1000 ease-out"
                                                            style={{ height: '0%', animation: 'grow-bar 1s forwards' }} />
                                                    </div>
                                                    <span className="text-xs font-sans font-semibold text-[#2C2C2C]">{data.label}</span>
                                                    <span className="text-[10px] text-[#787065] uppercase tracking-wider">{data.month}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <style jsx>{`
                                            @keyframes grow-bar {
                                                to { height: 100%; }
                                            }
                                        `}</style>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <button
                                    onClick={() => openCommissionModal(artist)}
                                    className="bg-[#A38A6D] text-[#F7F5F0] px-8 py-3 rounded-md font-sans tracking-wide hover:bg-[#8F765A] transition-colors shadow-lg shadow-[#A38A6D]/20 flex items-center justify-center gap-2"
                                >
                                    <Sparkles size={16} /> Request Custom Artwork
                                </button>
                                <button className="px-8 py-3 rounded-md font-sans tracking-wide text-[#2C2C2C] border border-[#EAE6DE] hover:border-[#A38A6D] hover:text-[#A38A6D] transition-colors bg-white">
                                    Follow Artist
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Portfolio Grid */}
            <div className="max-w-7xl mx-auto py-16 px-6 md:px-12">
                <h3 className="font-serif text-2xl text-[#2C2C2C] mb-8 border-b border-[#EAE6DE] pb-4">Selected Works</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {(artist.portfolio || [1, 2, 3, 4]).map((item, index) => (
                        <div key={index} className="bg-white p-3 rounded-sm shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                            <div className="aspect-square bg-[#F2EFE8] mb-3 overflow-hidden">
                                <img
                                    src={typeof item === 'string' ? item : artist.image}
                                    alt="Work"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-serif text-[#2C2C2C]">Study No. {index + 42}</div>
                                <Heart size={14} className="text-[#EAE6DE] group-hover:text-[#A38A6D] transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArtistProfile;
