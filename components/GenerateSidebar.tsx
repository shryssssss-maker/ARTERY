"use client";

import React from 'react';
import { User, Sparkles, MessageSquare, ShoppingBag, Info, LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/context/StoreContext';

const GenerateSidebar = () => {
    const router = useRouter();
    const { setIsLoginOpen, isLoggedIn } = useStore();

    const menuItems = [
        {
            label: isLoggedIn ? "Collector" : "Login",
            icon: isLoggedIn ? User : LogIn,
            action: () => isLoggedIn ? null : setIsLoginOpen(true),
            active: false
        },
        {
            label: "Generate Now",
            icon: Sparkles,
            action: () => { }, // Already on the page
            active: true
        },
        {
            label: "Recommender Lens",
            icon: MessageSquare,
            action: () => router.push('/explore'), // Mapping to explore/chat conceptually
            active: false
        },
        {
            label: "Your Cart",
            icon: ShoppingBag,
            action: () => router.push('/cart'),
            active: false
        },
        {
            label: "About Us",
            icon: Info,
            action: () => { },
            active: false
        },
    ];

    return (
        <aside className="w-full md:w-64 bg-white border-r border-[#EAE6DE] md:h-[calc(100vh-80px)] md:sticky md:top-20 flex md:flex-col shadow-sm shrink-0 z-40 overflow-x-auto md:overflow-visible">
            <div className="flex md:flex-col p-4 gap-2 w-full">
                {menuItems.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={item.action}
                        className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300 whitespace-nowrap md:whitespace-normal
                            ${item.active
                                ? 'bg-[#A38A6D]/10 text-[#A38A6D] border border-[#A38A6D]/20 shadow-sm'
                                : 'text-[#787065] hover:bg-[#F7F5F0] hover:text-[#2C2C2C] border border-transparent'
                            }
                        `}
                    >
                        <item.icon size={18} strokeWidth={1.5} />
                        <span className={`text-sm font-medium tracking-wide ${item.active ? 'font-semibold' : ''}`}>
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>

            <div className="hidden md:block mt-auto p-6 border-t border-[#EAE6DE] bg-[#FAFAF8]">
                <p className="text-[10px] text-[#787065] leading-relaxed uppercase tracking-wider opacity-60">
                    Artisan AI © 2026<br />
                    Curated Intelligence
                </p>
            </div>
        </aside>
    );
};

export default GenerateSidebar;
