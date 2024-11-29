import { useContext, useEffect, useState } from "react";
import { assets } from "../../../public/assets/assets";
import { Appcontext } from "../Context/Appcontext";
import { motion } from "motion/react"

const Login = () => {
    const[steste,setsteste]=useState('Login')
    const{setshowlogin}=useContext(Appcontext)
    useEffect(()=>{
        document.body.style.overflow='hidden'

        return()=>{
            document.body.style.overflow='unset'
        }


    },[])
   

    return (
        <div 
        
       
        className=" fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-10">
            <motion.form  initial={{opacity: 0.2 ,y:50 }}
        transition={{duration: 0.3}}
        whileInView={{opacity: 1,y:0 }}
        viewport={{once:true}}  className="bg-white relative p-10 text-slate-500 rounded-xl">

                <h1 className="text-center mb-1 text-gray-700 font-semibold text-2xl">{steste}</h1>
                <p>Welcome back! Please sign in to continue
                </p>
              {
                steste !=='Login' &&   <div className="border px-6 py-2 flex items-center gap-2 mt-4  rounded-full">
                <img width={20} src={assets.profile_icon} alt="" />
                <input type="text" className="outline-none text-sm" name="Enter Your name" id="" placeholder="Full Name" required />
            </div>
              }
                <div className="border px-6 py-2 flex items-center gap-2 mt-4  rounded-full">
                    <img src={assets.email_icon} alt="" />
                    <input type="email" className="outline-none text-sm" name="Enter Your name" id="" placeholder="Email" required />
                </div>
                <div className="border px-6 py-2 flex items-center gap-2 mt-4  rounded-full">
                    <img src={assets.email_icon} alt="" />
                    <input type="password" className="outline-none text-sm" name="Enter Your name" id="" placeholder="Password" required />
                </div>

              
                {
                    steste !=='Sing Up' &&<p className="text-sm text-blue-600 cursor-pointer mt-6">Forgot password?</p>
                }
                <button   className="w-full py-2 text-white bg-blue-700 rounded-full mt-2">{steste ==='Login'?'Login':'Create account'}</button>
                {
                    steste ==='Login'? <p className="text-center mt-5 ">Don’t have an account? <span className="text-blue-600 font-semibold  cursor-pointer" onClick={()=>setsteste('Sing Up')}  >Sign up</span></p>    :
                    <p className="text-center mt-5">Already have an account? <span className="text-blue-600 font-semibold cursor-pointer "   onClick={()=>setsteste('Login')} >Login</span></p>

                }
                
                
               
                <img onClick={()=>setshowlogin(false)} className=" absolute right-5 top-5 cursor-pointer" src={assets.cross_icon} alt="" />

            </motion.form>
            
        </div>
    );
};

export default Login;