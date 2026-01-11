"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ className, ...props }, ref) {
    return (
        <input
            ref={ref}
            className={cn(
                "w-full px-4 py-2 bg-[#0a0a0a] border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red",
                className
            )}
            {...props}
        />
    );
});

export { Input };
