import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({
    children,
    variant = 'primary',
    className,
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90 hover:scale-105",
        secondary: "bg-white text-primary border border-gray-200 hover:bg-gray-50 hover:border-gray-300",
        ghost: "bg-transparent text-primary hover:bg-gray-100",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
    };

    return (
        <button
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
}
