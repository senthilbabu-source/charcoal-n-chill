"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useToast } from "@/components/ui/Toast";

interface ScavengerHuntContextType {
    foundEmbers: string[];
    findEmber: (id: string, locationName: string) => void;
    totalEmbers: number;
    isComplete: boolean;
    isClaimed: boolean;
    claimReward: () => void;
    resetHunt: () => void;
}

const ScavengerHuntContext = createContext<ScavengerHuntContextType | undefined>(undefined);

export function ScavengerHuntProvider({ children }: { children: ReactNode }) {
    const [foundEmbers, setFoundEmbers] = useState<string[]>([]);
    const [isClaimed, setIsClaimed] = useState(false);
    const { addToast } = useToast();
    const TOTAL_EMBERS = 3;

    useEffect(() => {
        const syncState = () => {
            const saved = localStorage.getItem("cnc_scavenger_hunt");
            const claimed = localStorage.getItem("cnc_scavenger_claimed");
            if (saved) {
                setFoundEmbers(JSON.parse(saved));
            }
            if (claimed) {
                setIsClaimed(true);
            }
        };

        syncState(); // Initial load

        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === "cnc_scavenger_hunt" || e.key === "cnc_scavenger_claimed") {
                syncState();
            }
        };

        // Add safety check for hydration mismatch or persistence failure
        const claimed = localStorage.getItem("cnc_scavenger_claimed");
        if (claimed === "true" && !isClaimed) {
            console.log("Syncing claimed state from storage");
            setIsClaimed(true);
        }

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
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

    const claimReward = () => {
        setIsClaimed(true);
        localStorage.setItem("cnc_scavenger_claimed", "true");
    };

    const resetHunt = () => {
        setFoundEmbers([]);
        setIsClaimed(false);
        localStorage.removeItem("cnc_scavenger_hunt");
        localStorage.removeItem("cnc_scavenger_claimed");
        window.location.reload();
    };

    return (
        <ScavengerHuntContext.Provider value={{
            foundEmbers,
            findEmber,
            totalEmbers: TOTAL_EMBERS,
            isComplete: foundEmbers.length === TOTAL_EMBERS,
            resetHunt,
            isClaimed,
            claimReward
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
