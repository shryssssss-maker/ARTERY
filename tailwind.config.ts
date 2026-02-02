import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F7F5F0",
                foreground: "#2C2C2C",
                accent: "#A38A6D",
                "accent-dark": "#8F765A",
                muted: "#787065",
                border: "#EAE6DE",
                "card-bg": "#F2EFE8",
            },
            fontFamily: {
                serif: ['var(--font-serif)', 'serif'],
                sans: ['var(--font-sans)', 'sans-serif'],
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-out forwards",
                "slide-up": "slideUp 0.5s ease-out forwards",
                "drift": "drift 20s infinite alternate linear",
                "slow-pulse": "slowPulse 6s infinite ease-in-out",
                "grain": "grain 8s steps(10) infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                drift: {
                    "0%": { transform: "translate(0, 0)" },
                    "100%": { transform: "translate(10px, 10px)" },
                },
                slowPulse: {
                    "0%, 100%": { opacity: "0.8", transform: "scale(1)" },
                    "50%": { opacity: "1", transform: "scale(1.02)" },
                },
                grain: {
                    "0%, 100%": { transform: "translate(0, 0)" },
                    "10%": { transform: "translate(-5%, -5%)" },
                    "20%": { transform: "translate(-10%, 5%)" },
                    "30%": { transform: "translate(5%, -10%)" },
                    "40%": { transform: "translate(-5%, 15%)" },
                    "50%": { transform: "translate(-10%, 5%)" },
                    "60%": { transform: "translate(15%, 0)" },
                    "70%": { transform: "translate(0, 10%)" },
                    "80%": { transform: "translate(-15%, 0)" },
                    "90%": { transform: "translate(10%, 5%)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
