import { MenuProps } from "@/components/cards/MenuCards";

export const menuItem: MenuProps[] = [
    { 
        id : 1,
        name: 'Dashboard', 
        path: '/dashboard/admin' 
    },
    { 
        id : 2,
        name: 'Polyclinic', 
        path: '/polyclinic' 
    },
    { 
        id : 3,
        name: 'Services', 
        path: '/services' 
    },
    { 
        id : 4,
        name: 'Pharmacy', 
        path: '/pharmacy'
    },
    {
        id : 5,
        name: 'Billing',
        path: '/billing'
    }
]