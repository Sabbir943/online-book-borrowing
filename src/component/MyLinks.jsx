'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLinks = ({href,children}) => {
    const pathName=usePathname();
    const isActive=pathName===href;
    return (
        <div>
            
            <Link  href={href} className={`${isActive?"text-white border bg-blue-500 p-2 rounded-2xl":""} text-lg`}>{children}</Link>
        </div>
    );
};

export default MyLinks;