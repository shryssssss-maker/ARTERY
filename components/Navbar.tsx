"use client";

import React from 'react';
import { Menu, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useStore } from '@/context/StoreContext';

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { cart, isLoggedIn, setIsLoginOpen } = useStore();

    const cartCount = cart.length;

    const isActive = (path: string) => {
        // Simple exact match or starts with for sub-routes
        if (path === '/' && pathname === '/') return true;
        if (path !== '/' && pathname.startsWith(path)) return true;
        return false;
    };

    if (pathname === '/') return null;

    return (
        <nav className="sticky top-0 z-50 bg-[#F7F5F0]/95 backdrop-blur-sm border-b border-[#EAE6DE] px-6 py-5 flex justify-between items-center transition-all">
            <div
                onClick={() => router.push('/')}
                className="cursor-pointer flex items-center gap-2 group"
            >
                <span className="text-[#A38A6D] text-2xl group-hover:rotate-45 transition-transform duration-700 font-serif">◆</span>
                <h1 className="font-serif text-2xl text-[#2C2C2C] tracking-tight font-medium">Artisan AI</h1>
            </div>

            <div className="hidden md:flex items-center gap-8 font-sans text-[15px] text-[#2C2C2C] tracking-wide">
                {pathname.startsWith('/artist') ? (
                    <Link href="/artist/marketplace" className={`hover:text-[#A38A6D] transition-colors ${isActive('/artist/marketplace') ? 'text-[#A38A6D]' : ''}`}>Market Place</Link>
                ) : (
                    <Link href="/explore" className={`hover:text-[#A38A6D] transition-colors ${isActive('/explore') ? 'text-[#A38A6D]' : ''}`}>Explore Artists</Link>
                )}
                {pathname.startsWith('/artist') ? (
                    <Link href="/artist/orders" className={`hover:text-[#A38A6D] transition-colors ${isActive('/artist/orders') ? 'text-[#A38A6D]' : ''}`}>Pending Orders</Link>
                ) : (
                    <Link href="/generate" className={`hover:text-[#A38A6D] transition-colors ${isActive('/generate') ? 'text-[#A38A6D]' : ''}`}>Generate Art</Link>
                )}
                <button className="hover:text-[#A38A6D] transition-colors">About</button>
            </div>

            <div className="flex items-center gap-6">
                {isLoggedIn ? (
                    <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="w-8 h-8 rounded-full bg-[#A38A6D] text-white flex items-center justify-center font-serif text-sm">
                            ES
                        </div>
                        <span className="text-sm text-[#2C2C2C] hidden sm:block">Collector</span>
                    </div>
                ) : (
                    <button onClick={() => setIsLoginOpen(true)} className="text-[#2C2C2C] hover:text-[#A38A6D] transition-colors hidden sm:block">Login</button>
                )}

                <button
                    onClick={() => router.push('/cart')}
                    className="relative text-[#2C2C2C] hover:text-[#A38A6D] transition-colors"
                >
                    <ShoppingBag size={20} strokeWidth={1.5} />
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-[#A38A6D] text-[#F7F5F0] text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                            {cartCount}
                        </span>
                    )}
                </button>
                <button className="md:hidden text-[#2C2C2C]">
                    <Menu size={24} strokeWidth={1.5} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
