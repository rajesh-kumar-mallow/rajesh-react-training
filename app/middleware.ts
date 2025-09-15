import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('token'); // e.g., JWT stored in cookie

    // Protected routes
    const publicPaths = ['/login', '/signup'];
    const isProtected = publicPaths.some((path) =>
        req.nextUrl.pathname.startsWith(path)
    );
    console.log({token, isProtected});
    if (!isProtected && !token) {
        // redirect to login if not authenticated
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}

// Define where middleware runs
export const config = {
    matcher: ['/*'],
};
