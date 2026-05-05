import { getBooks } from '@/lib/data';
import Image from 'next/image';

import React from 'react';
import Link from 'next/link';

const BookDetails = async({params}) => {
    const {id}=await params;
    const bookData=await getBooks();
    const expectedBook=bookData.find(book=>book.id==id);
    console.log(expectedBook)
    
    return (
       <div className="hero bg-base-200 min-h-screen w-10/12 mx-auto my-10 rounded-2xl border border-gray-300 p-5">
  <div className="hero-content flex-col lg:flex-row">
    <Image
      src={expectedBook.image_url}
      width={300}
      height={300}
      alt='books'
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{expectedBook.title}</h1>
      <p className="py-2 text-xl text-muted">
       {expectedBook.description}
      </p>
      
      <div className='flex items-center gap-7 text-2xl font-bold'>
             <p >Price: ${expectedBook.price}</p>
      <p className=''> Quantity: {expectedBook.available_quantity}</p>
      
      </div>
     
      <div>

      
      <p></p>
      </div>
      <Link href='/allBooks'><button className="btn btn-primary my-4">Go to Book page</button></Link>
      
    </div>
  </div>
</div>
    );
};

export default BookDetails;