"use client";

import React, { useState } from 'react';
import { Grid, Map as MapIcon, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ARTISTS, MOCK_IMAGES } from '@/lib/data';

export default function ExplorePage() {
    const router = useRouter();
    const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
    const [mapStyle, setMapStyle] = useState('parchment');

    const handleSelectArtist = (id: number) => {
        router.push(`/artist/${id}`);
    };

    return (
        <div className="bg-[#F7F5F0] min-h-screen py-12 px-6 md:px-12 animate-fade-in flex flex-col">
            <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-[#EAE6DE] pb-8">
                    <div>
                        <h2 className="font-serif text-4xl text-[#2C2C2C] mb-2">Artisan Directory</h2>
                        <p className="text-[#787065] font-sans">Connect with masters of their craft.</p>
                    </div>
                    <div className="flex gap-4 mt-6 md:mt-0 items-center">
                        {/* View Toggle */}
                        <div className="bg-white border border-[#EAE6DE] rounded-md p-1 flex">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-sm transition-all ${viewMode === 'grid' ? 'bg-[#F7F5F0] text-[#2C2C2C] shadow-sm' : 'text-[#787065] hover:text-[#2C2C2C]'}`}
                            >
                                <Grid size={18} />
                            </button>
                            <button
                                onClick={() => setViewMode('map')}
                                className={`p-2 rounded-sm transition-all ${viewMode === 'map' ? 'bg-[#F7F5F0] text-[#2C2C2C] shadow-sm' : 'text-[#787065] hover:text-[#2C2C2C]'}`}
                            >
                                <MapIcon size={18} />
                            </button>
                        </div>

                        <div className="h-8 w-px bg-[#EAE6DE] mx-2"></div>

                        {viewMode === 'map' ? (
                            <select
                                value={mapStyle}
                                onChange={(e) => setMapStyle(e.target.value)}
                                className="bg-white border border-[#EAE6DE] px-4 py-2 rounded-md text-[#2C2C2C] text-sm outline-none focus:border-[#A38A6D]"
                            >
                                <option value="parchment">Aesthetic: Parchment</option>
                                <option value="midnight">Aesthetic: Midnight</option>
                                <option value="clean">Aesthetic: Clean</option>
                            </select>
                        ) : (
                            <select className="bg-white border border-[#EAE6DE] px-4 py-2 rounded-md text-[#2C2C2C] text-sm outline-none focus:border-[#A38A6D]">
                                <option>All Mediums</option>
                                <option>Oil Paint</option>
                                <option>Digital</option>
                                <option>Sculpture</option>
                            </select>
                        )}
                    </div>
                </div>

                {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 animate-fade-in">
                        {ARTISTS.map((artist) => (
                            <div
                                key={artist.id}
                                onClick={() => handleSelectArtist(artist.id)}
                                className="group cursor-pointer flex flex-col"
                            >
                                <div className="relative overflow-hidden rounded-sm mb-5 shadow-sm">
                                    <div className="aspect-[4/5] bg-[#EAE6DE]">
                                        <img src={artist.image} alt={artist.name} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium tracking-wide text-[#2C2C2C] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                                        View Portfolio
                                    </div>
                                </div>

                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-serif text-xl text-[#2C2C2C] group-hover:text-[#A38A6D] transition-colors">{artist.name}</h3>
                                        <p className="text-[#787065] text-sm mt-1">{artist.location}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-3">
                                    {artist.tags.map(tag => (
                                        <span key={tag} className="text-[11px] uppercase tracking-wider text-[#787065] bg-[#EAE6DE]/50 px-2 py-1 rounded-sm border border-[#EAE6DE]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={`flex-1 rounded-md border border-[#EAE6DE] relative overflow-hidden shadow-inner min-h-[600px] animate-fade-in group transition-all duration-700 ${mapStyle === 'midnight' ? 'bg-[#1a1a1a]' :
                        mapStyle === 'clean' ? 'bg-[#F9F9F9]' :
                            'bg-[#E6E2D6]'
                        }`}>
                        {/* Map Image Base */}
                        <div className="absolute inset-0 w-full h-full overflow-hidden">
                            <img
                                src={MOCK_IMAGES.mapBase}
                                className={`w-full h-full object-cover pointer-events-none transition-all duration-700 transform scale-[2] origin-center
                    ${mapStyle === 'parchment' ? 'opacity-30 sepia mix-blend-multiply' : ''}
                    ${mapStyle === 'midnight' ? 'opacity-20 invert grayscale brightness-75' : ''}
                    ${mapStyle === 'clean' ? 'opacity-10 grayscale contrast-125' : ''}
                  `}
                                alt="Map"
                            />
                        </div>

                        {/* Aesthetic Overlays */}
                        {mapStyle === 'parchment' && <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>}
                        {mapStyle === 'midnight' && <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>}
                        {mapStyle === 'clean' && <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#A38A6D 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.1 }}></div>}

                        {/* Map Label */}
                        <div className={`absolute top-8 left-8 p-4 rounded-sm shadow-md max-w-xs z-10 backdrop-blur-sm transition-colors ${mapStyle === 'midnight' ? 'bg-[#2C2C2C]/90 text-white' : 'bg-white/90 text-[#2C2C2C]'
                            }`}>
                            <h4 className={`font-serif text-lg ${mapStyle === 'midnight' ? 'text-white' : 'text-[#2C2C2C]'}`}>Artisans of India</h4>
                            <p className={`text-xs mt-1 ${mapStyle === 'midnight' ? 'text-gray-400' : 'text-[#787065]'}`}>Discover local craftsmanship.</p>
                        </div>

                        {/* Artist Pins - India Locations */}
                        {ARTISTS.map((artist) => (
                            <div
                                key={artist.id}
                                style={{ top: artist.coords.top, left: artist.coords.left }}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group/pin"
                                onClick={() => handleSelectArtist(artist.id)}
                            >
                                <div className="relative">
                                    <div className={`w-4 h-4 rounded-full shadow-lg animate-pulse ${mapStyle === 'midnight' ? 'bg-[#A38A6D] ring-4 ring-[#2C2C2C]/50' : 'bg-[#A38A6D] ring-4 ring-white/50'
                                        }`}></div>
                                    <div className="w-10 h-10 bg-[#A38A6D]/20 rounded-full absolute -top-3 -left-3 animate-ping"></div>

                                    {/* Tooltip Card */}
                                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-48 bg-white p-3 rounded-sm shadow-xl opacity-0 group-hover/pin:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover/pin:translate-y-0 z-30">
                                        <div className="aspect-video bg-[#F2EFE8] mb-2 overflow-hidden rounded-sm">
                                            <img src={artist.image} className="w-full h-full object-cover" alt="" />
                                        </div>
                                        <div className="text-center">
                                            <div className="font-serif text-[#2C2C2C]">{artist.name}</div>
                                            <div className="text-[10px] text-[#787065]">{artist.location}</div>
                                        </div>
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
