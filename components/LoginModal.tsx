"use client";

import React from 'react';
import { X } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

const LoginModal = () => {
    const { isLoginOpen, setIsLoginOpen, login } = useStore();

    if (!isLoginOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2C2C2C]/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-[#F7F5F0] w-full max-w-md p-8 md:p-12 rounded-sm shadow-2xl relative animate-slide-up">
                <button onClick={() => setIsLoginOpen(false)} className="absolute top-4 right-4 text-[#787065] hover:text-[#2C2C2C]">
                    <X size={24} strokeWidth={1.5} />
                </button>

                <div className="text-center mb-8">
                    <span className="text-[#A38A6D] text-3xl font-serif block mb-2">◆</span>
                    <h2 className="font-serif text-3xl text-[#2C2C2C]">Welcome Back</h2>
                    <p className="font-sans text-[#787065] mt-2">Sign in to curate your collection.</p>
                </div>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-[#787065] font-semibold">Email Address</label>
                        <input type="email" placeholder="collector@artisan.ai" className="w-full bg-white border border-[#EAE6DE] p-3 rounded-sm text-[#2C2C2C] focus:border-[#A38A6D] outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-[#787065] font-semibold">Password</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-white border border-[#EAE6DE] p-3 rounded-sm text-[#2C2C2C] focus:border-[#A38A6D] outline-none transition-colors" />
                    </div>

                    <button
                        onClick={login}
                        className="w-full bg-[#2C2C2C] text-[#F7F5F0] py-4 rounded-sm font-sans tracking-wide hover:bg-[#404040] transition-colors shadow-lg"
                    >
                        Sign In
                    </button>
                </div>

                <div className="mt-8 text-center text-sm text-[#787065]">
                    Not a member? <button className="text-[#A38A6D] underline hover:text-[#8F765A]">Request an invitation</button>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
