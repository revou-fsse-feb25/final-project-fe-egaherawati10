import { mockUsers } from "@/lib/mockUsers";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    session: { strategy: 'jwt' },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                if (!credentials) return null;
                const user = mockUsers.find(
                    u => u.email === credentials.email && u.password === credentials.password
                );
                if (!user) return null;
                return { id: String(user.id), name: user.name, email: user.email, role: user.role };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.role = (user as any).role;
            return token;
        },
        async session({ session, token }) {
            if (token && session.user) (session.user as any).role = token.role;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };