"use client";

import React from 'react';
import GenerateSidebar from '@/components/GenerateSidebar';
import GenerateInterface from '@/components/GenerateInterface';

export default function GeneratePage() {
    return (
        <div className="min-h-screen bg-[#F7F5F0] flex flex-col md:flex-row">
            {/* Sidebar Navigation */}
            <GenerateSidebar />

            {/* Main Content Area */}
            <GenerateInterface />
        </div>
    );
}
