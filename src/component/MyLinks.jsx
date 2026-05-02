'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLinks = ({href,children}) => {
    const pathName=usePathname();
    const isActive=pathName===href;
    return (
        <div>
            <Link  href={href} className={`${isActive?"text-blue-500 border-b border-b-blue-500":""} text-white text-lg`}>{children}</Link>
        </div>
    );
};

export default MyLinks;