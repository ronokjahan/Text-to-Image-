import React, { useContext } from 'react';
import { assets } from '../../../public/assets/assets';
import { motion } from "motion/react"
import { Appcontext } from '../Context/Appcontext';
import { useNavigate } from 'react-router-dom';


const Heder = () => {
  const{user,setshowlogin}=useContext(Appcontext)
  const navigator=useNavigate()
  const clickhandel=()=>{
    if (user) {
      navigator('/result')
    }
else{
  setshowlogin(true)
}
  }
    return (
        <motion.div className='flex flex-col items-center justify-center my-20  '
        initial={{opacity: 0.2 ,y:-20 }}
        transition={{duration: 2}}
        whileInView={{opacity: 1,y:0 }}
        viewport={{once:true}}
    
        
        
        >
            <motion.div className='text-stone-500 px-6 py-1  inline-flex text-center border rounded-full border-neutral-500 gap-2'
            initial={{opacity: 0.2 ,y:-20 }}
            transition={{delay:0.2,  duration: 0.8}}
          animate={{opacity:1 ,y:0}}
                       
        
            
            >
                <p>Best Text to image Genartaor</p>
                <img  src={assets.star_icon} alt="" />
            </motion.div>
            <motion.h1 className='text-4xl mt-10 max-w-[300px] sm:text-7xl mx-auto text-center sm:max-w-[590px]'
            initial={{opacity: 0 }}
            transition={{delay:0.4,  duration: 2}}
          animate={{opacity:1}}
                       
            
            
            >Turn text to <span className='text-blue-600'>image</span>, in seconds.</motion.h1>
            <motion.p className='mx-auto text-center text-xl text-black  mt-5 max-w-xl '
            
            initial={{opacity: 0,y:20 }}
            transition={{delay:0.6,  duration: 0.8}}
          animate={{opacity:1,y:0}}
                       
            
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum accusantium enim aliquam delectus tempore quam perferendis veritatis .</motion.p>
            <motion.button  onClick={clickhandel}   className='flex items-center border bg-black text-white px-16 py-2.5 rounded-full mt-5 gap-2'
            
            whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             initial={{opacity: 0 }}
             animate={{opacity:1}}
             transition={{default:  {duration: 2},opacity:{delay:0.8,duration:1}}}
            >
            Generate Images <img className='h-6' src={assets.star_group} alt="" /> 
            </motion.button>



            <motion.div className=' flex flex-wrap justify-center gap-2 mt-5 '
            
            initial={{opacity: 0 }}
            transition={{delay:1,  duration: 1}}
          animate={{opacity:1}}
            
            >
                {
                    Array(6).fill('').map((item,index)=>(
                    <motion.img className=' rounded hover:scale-105  transition-all duration-300 cursor-pointer max-sm:w-10'
                    whileHover={{ scale: 1.05 ,duration:0.1}}
                    
                    
                    src={index %2===0?assets.sample_img_2:assets.sample_img_1} alt="" key= {index} width={70} />


                    ))
                }
            </motion.div>
            <motion.p className='mt-5 text-blue-300'
            
            initial={{opacity: 0 }}
            transition={{delay:1.2,  duration: 0.8}}
          animate={{opacity:1}}
            
            
            >Generated images from imagify</motion.p>
        </motion.div>
    );
};

export default Heder;