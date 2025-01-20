import sunImg from "../images/sun.png";
import fog from "../images/fog.png";
import dayCloud from "../images/dayCloud.png";
import dayWind from "../images/dayWind.png";
import dayRain from "../images/dayRain.png";
import dayThunder from "../images/dayThunder.png";
import daySnow from "../images/daySnow.png";
import { Footer, Header } from "./";
// import { Ball } from "../icons";

const Ball = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={128}
      height={128}
      fill="none"
      {...props}
    >
      <circle cx={64} cy={64} r={64} fill={"green"} />
      <circle
        cx={64}
        cy={64}
        r={64}
        fill="url(#a)"
        fillOpacity={0.35}
        style={{
          mixBlendMode: "overlay",
        }}
      />
      <defs>
        <radialGradient
          id="a"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 64 -64 0 64 64)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  );
};

export const WeatherInfoLeft = (props) => {
  const { selectedCity, weather, allCities, setSelectedCity } = props;

  const chooseImage = () => {
    let image = "";
    const text = weather?.dayText?.toLowerCase();

    if (text?.includes("thunder")) {
      image = dayThunder;
    } else if (text?.includes("sunny")) {
      image = sunImg;
    } else if (text?.includes("cloud") || text?.includes("overcast")) {
      image = dayCloud;
    } else if (text?.includes("fog") || text?.includes("mist")) {
      image = fog;
    } else if (
      text?.includes("snow") ||
      text?.includes("ice") ||
      text?.includes("blizzard") ||
      text?.includes("sleet")
    ) {
      image = daySnow;
    } else if (text?.includes("wind") || text?.includes("blow")) {
      image = dayWind;
    } else if (
      text?.includes("rain") ||
      text?.includes("mist") ||
      text?.includes("drizzle")
    ) {
      image = dayRain;
    } else {
      image = text;
    }
    return image;
  };

  return (
    <div className=" w-full h-screen rounded-l-3xl flex justify-center items-center relative">
      <div className="w-[410px] h-[750px] rounded-3xl relative">
        {/* <Ball className="absolute  -top-14 -left-14" color={"orange"} /> */}
        {Ball()}
        <div className="w-full h-full bg-white rounded-3xl bg-opacity-75 flex justify-center items-center flex-col gap-5 absolute backdrop-blur-sm ">
          <Header selectedCity={selectedCity} textColor={"black"} />
          <img className="w-[263px] h-[263px]" src={chooseImage()} alt="" />
          <p className="text-transparent bg-clip-text font-extrabold text-[110px]  bg-gradient-to-b from-black to-white">
            {weather.dayTemp}
            <sup className="text-transparent bg-clip-text font-extrabold text-[80px]  bg-gradient-to-b from-black to-white">
              o
            </sup>
          </p>
          <p className="text-yellow-500 w-full text-left px-[40px] text-xl">
            {weather.dayText}
          </p>
          {/* <Footer
            color={"#4B5563"}
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

// export default WeatherInfoLeft;
