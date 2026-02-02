"use client";

import React from 'react';
import ArtistSidebar from '@/components/ArtistSidebar';
import { Clock, DollarSign, Palette } from 'lucide-react';

export default function ArtistMarketplacePage() {
    // Mock requests for "Jaipur painting" customizations
    const requests = [
        {
            id: 1,
            customer: "Sarah Jenkins",
            title: "Mughal Style Garden Scene",
            description: "I need a 24x36 painting of a traditional Mughal garden scene to go above my fireplace. I love the intricate borders typical of Jaipur miniatures but want the color palette to be slightly muted to fit a modern living room.",
            budget: "$800 - $1,200",
            deadline: "3 weeks",
            type: "Commission"
        },
        {
            id: 2,
            customer: "Hotel Ratan Palace",
            title: "Large Scale Peacock Mural Design",
            description: "We are looking for a design for a feature wall in our lobby. Theme is 'Peacocks in Rain'. We need a digital design first that can be projected and painted by local artisans. Needs to be extremely high resolution.",
            budget: "$2,500",
            deadline: "1 month",
            type: "Commercial"
        },
        {
            id: 3,
            customer: "Vikram Malhotra",
            title: "Traditional Elephant Procession",
            description: "Looking for a classic procession scene using natural pigments on cloth. Size approx 12x18 inches. It's a gift for my parents' anniversary, so it needs to be authentic and detailed.",
            budget: "$600",
            deadline: "2 weeks",
            type: "Commission"
        },
        {
            id: 4,
            customer: "Design Studio X",
            title: "Block Print Pattern Series",
            description: "Need a series of 5 cohesive floral block print patterns inspired by Jaipur textiles. Vector format required. These will be used for a summer clothing line.",
            budget: "$1,500",
            deadline: "10 days",
            type: "Commercial"
        }
    ];

    return (
        <div className="min-h-screen bg-[#F7F5F0] flex flex-col md:flex-row">
            {/* Artist Specific Sidebar */}
            <ArtistSidebar />

            <div className="flex-1 overflow-y-auto h-screen p-8 animate-fade-in">
                <div className="max-w-4xl mx-auto">
                    <header className="mb-12">
                        <h1 className="font-serif text-4xl text-[#2C2C2C] mb-2">Market Place</h1>
                        <p className="text-[#787065] font-sans">Open requests from collectors seeking your craftsmanship.</p>
                    </header>

                    <div className="grid gap-6">
                        {requests.map((request) => (
                            <div key={request.id} className="bg-white p-6 rounded-lg border border-[#EAE6DE] shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-sm ${request.type === 'Commercial' ? 'bg-blue-50 text-blue-600' : 'bg-[#A38A6D]/10 text-[#A38A6D]'}`}>
                                            {request.type}
                                        </span>
                                        <h3 className="font-serif text-2xl text-[#2C2C2C] mt-2 group-hover:text-[#A38A6D] transition-colors">{request.title}</h3>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center gap-1 text-[#2C2C2C] font-semibold text-lg justify-end">
                                            <DollarSign size={16} className="text-[#A38A6D]" />
                                            {request.budget}
                                        </div>
                                        <div className="flex items-center gap-1 text-[#787065] text-xs mt-1 justify-end">
                                            <Clock size={12} />
                                            {request.deadline}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[#787065] font-sans mb-6 leading-relaxed">
                                    {request.description}
                                </p>
                                <div className="flex justify-between items-center border-t border-[#F7F5F0] pt-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-[#F2EFE8] flex items-center justify-center text-[10px] text-[#787065] font-serif">
                                            {request.customer.charAt(0)}
                                        </div>
                                        <span className="text-xs text-[#787065] font-medium">{request.customer}</span>
                                    </div>
                                    <button className="text-sm font-medium text-[#2C2C2C] border border-[#EAE6DE] px-4 py-2 rounded-md hover:bg-[#2C2C2C] hover:text-white transition-colors">
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
