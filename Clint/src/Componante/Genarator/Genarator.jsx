import { useContext } from "react";
import { assets } from "../../../public/assets/assets";
import { motion } from "motion/react"
import { Appcontext } from "../Context/Appcontext";
import { useNavigate } from "react-router-dom";

const Genarator = () => {
    const{user,setshowlogin}=useContext(Appcontext)
    const navigator=useNavigate()
    const clickhandel=()=>{
       
        if (user) {
            navigator('/result')
        } else {
            setshowlogin(true)
        }
    }


    return (
        <motion.div  initial={{opacity: 0.2 ,y:100 }}
        transition={{duration: 1}}
        whileInView={{opacity: 1,y:0 }}
        viewport={{once:true}} className="text-center items-center">
            <h1 className="text-3xl md:text-4xl font-semibold md:py-16">See the magic. Try now</h1>
            <button onClick={clickhandel} className="inline-flex bg-black py-3 px-14 mb-5 text-white rounded-full gap-2 hover:scale-105 transition-all duration-300 m-auto">
            Generate Images <img src={assets.star_group} className="h-6" alt="" />
            </button>
        </motion.div>
    );
};

export default Genarator;