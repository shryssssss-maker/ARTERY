import React from 'react';
import ArtistSidebar from '@/components/ArtistSidebar';
import ArtistProfile from '@/components/ArtistProfile';
import { ARTISTS } from '@/lib/data';

export default function ArtistProfilePage() {
    // Use the first artist (Aarav Patel) as the logged-in user
    const currentArtist = ARTISTS[0];

    return (
        <div className="min-h-screen bg-[#F7F5F0] flex flex-col md:flex-row">
            {/* Artist Specific Sidebar */}
            <ArtistSidebar />

            {/* Main Content Area - Artist Profile */}
            <div className="flex-1 overflow-y-auto h-screen">
                <ArtistProfile artist={currentArtist} isOwner={true} />
            </div>
        </div>
    );
}
