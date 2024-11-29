import React from 'react';
import { stepsData } from '../../../public/assets/assets';
import { motion } from "motion/react"


const Step = () => {
    return (
        <motion.div className='flex flex-col items-center justify-center 
        
          
        '
        initial={{opacity: 0.2 ,y:100 }}
        transition={{duration: 1}}
        whileInView={{opacity: 1,y:0 }}
        viewport={{once:true}}
        
        
        
        >
            <h1 className=' text-3xl sm:text-4xl'>How it works</h1>
            <p className='text-lg mt-4'>Transform Words Into Stunning Images</p>
           
            <div className='mt-8 '>
            {
                stepsData.map((item,index)=>(
                    <div key={index} className='flex items-center gap-3 p-2 py-4 border shadow-md cursor-pointer hover:scale-[1.02] transition-all duration-300 bg-white/20  rounded-lg '>
                        <img src={item.icon} alt="" />
                        <div>
                            <h2>Describe Your Vision</h2>
                            <p>Type a phrase, sentence, or paragraph that describes the image you want to create.</p>
                        </div>


                    </div>



                ))
            }
            </div>
        </motion.div>
    );
};

export default Step;