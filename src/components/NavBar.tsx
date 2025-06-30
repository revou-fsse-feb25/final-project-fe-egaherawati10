'use client';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href}
        className={`text-white hover:text-green-900 transition-colors
        ${isActive ? 'underline' : ''            
        }`}
        >
            {children}
        </Link>
    );
}

export default function NavBar() {
    const { data: session } = useSession();
    const role = session?.user?.role as 'admin' | 'doctor' | 'patient' | undefined;
    const roleDashboard = role ? `/dashboard/${role}` : '/login';
    const displayName = 
    session?.user?.name?.split(' ')[0] ?? (role ? 'Profile' : 'Guest');

    return (
        <nav className="flex items-center justify-between p-4 bg-green-950">
            <Link href="/" className="text-xl font-bold text-white">
            Her Hospital
            </Link>

            <div>
                {role && (
                    <NavLink href={roleDashboard}>
                        {displayName}
                    </NavLink>
                )}

                {session ? (
                    <button
                    onClick={() => signOut({ callbackUrl: 'login' })}
                    className="text-white hover:text-green-900 transition-colors">
                        Logout
                    </button>
                ) : (
                <NavLink href="/login">
                    Login
                </NavLink>)}
            </div>
        </nav>
    );
}

// 'use client';
// import { Session } from "next-auth";
// import { signOut } from "next-auth/react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// interface NavBarProps {
//     session: Session | null;
// }

// interface NavLinkProps {
//     href: string;
//     children: React.ReactNode;
// }

// function NavLink({ href, children }: NavLinkProps) {
//     const pathname = usePathname();
//     const isActive = pathname === href;

//     return (
//         <Link
//             href={href}
//             className={`text-white hover:text-gray-400 transition-colors ${
//         isActive ? "text-gray-400" : ""
//         }`}
//         >
//             {children}
//         </Link>
//     )
// }

// export function NavBar({ session }:NavBarProps) {
//     const isAdmin = session?.user?.role === "admin";
//     const displayName = session?.user?.name?.split(" ")[0] || "Profile";
//     return (
//         <nav>
//             <div>

//                 <Link href="/">
//                 <span>
//                     Her Hospital
//                 </span>
//                 </Link>

//                 {/* <div>
//                     <NavLink href="/">
//                         Home
//                     </NavLink>
//                 </div> */}

//                 <NavLink href={isAdmin ? "/dashboard/admin" : "/dashboard/doctor"}>
//                     {displayName}
//                 </NavLink>

//                 <button
//                 onClick={() => signOut({ callbackUrl: "/login" })}>
//                     Logout
//                 </button>
//             </div>
//         </nav>
//     )
// }