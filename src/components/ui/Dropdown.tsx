"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

type DropdownProps = {
    label: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
};

export function Dropdown({ label, children, icon }: DropdownProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Close on outside click or Escape
    useEffect(() => {
        const handler = (e: MouseEvent | KeyboardEvent) => {
            if (e instanceof KeyboardEvent && e.key === "Escape") setOpen(false);
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("keydown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("keydown", handler);
        };
    }, []);

    return (
        <div className="dropdown" data-open={open} ref={ref}>
            <button
                className="dropdown-trigger"
                aria-haspopup="menu"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
            >
                {icon && <span className="mr-1">{icon}</span>}
                {label}
                <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="dropdown-panel" role="menu">
                {children}
            </div>
        </div>
    );
}
