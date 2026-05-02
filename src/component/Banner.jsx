import { Button } from '@heroui/react';
import Link from 'next/link';


const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co.com/zTkNxXHD/HD-wallpaper-books-library-shelves-lighting-beautiful-library-book.jpg')] h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl ">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-2xl md:text-5xl font-bold mb-4 max-w-2xl">
           Read smarter, explore deeper, and enjoy books without limits. 
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Browse, borrow, and begin your next reading journey today.
          </p>

          <div className="text-center">
            <Link href="#">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500 px-10 py-5 text-xl ">
               Browse Now
              </Button>
            </Link>

            
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;