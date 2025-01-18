import { useState, useEffect } from "react";
import Background from "./components/Background.jsx";
import WeatherInfoLeft from "./components/WeatherInfoLeft.jsx";
import SearchSection from "./components/SearchSection.jsx";
import WeatherInfoRight from "./components/WeatherInfoRight.jsx";
import Loading_Page from "./components/Loading_Page.jsx";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState({city:"Ulaanbaatar", country:"Mongolia"});
  const [weather, setWeather] = useState({});
  const [loader, setLoader] = useState(false);
  const weatherApiKey = "42b6f46c05a04431b28103643251501";

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
  const convertData = (data) => {
    const citiesAndCountries = data.flatMap((el) =>
      el.cities.map((city) => ({ city: city, country: el.country }))
    );
    return citiesAndCountries;
  };
  const getWeather = async () => {
    try {
      setLoader(true);
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity.city}&aqi=yes&alerts=yes`
      );
      const result = await response.json();
      const nightTemprature = result.forecast.forecastday[0].hour[22].temp_c;
      const nightText = result.forecast.forecastday[0].hour[22].condition.text;
      const dayTemprature = result.forecast.forecastday[0].hour[10].temp_c;
      const dayText = result.forecast.forecastday[0].hour[10].condition.text;
      const airQuality =
        result.current.air_quality.pm2_5;
      console.log(result);
      console.log(airQuality);

      setWeather({
        dayText: dayText,
        dayTemp: dayTemprature,
        nightText: nightText,
        nightTemp: nightTemprature,
        airQuality: airQuality,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  //snow cloudy sunny clear rain overcast mist fog blow thunder ice,sleet,blizzard(snow) freez
  
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
        {loader && (
          <>
            <Loading_Page smallCircle={"white"} bigCircle={"black"} />
            <Loading_Page smallCircle={"#04132b"} bigCircle={"white"} />
          </>
        )}
        {!loader && (
          <>
            <WeatherInfoLeft selectedCity={selectedCity} weather={weather} allCities={allCities} setSelectedCity={setSelectedCity}/>
            <WeatherInfoRight selectedCity={selectedCity} weather={weather} allCities={allCities} setSelectedCity={setSelectedCity}/>
            <SearchSection
              setSearchValue={setSearchValue}
              setSelectedCity={setSelectedCity}
              allCities={allCities}
              searchValue={searchValue}
              filteredCities={filteredCities}
              setFilteredCities={setFilteredCities}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
