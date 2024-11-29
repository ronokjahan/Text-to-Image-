import React, {  useContext, useState } from 'react';
import { assets } from '../../../public/assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { Appcontext } from '../Context/Appcontext';


const Navbar = () => {
   const {user,setshowlogin}=useContext(Appcontext)
    const navigator=useNavigate()
    return (
        <div className='  flex justify-between mt-3 items-center' >
            <Link to='/'><img src={assets.logo} alt="" className='w-28 md:32 lg:40' /></Link>
            {
                user?
                
                <div className='flex items-center gap-2 px-4  sm:gap-3'>
                    <button onClick={()=>navigator('/buy')} className='flex gap-3 items-center bg-blue-100 px-4 sm:px-4 py-1.5 sm:py
                    -3 rounded-full hover:scale-105 transition-all duration-700  '>
                        <img className='w-5' src={assets.credit_star} alt="" />
                        <p className='text-xs sm:text-sm text-gray-600'>Credite left:50</p>
                    </button>
                    <p>Hi Ronok Jahan</p>
                    <div className='relative group ' >
                       <img src={assets.profile_icon} className=' w-10 drop-shadow '  alt="" />
                       <div className='absolute group-hover:block right-0 top-0 z-10 hidden text-black rounded pt-12'>
                        <u className='list-none rounded-md border text-sm m-0 p2 bg-gray-100'>
                            <li className='py-2 px-2 cursor-pointer pr-10 bg-white'>Logout</li>
                        </u>

                       </div>
                    </div>



                </div>:
                
                <div className=' flex gap-8 items-center sm:gap-5'>
                <h3 onClick={()=>navigator('/buy')} >pricnce</h3>
                <button onClick={()=>setshowlogin(true)} className='px-9 py-2 bg-slate-950 text-white   sm:px-10 rounded-full text-sm'  >Login</button>
            </div>
            }
            

        </div>
    );
};

export default Navbar;
