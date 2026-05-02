import { getBooks } from '@/lib/data';
import { Button } from '@heroui/react';
import React from 'react';
import Marquee from "react-fast-marquee";
const MarqueePage =async () => {
    const marqueeData=await getBooks();
    console.log(marqueeData)
    return (
        <div>
            <div className='flex items-center my-10 bg-gray-300 p-5 rounded-2xl text-red-500 text-xl'>
                <Button variant='primary'>Live</Button>
                <Marquee pauseOnHover speed={100}>

                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

        </div>
    );
};

export default MarqueePage;