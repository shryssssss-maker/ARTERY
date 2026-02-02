"use client";

import React from 'react';
import ArtistSidebar from '@/components/ArtistSidebar';
import { Package, Truck, Clock, AlertCircle } from 'lucide-react';

export default function PendingOrdersPage() {
    // Mock pending orders for Jaipur art
    const orders = [
        {
            id: "#ORD-7829",
            customer: "Elena Rossi",
            item: "Hand-painted Jaipur Vase",
            price: "$350",
            status: "Pending",
            daysLeft: 2,
            image: "/images/jaipur-vase.png"
        },
        {
            id: "#ORD-7830",
            customer: "Liam O'Connor",
            item: "Mughal Miniature: The Hunt",
            price: "$1,200",
            status: "Pending",
            daysLeft: 5,
            image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: "#ORD-7832",
            customer: "Sophia Chen",
            item: "Blue Pottery Plate Set",
            price: "$180",
            status: "Urgent",
            daysLeft: 1,
            image: "/images/blue-pottery-plate.jpg"
        },
        {
            id: "#ORD-7835",
            customer: "Marcus Aurelius",
            item: "Custom Portrait on Silk",
            price: "$850",
            status: "Pending",
            daysLeft: 7,
            image: "https://images.unsplash.com/photo-1582560475093-6d4b0dc5e7e0?auto=format&fit=crop&q=80&w=200"
        }
    ];

    return (
        <div className="min-h-screen bg-[#F7F5F0] flex flex-col md:flex-row">
            {/* Artist Specific Sidebar */}
            <ArtistSidebar />

            <div className="flex-1 overflow-y-auto h-screen p-8 animate-fade-in">
                <div className="max-w-5xl mx-auto">
                    <header className="mb-12 flex justify-between items-end">
                        <div>
                            <h1 className="font-serif text-4xl text-[#2C2C2C] mb-2">Pending Orders</h1>
                            <p className="text-[#787065] font-sans">Manage your shipments and track delivery timelines.</p>
                        </div>
                        <div className="bg-white px-4 py-2 rounded-md border border-[#EAE6DE] shadow-sm flex items-center gap-2 text-sm font-medium text-[#2C2C2C]">
                            <Package size={16} className="text-[#A38A6D]" />
                            <span>{orders.length} Orders To Ship</span>
                        </div>
                    </header>

                    <div className="grid gap-4">
                        {orders.map((order) => (
                            <div key={order.id} className="bg-white p-4 rounded-lg border border-[#EAE6DE] shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-center gap-6 group">
                                <div className="w-full sm:w-32 h-32 bg-[#F2EFE8] rounded-md overflow-hidden shrink-0">
                                    <img src={order.image} alt={order.item} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>

                                <div className="flex-1 w-full text-center sm:text-left">
                                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                                        <div>
                                            <h3 className="font-serif text-xl text-[#2C2C2C]">{order.item}</h3>
                                            <p className="text-sm text-[#787065] mt-1">Order {order.id} • {order.customer}</p>
                                        </div>
                                        <div className="text-lg font-semibold text-[#2C2C2C] mt-2 sm:mt-0">
                                            {order.price}
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                                        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide ${order.daysLeft <= 2 ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-[#A38A6D]/10 text-[#A38A6D] border border-[#A38A6D]/20'
                                            }`}>
                                            <Clock size={14} />
                                            {order.daysLeft} Days Left to Ship
                                        </div>
                                        {order.status === 'Urgent' && (
                                            <div className="flex items-center gap-1 text-red-500 text-xs font-medium animate-pulse">
                                                <AlertCircle size={14} /> High Priority
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="w-full sm:w-auto flex flex-col gap-2 shrink-0">
                                    <button className="bg-[#2C2C2C] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-[#404040] transition-colors flex items-center justify-center gap-2 w-full">
                                        <Truck size={16} /> Ship Order
                                    </button>
                                    <button className="text-[#787065] hover:text-[#2C2C2C] text-xs font-medium border border-transparent hover:border-[#EAE6DE] px-4 py-2 rounded-md transition-colors w-full">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
