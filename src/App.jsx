import { useState , useEffect } from "react";
import sunImg from "./icon.png";
import moonImg from "./moon.png";
import  CountriesData  from "./data.jsx";
import logoR from "./VectorR.png";
import logoL from "./VectorL.png";
import moment from "moment"
import Location from "./Icons/Location.jsx";
import Home from "./Icons/Home.jsx";
import Heart from "./Icons/Heart.jsx";
import User from "./Icons/User.jsx";
import Ball from "./Icons/Ball.jsx";
import Search from "./Icons/Search.jsx";

function App() {
  const [searchValue , setSearchValue] = useState("")
  const onChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value)
  }
  return (
    <>
    {/* {console.log(CountriesData)
    } */}
      <div className=" bg-gray-100 w-screen h-screen  rounded-3xl relative flex justify-center items-center">
        <div className="bg-gray-100 min-w-[800px] h-full rounded-l-3xl flex flex-1 justify-center items-center absolute"></div>
        <div className=" w-1/2 h-full rounded-r-3xl rounded-bl-3xl flex justify-center items-center absolute bg-gray-900 right-0"></div>
        <div className="w-[900px] h-[900px] flex justify-center items-center rounded-full border-gray-300 border absolute">
          <div className="w-[700px] h-[700px] flex justify-center items-center rounded-full border-gray-300 border">
            <div className="w-[500px] h-[500px] flex justify-center items-center rounded-full border-gray-300 border">
              <div className="w-[300px] h-[300px] flex justify-center items-center rounded-full border-gray-300 border">
                <div className="w-48 h-[230px] relative flex gap-3 justify-center items-center overflow-hidden">
                  <div className="bg-gray-100 w-[88px] h-[230px] absolute  -top-0 right-16"></div>
                  <div className="bg-gray-900 w-44 h-44 absolute rounded-full -top-24 -right-20"></div>
                  <div className="bg-gray-900 w-44 h-44 absolute rounded-full -bottom-24 -right-20"></div>
                  <div className="w-32 h-32 bg-gray-100 relative flex gap-3 justify-center items-center rounded-full  border-gray-300 border">
                    <img src={logoR} alt="" className="w-1/3 h-1/2" />
                    <img src={logoL} alt="" className="w-1/3 h-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full h-full rounded-l-3xl flex justify-center items-center relative">
        <div className="w-[410px] h-4/6 rounded-3xl relative">
        <Ball className="absolute  -top-14 -left-14" color={"orange"}/>
        <div className="w-[410px] h-full bg-white rounded-3xl bg-opacity-75 flex justify-center items-center flex-col gap-5 absolute backdrop-blur-sm ">
          <div className="flex justify-between items-center h-fit w-5/6">
            <div>
          <p className="text-gray-400">{moment().format('LL')}</p>
          <p className="h-12 text-5xl font-extrabold text-gray-900">City name</p>
            </div>
            <Location/>
          </div>
          <img src={sunImg} alt="" />
          <p className="text-transparent bg-clip-text font-extrabold text-[110px]  bg-gradient-to-b from-black to-white">0 
            <sup className="text-transparent bg-clip-text font-extrabold text-[80px]  bg-gradient-to-b from-black to-white">o
              </sup>
              </p>
              <p className="text-yellow-500 w-full text-left px-[40px] text-xl">Bright</p>
              <div className="flex gap-10">
                <Home color={"#4B5563"}/><Heart/><Location/><User/>
              </div>
          </div>
        </div>
        </div>
        <div className=" w-full h-full rounded-r-3xl rounded-bl-3xl flex justify-center items-center relative ">
          <div className="w-[410px] h-4/6  rounded-3xl relative ">
          <Ball className="absolute -bottom-14 -right-14" color={"#6E72C9"}/>
          <div className="w-[410px] h-full bg-gray-950 rounded-3xl bg-opacity-75 backdrop-blur-sm flex justify-center items-center flex-col gap-5">
          <div className="flex justify-between items-center h-fit w-5/6">
            <div>
          <p className="text-gray-400">{moment().format('LL')}</p>
          <p className="h-12 text-5xl font-extrabold text-white">City name</p>
            </div>
            <Location/>
          </div>
          <img src={moonImg } alt="" />
          <p className="text-transparent bg-clip-text font-extrabold text-[110px]  bg-gradient-to-b from-white to-black">0 
            <sup className="text-transparent bg-clip-text font-extrabold text-[80px]  bg-gradient-to-b from-white to-black">o
              </sup>
              </p>
              <p className="text-indigo-500 w-full text-left px-[40px] text-xl">Clear</p>
              <div className="flex gap-10">
                <Home color={"white"}/><Heart/><Location/><User/>
              </div>
          </div>
          
          </div>
        </div>
        <div className="absolute w-[500px] h-fit top-12 flex bg-white justify-center items-center rounded-3xl">
        <Search />
        <input type="text" className=" top-0 p-5 w-[400px] text-2xl outline-none text-gray-400" placeholder="Search" onChange={onChange} value={searchValue}/>
        </div>
      </div>
    </>
  );
}

export default App;
