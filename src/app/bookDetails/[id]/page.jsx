
import { getBooks } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';


import React from 'react';





const BookDetails = async({params}) => {
    const {id}=await params;
    const bookData=await getBooks();
    const expectedBook=bookData.find(book=>book.id==id);
    
    
    return (
 <div className='flex flex-col md:flex-row gap-10 items-center my-10 w-10/12 mx-auto'>
      <div >
         <Image
       src={expectedBook.image_url}
      width={300}
       height={300}
      alt='books'
      className="max-w-sm rounded-lg shadow-2xl"    />
      </div>

      <div className='text-center'>
      <h1 className="text-5xl font-bold">{expectedBook.title}</h1>
      <p className='text-muted'>{expectedBook.author}</p>
      <p className="py-2 text-xl text-muted"> {expectedBook.description}</p>
      <div className='font-bold text-blue-500 text-xl '>
       
          <p>Price: ${expectedBook.price}</p>
           <p> Quantity: {expectedBook.available_quantity}</p>

        
        
          
          
      </div>
      <Link href={'/home'}><button  className="btn btn-primary my-4">Borrow This Book</button></Link>
       
      </div>
 </div>

    );
};

export default BookDetails;