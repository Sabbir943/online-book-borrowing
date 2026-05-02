import { getBooks } from '@/lib/data';
import React from 'react';
import BookCard from './BookCard';

const FeatureBook =async () => {
    const books= await getBooks();
    const topBooks=books.slice(0,4);
    
    return (
        <div className='w-8/12 mx-auto '>
            <h1 className='text-2xl font-bold text-muted my-5'>Featured Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

            {
                topBooks.map((book,index)=><BookCard book={book} key={index}/>)
            }
            </div>
        </div>
    );
};

export default FeatureBook;