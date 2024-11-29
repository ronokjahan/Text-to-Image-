
import Home from "./Componante/Pages/Home";
import ByCreadite from "./Componante/Pages/ByCreadite";
import Result from "./Componante/Pages/Result";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Componante/Navbar/Navbar";
import Login from "./Componante/Login/Login";
import { useContext, useState } from "react";
import { Appcontext } from "./Componante/Context/Appcontext";


const App = () => {
  const{showlogin}=useContext(Appcontext)

  return (
    <div className="px-4 sm:px-10 lg:px-28">
      <Navbar  ></Navbar>
      {showlogin && <Login/>}
      {/* setshowlogin(false) */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/result" element={<Result></Result>}></Route>
        <Route path="/buy" element={<ByCreadite></ByCreadite>}></Route>
        
      </Routes>


    </div>
  );
};

export default App;