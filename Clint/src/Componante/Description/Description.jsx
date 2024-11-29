import React from 'react';
import { assets } from '../../../public/assets/assets';
import { motion } from "motion/react"
const Description = () => {
    return (
        <motion.div className='flex flex-col items-center mt-12 my-24 md:mx-28 p-6 '
        
        initial={{opacity: 0.2 ,y:100 }}
        transition={{duration: 1}}
        whileInView={{opacity: 1,y:0 }}
        viewport={{once:true}}
        
        
        
        >
            <h1 className='text-3xl md:text-4xl'>Create AI Images</h1>
            <p className='text-gray-500 font-semibold mt-3'>Turn your imagination into visuals</p>
            <div className='flex gap-4  items-center md:gap-14 md:flex-row mt-8'>
                <img src={assets.sample_img_1} className='w-96 xl:w-96  rounded-lg' alt="" />
                <div>
                    <h2 className='text-2xl sm:text-3xl  max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
                    <p className='text-gray-600 mb-4'>
                    Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.
                    </p>

                    <p className='text-gray-600 mb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vitae magnam, voluptatem dolore repellat officia incidunt minima tempora quo sunt alias atque amet repellendus, dolorem sapiente qui iusto deserunt saepe.

                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Description;