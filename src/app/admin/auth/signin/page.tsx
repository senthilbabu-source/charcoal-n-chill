
import { signIn } from "@/lib/auth"

interface SignInPageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function SignInPage({ searchParams }: SignInPageProps) {
    const resolvedParams = await searchParams;
    const callbackUrl = typeof resolvedParams.callbackUrl === 'string' ? resolvedParams.callbackUrl : '/admin/dashboard';
    return (
        <div className="flex h-screen items-center justify-center bg-black text-white">
            <div className="w-full max-w-md space-y-8 rounded-lg border border-gold/20 bg-zinc-900 p-10 shadow-xl backdrop-blur-sm">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gold">
                        Admin Access
                    </h2>
                    <p className="mt-2 text-sm text-gray-400">
                        Sign in to manage Charcoal & Chill
                    </p>
                </div>
                <form
                    action={async () => {
                        "use server"
                        await signIn("google", {
                            redirectTo: callbackUrl,
                        })
                    }}
                    className="mt-8 space-y-6"
                >
                    <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-gold px-4 py-3 text-sm font-medium text-black transition-all hover:bg-gold-light focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                                className="h-5 w-5 text-black group-hover:text-gray-900"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                            </svg>
                        </span>
                        Sign in with Google
                    </button>
                </form>
            </div>
        </div>
    )
}
