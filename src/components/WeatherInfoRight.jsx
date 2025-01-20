import moonImg from "../images/moon.png";
import fog from "../images/fog.png";
import nightCloud from "../images/nightCloud.png";
import nightWind from "../images/nightWind.png";
import nightRain from "../images/nightRain.png";
import nightThunder from "../images/nightThunder.png";
import nightSnow from "../images/nightSnow.png";
import { Footer, Header } from "./";
import { Ball } from "./icons";
// import { Ball } from "../icons";

export const WeatherInfoRight = (props) => {
  const { selectedCity, weather, allCities, setSelectedCity } = props;
  const chooseImage = () => {
    let image = "";
    const text = weather?.nightText?.toLocaleLowerCase();
    if (text?.includes("thunder")) {
      image = nightThunder;
    } else if (text?.includes("clear")) {
      image = moonImg;
    } else if (text?.includes("cloud") || text?.includes("overcast")) {
      image = nightCloud;
    } else if (text?.includes("fog") || text?.includes("mist")) {
      image = fog;
    } else if (
      text?.includes("snow") ||
      text?.includes("ice") ||
      text?.includes("blizzard") ||
      text?.includes("sleet")
    ) {
      image = nightSnow;
    } else if (text?.includes("wind") || text?.includes("blow")) {
      image = nightWind;
    } else if (
      text?.includes("rain") ||
      text?.includes("drizzle") ||
      text?.includes("mist")
    ) {
      image = nightRain;
    } else {
      image = moonImg;
    }
    return image;
  };

  return (
    <div className=" w-full h-screen rounded-r-3xl flex justify-center items-center relative ">
      <div className="w-[410px] h-[750px]  rounded-3xl relative ">
        {/* <Ball className="absolute -bottom-14 -right-14" color={"#6E72C9"} /> */}
        <Ball/>
        <div className="w-full h-full bg-gray-950 rounded-3xl bg-opacity-75 backdrop-blur-sm flex justify-center items-center flex-col gap-5">
          <Header textColor={"white"} selectedCity={selectedCity} />
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
          {/* <Footer
            color={"white"}
            weather={weather}
            selectedCity={selectedCity}
            allCities={allCities}
            setSelectedCity={setSelectedCity}
          /> */}
        </div>
      </div>
    </div>
  );
};
