"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function AdminLogin() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === "charcoalnchill@gmail.com" && password === "JustCh1!!@2025") {
            sessionStorage.setItem("admin_authenticated", "true");
            sessionStorage.setItem("admin_email", email);
            router.push("/admin/seo");
        } else {
            setError("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black/90">
            <form onSubmit={handleLogin} className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h2>
                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                <div className="space-y-4">
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <Button type="submit" className="w-full mt-6 bg-brand-red hover:bg-brand-red-dark text-white">
                    Login
                </Button>
            </form>
        </div>
    );
}
