"use client";

import React from 'react';
import ArtistSidebar from '@/components/ArtistSidebar';
import GenerateInterface from '@/components/GenerateInterface';

export default function ArtistPage() {
    return (
        <div className="min-h-screen bg-[#F7F5F0] flex flex-col md:flex-row">
            {/* Artist Specific Sidebar */}
            <ArtistSidebar />

            {/* Shared Generation Interface */}
            <GenerateInterface />
        </div>
    );
}
