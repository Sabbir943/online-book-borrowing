
import { CircleFill } from '@gravity-ui/icons';
import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({book}) => {
   
    return (
        
 <Card className="card  shadow-sm border border-gray-200 mx-10/12 mx-auto">
  <div>
    <Image
   src={book.image_url}
    className='rounded-2xl h-[30vh] w-[30vh] mx-auto relative'
   width={200}
   height={50}
    alt={book.title}
  />
  <div>
    <Chip className='absolute top-5 right-20' color="danger" variant="primary">
          <CircleFill width={6} />
          <Chip.Label>{book.category}</Chip.Label>
        </Chip>
    
    <div className='space-y-2 mt-2'>

    <h1 className='text-xl font-bold text-center' >{book.title}</h1>
    <p className='text-muted text-center'> Written by:{book.author}</p>
    </div>
    <Separator />
    <p className='line-clamp-2 my-4'>{book.description}</p>
    <Link href={`/bookDetails/${book.id}`} ><Button className="w-full my-3" variant='primary'>View Details</Button></Link>

   </div>
  </div>
  
  {/* <figure className=''>
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
    
    
  </div> */}
</Card>
        
       
    );
};

export default BookCard;