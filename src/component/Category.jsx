import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Category =async () => {

    const res=await fetch('https://online-book-borrowing.vercel.app/category.json');
    const category=await res.json();
    
    return (
        <div className='w-10/12 mx-auto mt-4 '>
            {
                category.map((books,idx)=><Link href={`allBooks?category=${books.category.toLowerCase()}`} key={idx}><Button className='ml-3' cl variant='danger-soft' >{books.category}</Button></Link> )
            } 
        </div>
    );
};

export default Category;