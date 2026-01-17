
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
    trustHost: true,
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    scope: 'openid email profile https://www.googleapis.com/auth/webmasters.readonly https://www.googleapis.com/auth/business.manage',
                    access_type: 'offline',
                    prompt: 'consent'
                }
            }
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 7 * 24 * 60 * 60, // 7 days
    },
    callbacks: {
        async jwt({ token, account }) {
            // Initial sign in
            if (account) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    expiresAt: account.expires_at ? account.expires_at * 1000 : Date.now() + 3600 * 1000,
                }
            }

            // Return previous token if the access token has not expired yet
            if (Date.now() < (token.expiresAt as number)) {
                return token
            }

            // Access token has expired, try to update it
            try {
                if (!token.refreshToken) throw new Error("No refresh token available")

                const response = await fetch("https://oauth2.googleapis.com/token", {
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams({
                        client_id: process.env.GOOGLE_CLIENT_ID!,
                        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
                        grant_type: "refresh_token",
                        refresh_token: token.refreshToken as string,
                    }),
                    method: "POST",
                })

                const tokens = await response.json()

                if (!response.ok) throw tokens

                return {
                    ...token,
                    accessToken: tokens.access_token,
                    expiresAt: Date.now() + tokens.expires_in * 1000,
                    // Fall back to old refresh token if new one is not returned
                    refreshToken: tokens.refresh_token ?? token.refreshToken,
                }
            } catch (error) {
                console.error("Error refreshing access token", error)
                // The error property will be used client-side to handle the refresh token error
                return { ...token, error: "RefreshAccessTokenError" }
            }
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken as string
            session.error = token.error as string | undefined
            return session
        },
    },
    pages: {
        signIn: "/admin/auth/signin",
    },
})
