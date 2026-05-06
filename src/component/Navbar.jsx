'use client'
import React from 'react';
import logoImg from '@/assets/images/logo.png'
import Link from 'next/link';
import Image from 'next/image';
import MyLinks from './MyLinks';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';
const Navbar = () => {
  const { data, isPending } = authClient.useSession();
  const users = data?.user;
  
 const handleSignOut=async()=>{
   await authClient.signOut();
   toast.error("LogOut sucessfully!!")
   redirect('/login')
 }

  return (
    <div className='shadow-sm'>

      <div className=" navbar  w-10/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
              <MyLinks href={'/home'} >Home</MyLinks>
              <MyLinks href={'/allBooks'}>All Books</MyLinks>
              <MyLinks href={'/myProfile'}>My Profile</MyLinks>
            </ul>
          </div>
          <Link href={'/home'}></Link>

          <Link href={'/'}><Image
            src={logoImg}
            width={50}
            height={50}
            alt='logo-img'
            className='rounded-full'

          /></Link>
          <Link className='text-2xl font-bold ml-3' href={'/home'}><span className='text-orange-500'>Read</span><span>Hive</span></Link>
            

        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-semibold ">
            <MyLinks href={'/home'} >Home</MyLinks>
            <MyLinks href={'/allBooks'}>All Books</MyLinks>
            <MyLinks href={'/myProfile'}>My Profile</MyLinks>
          </ul>
        </div>

        <div className="navbar-end gap-4">

          {!users &&
            
              <Link href={'/login'}><button  className="btn btn-primary">LogIn</button></Link>
          }

          {
            users &&
            <div className='flex gap-4 items-center'>
              <p>{users?.name}</p>
              

              <Button onClick={handleSignOut} variant='danger'>LogOut</Button>

            </div>

          }


        </div>

      </div>
    </div>
  );
};

export default Navbar;