import React from 'react';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    size = 'md',
    className = ''
}) => {
    const sizeClasses = {
        sm: 'w-5 h-5 border-2',
        md: 'w-8 h-8 border-3',
        lg: 'w-12 h-12 border-4',
        xl: 'w-16 h-16 border-4',
    };

    return (
        <div className={`relative ${className}`}>
            <div className={`${sizeClasses[size]} rounded-full border-white/10 border-t-gold animate-spin`} />
        </div>
    );
};

export const LoadingPage: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md">
            <LoadingSpinner size="xl" />
            <p className="mt-4 text-gold font-bold tracking-widest uppercase text-sm animate-pulse">Loading</p>
        </div>
    );
};
