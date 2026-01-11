import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { Loader2, ArrowRight } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg" | "icon";
    isLoading?: boolean;
    asChild?: boolean;
    withArrow?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, asChild = false, withArrow = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        const hasArrow = withArrow && (variant === "primary" || variant === "secondary");

        return (
            <Comp
                ref={ref}
                disabled={isLoading || props.disabled}
                className={cn(
                    "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background active:scale-95",
                    {
                        "bg-brand-red text-white hover:bg-brand-red-dark red-glow": variant === "primary",
                        "bg-white text-black hover:bg-white/90": variant === "secondary",
                        "border border-white/20 hover:bg-white/5 hover:text-white": variant === "outline",
                        "hover:bg-white/5 hover:text-white": variant === "ghost",
                        "text-gold underline-offset-4 hover:underline": variant === "link",
                        "h-10 px-6": size === "sm",
                        "h-12 px-8": size === "md",
                        "h-14 px-10 text-base": size === "lg",
                        "h-12 w-12": size === "icon",
                    },
                    className
                )}
                {...props}
            >
                {asChild ? (
                    children
                ) : (
                    <>
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        <span className="relative z-10">{children}</span>
                        {hasArrow && (
                            <div className="ml-4 w-8 h-8 rounded-full bg-black/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        )}
                    </>
                )}
            </Comp>
        );
    }
);
Button.displayName = "Button";

export { Button };
