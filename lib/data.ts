import { Artist } from "./types";

export const MOCK_IMAGES = {
    hero: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=1200",
    generated: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800",
    artist1: "https://images.unsplash.com/photo-1582560475093-6d4b0dc5e7e0?auto=format&fit=crop&q=80&w=800",
    artist2: "https://images.unsplash.com/photo-1582201383849-04169727ce81?auto=format&fit=crop&q=80&w=800",
    artist3: "https://images.unsplash.com/photo-1605634288001-c8c3e8774775?auto=format&fit=crop&q=80&w=800",
    portrait: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    mapBase: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200",
};

export const ARTISTS: Artist[] = [
    { id: 1, name: "Aarav Patel", location: "Jaipur, Rajasthan", style: "Miniature Painting", image: "/images/aarav-work-1.jpg", tags: ["Royal", "Detailed"], coords: { top: '35%', left: '30%' }, profileImage: "/images/aarav-patel.jpg", portfolio: ["/images/aarav-work-1.jpg", "/images/aarav-work-2.png", "/images/aarav-work-3.png", "/images/aarav-work-4.jpg"] },
    { id: 2, name: "Priya Singh", location: "Varanasi, UP", style: "Ghat Watercolors", image: "/images/priya-pottery-new-4.png", tags: ["Spiritual", "Light"], coords: { top: '38%', left: '55%' }, profileImage: "/images/priya-singh.png", portfolio: ["/images/priya-pottery-new-1.png", "/images/priya-pottery-new-2.png", "/images/priya-pottery-new-3.png", "/images/priya-pottery-new-4.png"] },
    { id: 3, name: "Rohan Gupta", location: "Mumbai, Maharashtra", style: "Contemporary Oil", image: "/images/rohan-work-2.jpg", tags: ["Modern", "Texture"], coords: { top: '60%', left: '25%' }, profileImage: "/images/rohan-profile.png", portfolio: ["/images/rohan-work-1.jpg", "/images/rohan-work-2.jpg", "/images/rohan-work-3.jpg", "/images/rohan-work-4.jpg"] },
    { id: 4, name: "Ananya Iyer", location: "Kochi, Kerala", style: "Natural Pigments", image: MOCK_IMAGES.generated, tags: ["Organic", "Traditional"], coords: { top: '85%', left: '40%' } },
];
