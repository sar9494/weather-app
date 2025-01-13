import { useState } from "react";
import sunImg from "./icon.png"
import moonImg from "./Subtract.png"

import logoR from "./VectorR.png"
import logoL from "./VectorL.png"

function App() {
  return (
    <>
      <div className=" bg-gray-100 w-screen h-screen  rounded-3xl relative flex justify-center items-center">
        <div className="w-52 h-52 bg-gray-900 relative flex gap-3 justify-center items-center">
          <div className="bg-orange-900 w-1/2 h-1/2 absolute rounded-full"></div>
          <img src={logoR} alt="" className="w-1/3 h-1/2"/>
          <img src={logoL} alt="" className="w-1/3 h-1/2"/>
        </div>
      {/* <div className="bg-gray-100 w-full h-full rounded-l-3xl flex justify-center items-center">
        <div className="w-1/2 h-4/6 bg-orange-700 rounded-3xl">

        </div>
        </div>
        <div className=" w-full h-full rounded-r-3xl rounded-bl-3xl flex justify-center items-center relative">
        
        <div className="w-1/2 h-4/6 bg-teal-700 rounded-3xl absolute bg-orange-100">
        </div>
        </div> */}

        
      </div>
    </>
  );
}

export default App;
