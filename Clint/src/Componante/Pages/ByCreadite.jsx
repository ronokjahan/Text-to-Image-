import { useContext } from "react";
import { assets, plans } from "../../../public/assets/assets";
import { Appcontext } from "../Context/Appcontext";
import { motion } from "motion/react"

const ByCreadite = () => {
    const {user}=useContext(Appcontext)
    console.log(user);
    return (
        <motion.div initial={{opacity: 0.2 ,y:100 }}
        transition={{duration: 1}}
        whileInView={{opacity: 1,y:0 }}
        viewport={{once:true}} className=" text-center pt-14 mb-10 min-h-[80vh]">
      <button className="px-10 py-2 rounded-full border border-gray-400 mb-6">Our Plan</button>
      <p className="text-3xl font-semibold sm:mb-10">Choose the plan</p>
      <div className="flex justify-center gap-4  text-left ">
        {
            plans.map((item,index)=>(
                <div className="  py-12 px-8 shadow-md border rounded-lg text-gray-600 hover:scale-105 transition-all duration-300" key={index}>
                    <img width={40} src={assets.logo_icon} alt="" />
                    <p className="mt-3 mb-1 font-semibold">{item.id}</p>
                    
                    <p className="mt-6">{item.desc}</p>
                    <p className="mt-6" ><span className="text-3xl font-medium">${item.price}</span>/{item.credits}</p>
                    <button className="w-full bg mt-6 bg-gray-800 text-white rounded-lg py-2 min-w-52">{user?'Purches':'Get started'} </button>
                





                </div>



            ))
        }
      </div>
        </motion.div>
    );
};

export default ByCreadite;