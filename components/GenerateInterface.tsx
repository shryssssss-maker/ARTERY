"use client";

import React, { useState } from 'react';
import { RefreshCw, Sparkles, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { callImagen, callGemini } from '@/lib/api';

const GenerateInterface = () => {
    const router = useRouter();
    const [prompt, setPrompt] = useState('');
    const [niche, setNiche] = useState('Art Piece');
    const [isGenerating, setIsGenerating] = useState(false);
    const [isEnhancing, setIsEnhancing] = useState(false);
    const [generated, setGenerated] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!prompt) return;
        setIsGenerating(true);
        setError(null);
        try {
            // Append niche to prompt context
            const fullPrompt = `${niche} design: ${prompt}`;
            const imageUrl = await callImagen(fullPrompt);
            setGenerated(imageUrl);
        } catch (err) {
            console.error(err);
            setError("The muse is currently struggling to visualize this. Please try again.");
        } finally {
            setIsGenerating(false);
        }
    };

    const handleEnhance = async () => {
        if (!prompt) return;
        setIsEnhancing(true);
        const enhancedPrompt = await callGemini(
            prompt,
            "You are a Muse, an expert in visual arts and poetry. Your goal is to take a simple description of an image and rewrite it into a rich, evocative, and detailed artistic prompt suitable for creating a masterpiece. Focus on lighting, texture, and mood. Keep it under 60 words. Do not explain, just give the prompt."
        );
        setPrompt(enhancedPrompt);
        setIsEnhancing(false);
    };

    return (
        <div className="flex-1 flex flex-col items-center py-12 px-6 animate-fade-in overflow-y-auto w-full">
            {!generated ? (
                <div className="w-full max-w-2xl bg-white p-2 rounded-lg shadow-sm border border-[#EAE6DE] mt-4 md:mt-12 transition-all focus-within:ring-1 focus-within:ring-[#A38A6D]/50 focus-within:border-[#A38A6D]">
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Describe the artwork you imagine..."
                        className="w-full h-48 p-6 resize-none outline-none font-serif text-xl text-[#2C2C2C] placeholder:text-[#2C2C2C]/30 bg-transparent"
                    />
                    <div className="px-6 pb-4 border-t border-[#F7F5F0] pt-4">
                        {error && <div className="text-red-500 text-xs mb-3 text-center font-sans">{error}</div>}
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="flex gap-2 w-full sm:w-auto justify-center">
                                <button
                                    onClick={handleEnhance}
                                    disabled={!prompt || isEnhancing || isGenerating}
                                    className={`flex items-center gap-2 text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full transition-all ${isEnhancing ? 'bg-[#A38A6D] text-white' : 'text-[#A38A6D] bg-[#A38A6D]/10 hover:bg-[#A38A6D]/20'}`}
                                >
                                    <Sparkles size={14} className={isEnhancing ? "animate-spin" : ""} /> {isEnhancing ? "Consulting Muse..." : "Consult the Muse"}
                                </button>
                            </div>

                            {/* Niche Dropdown */}
                            <div className="relative w-full sm:w-auto flex justify-center">
                                <select
                                    value={niche}
                                    onChange={(e) => setNiche(e.target.value)}
                                    className="appearance-none bg-transparent text-[#787065] text-xs uppercase tracking-wider font-semibold py-2 pl-4 pr-8 rounded-full border border-[#EAE6DE] hover:border-[#A38A6D] cursor-pointer outline-none transition-colors w-full sm:w-auto text-center sm:text-left"
                                >
                                    <option value="Art Piece">Format: Canvas</option>
                                    <option value="Shirt Design">Format: Shirt</option>
                                    <option value="Bedsheet Pattern">Format: Bedsheet</option>
                                    <option value="Carpet Design">Format: Carpet</option>
                                    <option value="Saree Pattern">Format: Saree</option>
                                    <option value="Tote Bag Design">Format: Tote Bag</option>
                                    <option value="Wallpaper Pattern">Format: Wallpaper</option>
                                </select>
                                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#787065] pointer-events-none" />
                            </div>

                            <button
                                onClick={handleGenerate}
                                disabled={!prompt || isGenerating || isEnhancing}
                                className={`bg-[#A38A6D] text-[#F7F5F0] px-8 py-3 rounded-md font-sans tracking-wide transition-colors w-full sm:w-auto ${isGenerating ? 'opacity-70 cursor-wait' : 'hover:bg-[#8F765A]'}`}
                            >
                                {isGenerating ? 'Crafting...' : 'Generate'}
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full max-w-4xl animate-slide-up mt-8">
                    <div className="bg-white p-4 pb-8 rounded-sm shadow-xl border border-[#EAE6DE] mx-auto">
                        <div className="aspect-video w-full bg-[#F2EFE8] overflow-hidden rounded-sm relative">
                            <img src={generated} alt="Generated" className="w-full h-full object-cover" />
                        </div>
                        <div className="mt-8 px-4 flex justify-between items-center">
                            <div>
                                <h3 className="font-serif text-2xl text-[#2C2C2C]">Generation Result</h3>
                                <p className="text-xs text-[#787065] mt-1 italic max-w-md truncate">"{niche} design: {prompt}"</p>
                            </div>
                            <div className="flex gap-3">
                                <button onClick={() => setGenerated(null)} className="flex items-center gap-2 px-4 py-2 text-[#787065] border border-transparent hover:border-[#EAE6DE] rounded-md">
                                    <RefreshCw size={16} /> Regenerate
                                </button>
                                <button onClick={() => router.push('/explore')} className="bg-[#2C2C2C] text-white px-6 py-3 rounded-md hover:bg-[#404040]">Find Artists</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GenerateInterface;
