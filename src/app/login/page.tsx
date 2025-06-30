'use client'

import LoadingSpinner from "@/components/LoadingSpinner";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { set } from "react-hook-form";

export default function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const res = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });

        if (res?.error) {
            setError('Invalid email or password');
            setLoading(false);
        } else {
            router.push('/');
        }
    };

    return (
        <main className="flex items-center justify-center min-h-screen p-8">
        <form
        onSubmit={handleSubmit} 
        className="w-full max-w-sm space-y-4">

            <h1 className="text-2xl font-bold text-center">
                Login
            </h1>

            <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="w-full border p-2 rounded"
            />

            <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            className="w-full border p-2 rounded"
            />

            <div className="flex justify-between gap-2">
            <button
                type="reset"
                onClick={() => {
                setEmail("");
                setPassword("");
                setError("");
            }}
            className="bg-white text-green-950 hover:bg-green-800 px-4 py-2 rounded-md">
                Reset
            </button>

            <button
            type="submit"
            disabled={loading}
            className="bg-white text-green-950 hover:bg-green-800 px-4 py-2 rounded-md"
            >
                {loading ? <LoadingSpinner /> : "Login"}
            </button>
            </div>

            {error && <p className="text-red-900">{error}</p>}

            {/* <p>
                <a href="/forgot-password">Forgot password?</a>
            </p> */}

            <p>
                Don't have an account? <a href="/register" className="text-green-950 underline">Register</a>
            </p>

        </form>
        </main>
    )
}