
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({book}) => {
   
    return (
        
 <Card className="card  shadow-sm border border-gray-200">
  <figure className=''>
    <Image className='rounded-2xl h-[50vh]'
    src={book.image_url}
    
   width={200}
   height={50}
    alt={book.title}
    
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {book.title}
      <div className="badge badge-secondary">{book.category}</div>
    </h2>
    <h1 className='text-muted'>Written By: {book.author}</h1>
    <p className='line-clamp-2'>{book.description}</p>
    <Link href={`bookDetails/${book.id}`} ><Button className="w-full my-3" variant='primary'>View Details</Button></Link>
    
  </div>
</Card>
        
       
    );
};

export default BookCard;