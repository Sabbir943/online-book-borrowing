import React from 'react';
import DisCountImg from '@/assets/images/discount.jpg'
import Image from 'next/image';
import { Button, Card } from '@heroui/react';
const Discount = () => {
    return (
        <div className=''>
        <h1 className='w-8/12 mx-auto my-10 text-2xl md:text-4xl text-muted font-blod text-center'>Book offer:</h1>
        <Card className='w-6/12 mx-auto border border-gray-300 shadow'>
            
            <div className='flex flex-col md:flex-row justify-between items-center gap-6 duration-100 animate-pulse '>
                <div>
                
             <Image
    src={DisCountImg}
    height={300}
    width={300}
    className='w-[40vh] rounded-2xl' 
    alt='Discount'
    />
            </div>
            <div className='text-center'>
            <h1 className='text-3xl md:text-5xl font-bold'>50% discount <br></br> Order Now</h1>
            <button className='btn btn-error w-full my-5' >Order Now</button>
            </div>

    
              
            </div>
            
        </Card>
        </div>
    );
};

export default Discount;