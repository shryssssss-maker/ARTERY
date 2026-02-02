export interface Artist {
    id: number;
    name: string;
    location: string;
    style: string;
    image: string;
    tags: string[];
    coords: {
        top: string;
        left: string;
    };
    profileImage?: string;
    portfolio?: string[];
}

export interface CartItem {
    id: number;
    artist: Artist;
    size: string;
    frame: string;
    price?: number;
}

export interface ChatMessage {
    role: 'user' | 'assistant';
    text: string;
}

export interface CommissionDetails {
    artist: Artist;
    size: string;
    frame: string;
}
