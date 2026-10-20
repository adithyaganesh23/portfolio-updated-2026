import React from 'react';
import { twMerge } from 'tailwind-merge';

export function Card({
    children,
    className,
    hover = true,
    ...props
}) {
    return (
        <div
            className={twMerge(
                "bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-700 transition-colors duration-300",
                hover && "transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
