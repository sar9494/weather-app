import { useState, useEffect } from "react";
import sunImg from "./sun.png";
import moonImg from "./moon.png";
import fog from "./fog.png";
import dayCloud from "./dayCloud.png";
import dayRain from "./dayRain.png";
import daySnow from "./daySnow.png";
import dayWind from "./dayWind.png";
import dayThunder from "./dayThunder.png";
import nightCloud from "./nightCloud.png";
import nightRain from "./nightRain.png";
import nightSnow from "./nightSnow.png";
import nightWind from "./nightWind.png";
import nightThunder from "./nightThunder.png";
import Background from "./components/Background.jsx";
import WeatherInfoLeft from "./components/WeatherInfoLeft.jsx";
import SearchSection from "./components/SearchSection.jsx";
import WeatherInfoRight from "./components/WeatherInfoRight.jsx";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar, Mongolia");
  const [weather, setWeather] = useState({});
  const [condition, setCondition] = useState(""); 
  const [loader, setLoader] = useState(false);
  const weatherApiKey = "42b6f46c05a04431b28103643251501";

  const onChange = (e) => {
    setSearchValue(e.target.value);
    const filtered = allCities.filter((el) => {
      return (
        el.city
          .toLocaleLowerCase()
          .startsWith(e.target.value.toLocaleLowerCase())
      );
    });
    setFilteredCities(filtered);
  };
  const convertData = (data) => {
    const citiesAndCountries = data.flatMap((el) =>
      el.cities.map((city) => ({ city: city, country: el.country }))
    );
    return citiesAndCountries;
  };
  const getCities = async () => {
    try {
      const response = await fetch(
        `https://countriesnow.space/api/v0.1/countries`
      );
      const result = await response.json();
      const cities = convertData(result.data);
      setAllCities(cities);
    } catch (error) {
      console.log(error);
    }
  };
  const getWeather = async () => {
    try {
      setLoader(true);
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`
      );
      const result = await response.json();
      const nightTemprature = result.forecast.forecastday[0].hour[22].temp_c;
      const nightText = result.forecast.forecastday[0].hour[22].condition.text;
      const dayTemprature = result.forecast.forecastday[0].hour[10].temp_c;
      const dayText = result.forecast.forecastday[0].hour[10].condition.text;
      console.log(chooseImage("night",nightText),);
      
      setWeather({
        dayText: dayText,
        dayTemp: dayTemprature,
        dayImg:chooseImage("day",dayText),
        nightText: nightText,
        nightTemp: nightTemprature,
        nightImg:chooseImage("night",nightText),
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  //snow cloudy sunny clear rain overcast mist fog blow thunder ice,sleet,blizzard(snow) freez
  const handleChooseCity = (el) => {
    setSelectedCity(`${el.city}, ${el.country}`);
  };
  const chooseImage = (time, conditionText) => {
    const text = conditionText.toLocaleLowerCase()
    if (text.includes("thunder")) {
      setCondition("thunder");
    } else if (text.includes("wind") || text.includes("blow")) {
      setCondition("wind");
    } else if (text.includes("rain")) {
      setCondition("rain");
    } else if (
      text.includes("snow") ||
      text.includes("ice") ||
      text.includes("sleet") ||
      text.includes("freez") ||
      text.includes("blizzard")
    ) {
      setCondition("snow");
    } else if (text.includes("fog") || text.includes("mist")) {
      setCondition("fog");
    } else if (text.includes("cloud") || text.includes("overcast")) {
      setCondition("cloud");
    } else if (
      text.includes("sunny") ||
      text.includes("clear") ||
      text.includes("")
    ) {
      setCondition("sunny");
    }

    if (time === "day") {
      switch (condition) {
        case "rain":
          return dayRain
        case "snow":
          return daySnow
        case "wind":
          return dayWind
        case "fog":
          return fog
        case "cloud":
          return dayCloud
        case "sunny":
          return sunImg
        case "thunder":
          return dayThunder
        default:
          return sunImg
      }
    }
    else{
      switch (condition) {
        case "rain":
          return nightRain
        case "snow":
          return nightSnow
        case "wind":
          return nightWind
        case "fog":
          return fog
        case "cloud":
          return nightCloud
        case "sunny":
          return moonImg
        case "thunder":
          return nightThunder
          default:
            return moonImg
      }
    }
  };

  useEffect(() => {
    getWeather();
  }, [selectedCity]);
  useEffect(() => {
    getCities();
  }, []);

  return (
    <>
      <div className=" bg-gray-100 w-screen h-screen  rounded-3xl relative flex justify-center items-center">
        <Background />
        <WeatherInfoLeft
          selectedCity={selectedCity}
          sunImg={weather.dayImg}
          weather={weather}
        />
        <WeatherInfoRight
          selectedCity={selectedCity}
          moonImg={weather.nightImg}
          weather={weather}
        />
        <SearchSection
          onChange={onChange}
          handleChooseCity={handleChooseCity}
          selectedCity={selectedCity}
          searchValue={searchValue}
          filteredCities={filteredCities}
        />
      </div>
    </>
  );
}

export default App;
