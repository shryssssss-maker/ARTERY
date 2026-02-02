"use client";

import React from 'react';
import { X } from 'lucide-react';
import { CartItem as CartItemType } from '@/lib/types';
import { useStore } from '@/context/StoreContext';

interface CartItemProps {
    item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
    const { removeFromCart } = useStore();

    return (
        <div className="bg-white p-6 rounded-sm shadow-sm border border-[#EAE6DE] flex flex-col sm:flex-row gap-6 items-center sm:items-start relative group">
            <div className="w-24 h-24 bg-[#F2EFE8] shrink-0">
                <img src={item.artist.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-center sm:text-left">
                <h4 className="font-serif text-xl text-[#2C2C2C] mb-1">Custom Commission Request</h4>
                <p className="text-[#787065] text-sm mb-2">Artisan: <span className="text-[#2C2C2C] font-medium">{item.artist.name}</span></p>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start mt-2">
                    <span className="text-[10px] bg-[#F7F5F0] px-2 py-1 rounded-sm text-[#787065] uppercase tracking-wide border border-[#EAE6DE]">Size: {item.size}</span>
                    <span className="text-[10px] bg-[#F7F5F0] px-2 py-1 rounded-sm text-[#787065] uppercase tracking-wide border border-[#EAE6DE]">Frame: {item.frame}</span>
                </div>
            </div>
            <div className="text-right">
                <div className="font-serif text-lg text-[#2C2C2C] mb-2">${item.price || 450}.00</div>
            </div>
            <button
                onClick={() => removeFromCart(item.id)}
                className="absolute top-4 right-4 text-[#EAE6DE] hover:text-red-400 transition-colors p-1"
            >
                <X size={16} />
            </button>
        </div>
    );
};

export default CartItem;
