"use client";

import React from 'react';
import { User, Layers, FileText, IndianRupee, LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/context/StoreContext';

const ArtistSidebar = () => {
    const router = useRouter();
    const { setIsLoginOpen, isLoggedIn } = useStore();

    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

    const menuItems = [
        {
            label: isLoggedIn ? "Login" : "Login",
            icon: isLoggedIn ? User : LogIn,
            action: () => isLoggedIn ? null : setIsLoginOpen(true),
            active: false
        },
        {
            label: "Your Catalogue",
            icon: Layers,
            action: () => { },
            active: false
        },
        {
            label: "Your Profile",
            icon: FileText,
            action: () => router.push('/artist/profile'),
            active: pathname === '/artist/profile'
        },
        {
            label: "Sales",
            icon: IndianRupee,
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
                    For Creators
                </p>
            </div>
        </aside>
    );
};

export default ArtistSidebar;
