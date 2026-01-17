
import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
    const isLoggedIn = !!req.auth
    const isAuthPage = req.nextUrl.pathname.startsWith("/admin/auth")
    const isAdminPage = req.nextUrl.pathname.startsWith("/admin")

    if (isAuthPage) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL("/admin", req.nextUrl))
        }
        return null
    }

    if (isAdminPage && !isLoggedIn) {
        let callbackUrl = req.nextUrl.pathname
        if (req.nextUrl.search) {
            callbackUrl += req.nextUrl.search
        }
        const encodedCallbackUrl = encodeURIComponent(callbackUrl)
        return NextResponse.redirect(
            new URL(`/admin/auth/signin?callbackUrl=${encodedCallbackUrl}`, req.nextUrl)
        )
    }

    return null
})

export const config = {
    matcher: ["/admin/:path*"],
}
