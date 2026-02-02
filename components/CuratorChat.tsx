"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, X, Send } from 'lucide-react';
import { ChatMessage } from '@/lib/types';
import { callGemini } from '@/lib/api';
import { ARTISTS } from '@/lib/data';

const CuratorChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'assistant', text: "Namaste. I am Fabri, your curator. I can guide you through our collection of Indian masterpieces. How may I assist you?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInput('');
        setIsLoading(true);

        const systemPrompt = `You are Fabri, the resident art curator of Artisan AI. Your tone is sophisticated, warm, and knowledgeable about Indian art forms.
    Here are our Artisans:
    ${JSON.stringify(ARTISTS)}
    If a user asks about a style not listed, suggest the closest match or suggest a custom commission. Keep responses concise (under 3 sentences) and elegantly phrased.`;

        const response = await callGemini(userMsg, systemPrompt);

        setMessages(prev => [...prev, { role: 'assistant', text: response }]);
        setIsLoading(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[90]">
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-[#2C2C2C] text-[#F7F5F0] p-4 rounded-full shadow-xl hover:scale-105 transition-transform flex items-center gap-2 group"
                >
                    <Sparkles size={20} className="text-[#A38A6D] animate-pulse" />
                    <span className="pr-2 font-serif hidden group-hover:block transition-all">Ask Curator</span>
                </button>
            )}

            {isOpen && (
                <div className="bg-white w-80 md:w-96 rounded-lg shadow-2xl border border-[#EAE6DE] flex flex-col animate-slide-up overflow-hidden mb-4 mr-0 md:mr-4">
                    <div className="bg-[#2C2C2C] p-4 flex justify-between items-center text-[#F7F5F0]">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#A38A6D] flex items-center justify-center">
                                <Sparkles size={14} className="text-white" />
                            </div>
                            <div>
                                <h4 className="font-serif text-sm">Fabri</h4>
                                <p className="text-[10px] text-gray-400">AI Art Curator</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                            <X size={18} />
                        </button>
                    </div>

                    <div className="h-80 overflow-y-auto p-4 space-y-4 bg-[#F7F5F0]">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] p-3 rounded-lg text-sm ${msg.role === 'user'
                                    ? 'bg-[#A38A6D] text-white rounded-br-none'
                                    : 'bg-white text-[#2C2C2C] border border-[#EAE6DE] rounded-bl-none shadow-sm'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white p-3 rounded-lg border border-[#EAE6DE] rounded-bl-none shadow-sm flex gap-1">
                                    <div className="w-2 h-2 bg-[#A38A6D] rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-[#A38A6D] rounded-full animate-bounce delay-100"></div>
                                    <div className="w-2 h-2 bg-[#A38A6D] rounded-full animate-bounce delay-200"></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-3 bg-white border-t border-[#EAE6DE] flex gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask for recommendations..."
                            className="flex-1 bg-[#F7F5F0] border border-[#EAE6DE] rounded-md px-3 py-2 text-sm text-[#2C2C2C] outline-none focus:border-[#A38A6D]"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim() || isLoading}
                            className="p-2 bg-[#2C2C2C] text-white rounded-md disabled:opacity-50 hover:bg-[#404040]"
                        >
                            <Send size={16} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CuratorChat;
