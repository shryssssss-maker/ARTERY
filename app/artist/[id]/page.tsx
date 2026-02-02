import React from 'react';
import { notFound } from 'next/navigation';
import ArtistProfile from '@/components/ArtistProfile';
import { ARTISTS } from '@/lib/data';

interface PageProps {
    params: {
        id: string;
    };
}

// Generate static params if desired, but dynamic is fine for now
export function generateStaticParams() {
    return ARTISTS.map((artist) => ({
        id: artist.id.toString(),
    }));
}

export default function ArtistPage({ params }: PageProps) {
    const artist = ARTISTS.find((a) => a.id.toString() === params.id);

    if (!artist) {
        notFound();
    }

    return <ArtistProfile artist={artist} />;
}
