// import { Location, Home, Heart, User } from "../icons";
import { useState } from "react";
export const Footer = (props) => {
  const { weather, selectedCity, allCities, setSelectedCity } = props;
  const [isHover, setIsHover] = useState("");
  const hoverHandler = (name) => {
    setIsHover(name);
  };

  const { color } = props;
  return (
    <div className="flex gap-10 realitive justify-center items-center h-fit">
      {/* <Home color={color} /> */}
      <div
        onMouseEnter={() => hoverHandler("heart")}
        onMouseLeave={() => hoverHandler("")}
      >
        {/* <Heart /> */}
      </div>
      <div
        onMouseEnter={() => hoverHandler("location")}
        onMouseLeave={() => hoverHandler("")}
      >
        {/* <Location /> */}
      </div>
      <div
        onClick={() =>
          setSelectedCity({ city: "Ulaanbaatar", country: "Mongolia" })
        }
      >
        {/* <User /> */}
      </div>
      {isHover == "heart" && (
        <div
          className="absolute w-[170px] h-[100px] rounded-2xl flex justify-center items-center bottom-[100px] flex-col"
          style={{
            backgroundColor:
              weather.airQuality <= 50
                ? "green"
                : weather.airQuality <= 100
                ? "yellow"
                : weather.airQuality <= 150
                ? "orange"
                : weather.airQuality <= 200
                ? "red"
                : weather.airQuality <= 250
                ? "black"
                : "brown",
            opacity: "80%",
          }}
        >
          <p>Air Quality:{weather.airQuality}</p>
          {weather.airQuality >= 0 && weather.airQuality <= 50 && (
            <p>Quality:Good</p>
          )}
          {weather.airQuality > 50 && weather.airQuality <= 100 && (
            <p>Quality:Moderate</p>
          )}
          {weather.airQuality > 100 && weather.airQuality <= 150 && (
            <p>Quality:Unhealty for sensetive groups</p>
          )}
          {weather.airQuality > 150 && weather.airQuality <= 200 && (
            <p>Quality:Unhealty</p>
          )}
          {weather.airQuality > 200 && weather.airQuality <= 250 && (
            <p>Quality:Very unhealty</p>
          )}
          {weather.airQuality > 250 && weather.airQuality <= 300 && (
            <p>Quality:Hazardous</p>
          )}
        </div>
      )}
      {isHover == "location" && (
        <div className="absolute w-[200px] h-[100px] bg-white bg-opacity-80 rounded-2xl flex justify-center items-center bottom-[100px] flex-col">
          <p className="text-gray-900">Country:{selectedCity.country}</p>
          <p className="text-gray-900">City:{selectedCity.city}</p>
        </div>
      )}
    </div>
  );
};
