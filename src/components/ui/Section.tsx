import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: ReactNode;
    className?: string;
    containerClassName?: string;
    id?: string;
}

export function Section({ children, className, containerClassName, id }: SectionProps) {
    return (
        <section id={id} className={cn("py-20 md:py-32 overflow-hidden", className)}>
            <div className={cn("container mx-auto px-4 md:px-6", containerClassName)}>
                {children}
            </div>
        </section>
    );
}
