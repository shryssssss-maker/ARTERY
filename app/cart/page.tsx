"use client";

import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/context/StoreContext';
import CartItem from '@/components/CartItem';

export default function CartPage() {
    const router = useRouter();
    const { cart } = useStore();
    const subtotal = cart.reduce((acc, item) => acc + (item.price || 450), 0);

    return (
        <div className="min-h-screen bg-[#F7F5F0] py-12 px-6 md:px-12 animate-fade-in">
            <div className="max-w-5xl mx-auto">
                <h2 className="font-serif text-3xl text-[#2C2C2C] mb-8 pb-4 border-b border-[#EAE6DE]">Your Acquisitions</h2>

                {cart.length === 0 ? (
                    <div className="text-center py-24 bg-white rounded-sm border border-[#EAE6DE]">
                        <ShoppingBag size={48} className="text-[#EAE6DE] mx-auto mb-4" />
                        <p className="text-[#787065] text-lg mb-6">Your collection is empty.</p>
                        <button onClick={() => router.push('/explore')} className="text-[#A38A6D] font-medium hover:underline">Explore Artists</button>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* List */}
                        <div className="flex-1 space-y-6">
                            {cart.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="w-full lg:w-96 shrink-0">
                            <div className="bg-white p-8 rounded-sm shadow-sm border border-[#EAE6DE] sticky top-24">
                                <h3 className="font-serif text-xl text-[#2C2C2C] mb-6">Summary</h3>
                                <div className="space-y-3 mb-6 pb-6 border-b border-[#EAE6DE] text-sm text-[#787065]">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>${subtotal}.00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Service Fee (5%)</span>
                                        <span>${(subtotal * 0.05).toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-8">
                                    <span className="font-serif text-lg text-[#2C2C2C]">Total</span>
                                    <span className="font-serif text-2xl text-[#2C2C2C]">${(subtotal * 1.05).toFixed(2)}</span>
                                </div>
                                <button className="w-full bg-[#A38A6D] text-[#F7F5F0] py-4 rounded-md hover:bg-[#8F765A] transition-colors shadow-lg shadow-[#A38A6D]/20 font-medium tracking-wide">
                                    Proceed to Checkout
                                </button>
                                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#787065]">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div> Secure Encrypted Transaction
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
