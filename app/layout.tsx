import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/context/StoreContext";
import Navbar from "@/components/Navbar";
import LoginModal from "@/components/LoginModal";
import CommissionModal from "@/components/CommissionModal";
import CuratorChat from "@/components/CuratorChat";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
    title: "Artisan AI",
    description: "Curated intelligence meeting craftsmanship.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${playfair.variable} bg-background text-foreground font-sans antialiased`}>
                <StoreProvider>
                    <Navbar />
                    {children}
                    <CuratorChat />
                    <LoginModal />
                    <CommissionModal />
                </StoreProvider>
            </body>
        </html>
    );
}
