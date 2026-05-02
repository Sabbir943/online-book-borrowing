import { Card } from '@heroui/react';
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { IoBookSharp } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
const GetStrated = () => {
    return (
        <div className='w-10/12 mx-auto '>
            <h1 className='text-center text-3xl text-muted font-bold mt-10 mb-5'>Get Started in 3 Steps </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
                <Card className='shadow border border-gray-200'>
                    <div className='text-center '>
                        <FaUser className='text-7xl mx-auto text-blue-500' />
                        <h1 className='text-3xl'>Create Account</h1>
                        <p className='text-muted'>Sign up for free in seconds. No credit card required to get started.</p>

                    </div>
                </Card>
                 <Card className='shadow border border-gray-200'>
                    <div className='text-center '>
                        <IoBookSharp className='text-7xl mx-auto text-green-400' />
                        <h1 className='text-3xl'>Choose Products</h1>
                        <p className='text-muted'>Browse our catalog and select the toolsthat fit your needs.</p>

                    </div>
                </Card>
                <Card className='shadow border border-gray-200'>
                    <div className='text-center '>
                        <MdOutlinePayment className='text-7xl mx-auto' />
                        <h1 className='text-3xl'>Make Payment</h1>
                        <p className='text-muted'>Sign up for free in seconds. No credit card required to get started.</p>

                    </div>
                </Card>
            </div>
        </div>
    );
};

export default GetStrated;