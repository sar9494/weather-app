import Location from "../icons/Location.jsx";
import Home from "../icons/Home.jsx";
import Heart from "../icons/Heart.jsx";
import User from "../icons/User.jsx";
import Ball from "../icons/Ball.jsx";
import moment from "moment";
const WeatherInfoRight = (props) =>{
    const {selectedCity,moonImg,weather} = props
    return <>
    <div className=" w-full h-[1200px] rounded-r-3xl flex justify-center items-center relative ">
          <div className="w-[410px] h-4/6  rounded-3xl relative ">
            <Ball className="absolute -bottom-14 -right-14" color={"#6E72C9"} />
            <div className="w-[410px] h-full bg-gray-950 rounded-3xl bg-opacity-75 backdrop-blur-sm flex justify-center items-center flex-col gap-5">
              <div className="flex justify-between items-center h-fit w-5/6">
                <div>
                  <p className="text-gray-400">{moment().format("LL")}</p>
                  <p className="h-fit w-[280px] text-5xl font-extrabold text-white p-0 m-0">
                    {selectedCity}
                  </p>
                </div>
                <Location />
              </div>
              <img className="w-[263px] h-[263px]" src={moonImg} alt="" />
              <p className="text-transparent bg-clip-text font-extrabold text-[110px]  bg-gradient-to-b from-white to-black">
                {weather.nightTemp}
                <sup className="text-transparent bg-clip-text font-extrabold text-[80px] bg-gradient-to-b from-white to-black">
                  o
                </sup>
              </p>
              <p className="text-indigo-500 w-full text-left px-[40px] text-xl">
                {weather.nightText}
              </p>
              <div className="flex gap-10">
                <Home color={"white"} />
                <Heart />
                <Location />
                <User />
              </div>
            </div>
          </div>
        </div>
    </>
}
export default WeatherInfoRight