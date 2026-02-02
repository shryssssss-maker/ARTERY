"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Artist, CommissionDetails } from '@/lib/types';

interface StoreContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
    isLoginOpen: boolean;
    setIsLoginOpen: (isOpen: boolean) => void;
    isCommissionModalOpen: boolean; // Renamed to clarify it is modal state
    openCommissionModal: (artist: Artist) => void;
    closeCommissionModal: () => void;
    selectedArtistForCommission: Artist | null;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [selectedArtistForCommission, setSelectedArtistForCommission] = useState<Artist | null>(null);

    const addToCart = (item: CartItem) => {
        setCart((prev) => [...prev, item]);
    };

    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const login = () => {
        setIsLoggedIn(true);
        setIsLoginOpen(false);
    };

    const logout = () => {
        setIsLoggedIn(false);
    };

    const openCommissionModal = (artist: Artist) => {
        setSelectedArtistForCommission(artist);
    };

    const closeCommissionModal = () => {
        setSelectedArtistForCommission(null);
    };

    return (
        <StoreContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                isLoggedIn,
                login,
                logout,
                isLoginOpen,
                setIsLoginOpen,
                isCommissionModalOpen: !!selectedArtistForCommission,
                openCommissionModal,
                closeCommissionModal,
                selectedArtistForCommission,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
};
