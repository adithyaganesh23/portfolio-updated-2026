import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Section({
    children,
    className,
    id,
    fullWidth = false
}) {
    return (
        <section
            id={id}
            className={twMerge(
                "py-20 md:py-32 relative overflow-hidden",
                className
            )}
        >
            <div className={twMerge(
                "mx-auto px-6 md:px-12",
                fullWidth ? "w-full" : "max-w-7xl"
            )}>
                {children}
            </div>
        </section>
    );
}
