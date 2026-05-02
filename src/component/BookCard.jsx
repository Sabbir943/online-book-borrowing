
import Image from 'next/image';
import React from 'react';

const BookCard = ({book}) => {
   
    return (
        
 <div className="card bg-base-100 w-96 shadow-sm border border-gray-200">
  <figure className='relative w-full aspect-square'>
    <Image className='rounded-2xl'
    src={book.image_url}
    
   
    alt={book.title}
    fill
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {book.title}
      <div className="badge badge-secondary">{book.category}</div>
    </h2>
    <h1 className='text-muted'>Written By: {book.author}</h1>
    <p className='line-clamp-2'>{book.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        
       
    );
};

export default BookCard;