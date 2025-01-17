import Location from "../icons/Location.jsx";
import Home from "../icons/Home.jsx";
import Heart from "../icons/Heart.jsx";
import User from "../icons/User.jsx";
import Ball from "../icons/Ball.jsx";
import moment from "moment";
import moonImg from "../images/moon.png"
import fog from "../images/fog.png"
import nightCloud from "../images/nightCloud.png"
import nightWind from "../images/nightWind.png"
import nightRain from "../images/nightRain.png"
import nightThunder from "../images/nightThunder.png"
import nightSnow from "../images/nightSnow.png"
const WeatherInfoRight = (props) =>{
    const {selectedCity,weather} = props
    const chooseImage = () =>{
          let image = ""
          const text = weather?.nightText?.toLocaleLowerCase()
          if(text?.includes("thunder")){
            image=nightThunder
          }else if(text?.includes("clear")){
            image=moonImg
          }else if(text?.includes("cloud")){
            image=nightCloud
          }else if(text?.includes("fog")){
            image=fog
          }else if(text?.includes("snow")){
            image=nightSnow
          }else if(text?.includes("wind")){
            image=nightWind
          }else if(text?.includes("rain")){
            image=nightRain
          }
          else{image=moonImg}
          return image
        }
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
              <img className="w-[263px] h-[263px]" src={chooseImage()} alt="" />
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