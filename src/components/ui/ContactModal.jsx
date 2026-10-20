import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Button } from './Button';

export function ContactModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent(formData.subject || "New Project Inquiry");
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );

        window.location.href = `mailto:adithyagnitt@gmail.com?subject=${subject}&body=${body}`;
        onClose();
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white dark:bg-zinc-900 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-fade-in-up">
                <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-serif dark:text-white">Get in Touch</h3>
                        <button
                            onClick={onClose}
                            className="p-2 text-secondary hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-secondary dark:text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-primary/20 dark:text-white outline-none transition-all"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-secondary dark:text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-primary/20 dark:text-white outline-none transition-all"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-secondary dark:text-gray-400 mb-2">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-primary/20 dark:text-white outline-none transition-all"
                                placeholder="Project Inquiry"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-secondary dark:text-gray-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-primary/20 dark:text-white outline-none transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <Button type="submit" variant="primary" className="w-full py-4 text-base">
                            Send Message <Send size={18} className="ml-2" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
