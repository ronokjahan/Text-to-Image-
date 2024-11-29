import React, { useState } from 'react';
import { assets } from '../../../public/assets/assets';
import { motion } from "motion/react"
const Result = () => {
    const [image, setimage]=useState(assets.sample_img_1)
    const[isloaded ,setisloaded]=useState(true)
    console.log(isloaded);
    const [loaded,setloaded]=useState(true)
    return (
    <motion.form 
    initial={{opacity: 0.2 ,y:100 }}
        transition={{duration: 1}}
        whileInView={{opacity: 1,y:0 }}
        viewport={{once:true}}
    
    className='flex flex-col items-center justify-center min-h-[90vh]'>
        <div>
        <div className='relative'>
                <img src={image} width={350} alt="" />
                <span className={`absolute bottom-0 left-0 bg-blue-500 h-1${loaded?'w-full transition-all duration-[10s]':'w-0'}`} ></span>
            </div>
            <p className={!loaded ?'hidden':''}>Loading......</p>
            {
                !isloaded ?
            
            <div className='flex rounded-full bg-neutral-500 max-w-xl w-full mt-10 text-white'>
                <input type="text" placeholder='Describe what you want to generate'  className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 w-22'/>
                <button type='submit' className='px-10 rounded-full bg-zinc-900 sm:px-16 py-3 text-white '>Generate</button>
            </div>:

<div className='flex gap-2 mt-10 items-center justify-center'>
<p onClick={()=>setisloaded(false)}  className='border bg-white px-6 py-2 rounded-full border-black cursor-pointer'>Genarother Another</p>
<a className=' border bg-black text-white px-6 text-sm py-2 rounded-full cursor-pointer' download href={image}>Downlode</a>
</div>
            
        }
           
        </div>
     
    </motion.form>
    );
};

export default Result;