import { assets, testimonialsData } from "../../../public/assets/assets";
import { motion } from "motion/react"

const Restemonial = () => {
    return (
        <motion.div   initial={{opacity: 0.2 ,y:100 }}
        transition={{duration: 1}}
        whileInView={{opacity: 1,y:0 }}
        viewport={{once:true}} className="flex flex-col items-center justify-center my-20 p-6">
            <h1 className="text-3xl md:text-4xl">Customer testimonials</h1>
            <p className="text-gray-500">What Our Users Are Saying</p>
            <div className=" flex flex-wrap items-center gap-5 mt-20 " >
                {testimonialsData.map((itemss,index)=>(
                    <div  className="border rounded-lg p-12 shadow-md  w-80 m-auto
                    
            bg-white/20
                    
                    hover:scale-105 transition-all duration-300 hover:bg-slate-800/55 hover:text-white  "  key={index}>
                        <div className="flex flex-col items-center">
                        <img className="w-14 rounded-full items-center" src={itemss.image} alt="" />
                        <h2 className="text-2xl md:3xl ">{itemss.name}</h2>
                       <p className="text-gray-500 mb-4">{itemss.role}</p>
                       <div className="flex mb-2 ">
                        {Array(itemss.stars).fill().map((star,index)=>(
                            <img src={assets.rating_star} alt="" key={index} />




                        ))}
                       </div>
                       <p>{itemss.text}</p>

                        </div>


                    </div>



                ))}
            </div>
            
        </motion.div>
    );
};

export default Restemonial;