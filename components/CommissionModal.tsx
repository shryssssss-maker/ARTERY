"use client";

import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

const CommissionModal = () => {
    const { selectedArtistForCommission, closeCommissionModal, addToCart } = useStore();
    const [size, setSize] = useState('Medium');
    const [frame, setFrame] = useState('None');

    const artist = selectedArtistForCommission;

    if (!artist) return null;

    const handleConfirm = () => {
        addToCart({
            id: Date.now(),
            artist: artist,
            size: size,
            frame: frame,
            price: 450 // Base price from original code
        });
        closeCommissionModal();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2C2C2C]/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white w-full max-w-2xl rounded-sm shadow-2xl relative flex flex-col md:flex-row overflow-hidden animate-slide-up">

                {/* Left: Artist Preview */}
                <div className="w-full md:w-1/3 bg-[#F2EFE8] p-6 flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                        <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-serif text-xl text-[#2C2C2C]">{artist.name}</h3>
                    <p className="text-xs text-[#787065] mt-1">{artist.location}</p>
                    <div className="mt-6 text-left w-full space-y-2 text-xs text-[#787065]">
                        <div className="flex justify-between"><span>Base Rate</span> <span>$350</span></div>
                        <div className="flex justify-between"><span>Waitlist</span> <span>3 Weeks</span></div>
                    </div>
                </div>

                {/* Right: Options */}
                <div className="flex-1 p-8 md:p-10 relative">
                    <button onClick={closeCommissionModal} className="absolute top-4 right-4 text-[#787065] hover:text-[#2C2C2C]">
                        <X size={20} strokeWidth={1.5} />
                    </button>

                    <h2 className="font-serif text-2xl text-[#2C2C2C] mb-6">Commission Details</h2>

                    <div className="space-y-6">
                        <div>
                            <label className="text-xs uppercase tracking-wider text-[#787065] font-semibold mb-3 block">Canvas Size</label>
                            <div className="grid grid-cols-3 gap-3">
                                {['Small (12x16")', 'Medium (24x36")', 'Large (36x48")'].map(opt => (
                                    <button
                                        key={opt}
                                        onClick={() => setSize(opt.split(' ')[0])}
                                        className={`p-3 text-sm border rounded-sm transition-all ${size === opt.split(' ')[0] ? 'border-[#A38A6D] bg-[#A38A6D]/5 text-[#A38A6D]' : 'border-[#EAE6DE] text-[#787065] hover:border-[#A38A6D]/50'}`}
                                    >
                                        {opt.split(' (')[0]}
                                        <span className="block text-[10px] opacity-60">{opt.split(' (')[1].replace(')', '')}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="text-xs uppercase tracking-wider text-[#787065] font-semibold mb-3 block">Framing Options</label>
                            <div className="flex gap-4">
                                {['None', 'Walnut', 'Oak', 'Black'].map(opt => (
                                    <button
                                        key={opt}
                                        onClick={() => setFrame(opt)}
                                        className={`flex items-center gap-2 px-4 py-2 border rounded-full text-sm transition-all ${frame === opt ? 'border-[#2C2C2C] bg-[#2C2C2C] text-white' : 'border-[#EAE6DE] text-[#787065] hover:border-[#2C2C2C]'}`}
                                    >
                                        {frame === opt && <Check size={12} />} {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-[#EAE6DE] flex items-center justify-between">
                            <div>
                                <span className="block text-xs text-[#787065]">Estimated Total</span>
                                <span className="font-serif text-2xl text-[#2C2C2C]">$450.00</span>
                            </div>
                            <button
                                onClick={handleConfirm}
                                className="bg-[#A38A6D] text-[#F7F5F0] px-8 py-3 rounded-md font-sans tracking-wide hover:bg-[#8F765A] transition-colors shadow-lg"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommissionModal;
