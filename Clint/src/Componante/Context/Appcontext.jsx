import { createContext, useState } from "react"

export  const Appcontext=createContext()
const Appcontectprovider=(props)=>{
    
const[user,setuser]=useState(false)
const [showlogin,setshowlogin]=useState(false)

    const value={
        user,setuser,setshowlogin,showlogin
    }

return(
    <Appcontext.Provider value={value}>
{props.children}

    </Appcontext.Provider>
)
}

export default Appcontectprovider