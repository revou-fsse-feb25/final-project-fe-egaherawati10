import withAuth from "next-auth/middleware";
import { NextRequest } from "next/server";

export default withAuth({
    callbacks: {
        authorized: ({ token, req }: { token: any; req: NextRequest }) => {
            if (req.nextUrl.pathname.startsWith("/admin")) return token?.role === 'admin';
            if (req.nextUrl.pathname.startsWith("/doctor")) return token?.role === 'doctor';
            if (req.nextUrl.pathname.startsWith("/patient")) return token?.role === 'patient';

            return !!token;
        },
    },
});

export const config = {
    matcher: [
        '/admin/:path*',
        '/doctor/:path*',
        '/patient/:path*',
    ],
};