"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useToast } from "@/components/ui/Toast";

interface ScavengerHuntContextType {
    foundEmbers: string[];
    findEmber: (id: string, locationName: string) => void;
    totalEmbers: number;
    isComplete: boolean;
    resetHunt: () => void;
}

const ScavengerHuntContext = createContext<ScavengerHuntContextType | undefined>(undefined);

export function ScavengerHuntProvider({ children }: { children: ReactNode }) {
    const [foundEmbers, setFoundEmbers] = useState<string[]>([]);
    const { addToast } = useToast();
    const TOTAL_EMBERS = 3;

    useEffect(() => {
        const saved = localStorage.getItem("cnc_scavenger_hunt");
        if (saved) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFoundEmbers(JSON.parse(saved));
        }
    }, []);

    const findEmber = (id: string, locationName: string) => {
        if (!foundEmbers.includes(id)) {
            const newFound = [...foundEmbers, id];
            setFoundEmbers(newFound);
            localStorage.setItem("cnc_scavenger_hunt", JSON.stringify(newFound));

            // Logic to check if all are found is handled by the HUD/Tracker
            if (newFound.length === TOTAL_EMBERS) {
                addToast("🎉 Scavenger Hunt Complete! You've found all the embers! Claim your reward below.", "success");
            } else {
                addToast(`🔥 Ember Found! You found the hidden ember in ${locationName}. ${newFound.length}/${TOTAL_EMBERS} collected.`, "success");
            }
        } else {
            addToast("You've already collected this ember!", "info");
        }
    };

    const resetHunt = () => {
        setFoundEmbers([]);
        localStorage.removeItem("cnc_scavenger_hunt");
        window.location.reload();
    };

    return (
        <ScavengerHuntContext.Provider value={{
            foundEmbers,
            findEmber,
            totalEmbers: TOTAL_EMBERS,
            isComplete: foundEmbers.length === TOTAL_EMBERS,
            resetHunt
        }}>
            {children}
        </ScavengerHuntContext.Provider>
    );
}

export function useScavengerHunt() {
    const context = useContext(ScavengerHuntContext);
    if (context === undefined) {
        throw new Error("useScavengerHunt must be used within a ScavengerHuntProvider");
    }
    return context;
}
