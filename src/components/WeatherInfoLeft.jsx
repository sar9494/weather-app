import Location from "../icons/Location.jsx";
import Home from "../icons/Home.jsx";
import Heart from "../icons/Heart.jsx";
import User from "../icons/User.jsx";
import Ball from "../icons/Ball.jsx";
import moment from "moment";
const WeatherInfoLeft = (props) =>{
    const {selectedCity,sunImg,weather} = props
return  <>
<div className=" w-full h-[1200px] rounded-l-3xl flex justify-center items-center relative">
<div className="w-[410px] h-4/6 rounded-3xl relative">
  <Ball className="absolute  -top-14 -left-14" color={"orange"} />
  <div className="w-[410px] h-full bg-white rounded-3xl bg-opacity-75 flex justify-center items-center flex-col gap-5 absolute backdrop-blur-sm ">
    <div className="flex justify-between items-center h-fit w-5/6">
      <div>
        <p className="text-gray-400">{moment().format("LL")}</p>
        <p className="h-fit w-[280px] text-5xl font-extrabold text-gray-900">
          {selectedCity}
        </p>
      </div>
      <Location />
    </div>
    <img className="w-[263px] h-[263px]" src={sunImg} alt="" />
    <p className="text-transparent bg-clip-text font-extrabold text-[110px]  bg-gradient-to-b from-black to-white">
      {weather.dayTemp}
      <sup className="text-transparent bg-clip-text font-extrabold text-[80px]  bg-gradient-to-b from-black to-white">
        o
      </sup>
    </p>
    <p className="text-yellow-500 w-full text-left px-[40px] text-xl">
      {weather.dayText}
    </p>
    <div className="flex gap-10">
      <Home color={"#4B5563"} />
      <Heart />
      <Location />
      <User />
    </div>
  </div>
</div>
</div>
</>

}
export default WeatherInfoLeft