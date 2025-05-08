import { NextRequest, NextResponse } from "next/server";
import { EnumTokens } from "./services/auth-token.service";
import { DASHBOARD_PAGES } from "./config/pages-url.config";

export async function middleware(
    request: NextRequest,
    response: NextResponse
) {
    const { url, cookies } = request

    const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

    const isDashboardPage = url.includes('/i')
    const isAuthPage = url.includes('/auth')

    if (isAuthPage && refreshToken) {
        return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))
    }

    if (isAuthPage) {
        return NextResponse.next()
    }

    if (!refreshToken) {
        return NextResponse.redirect(new URL('/auth', url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/i/:path*', '/auth/:path']
}