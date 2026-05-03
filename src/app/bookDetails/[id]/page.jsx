import { getBooks } from '@/lib/data';
import Image from 'next/image';

import React from 'react';

const BookDetails = async({params}) => {
    const {id}=await params;
    const bookData=await getBooks();
    const expectedBook=bookData.find(book=>book.id=id);
    console.log(expectedBook);
    return (
        <div>
          <div className="card bg-base-100 w-96 shadow-sm mx-auto">
  <figure className="px-10 pt-10">
    <Image
    src={expectedBook.image_url}
    width={300}
    height={300}
    alt='books'
    className='h-[50vh]'
    />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{expectedBook.title}</h2>
    <p>{expectedBook.description}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;