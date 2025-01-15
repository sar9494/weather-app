import { useState, useEffect } from "react";
import sunImg from "./icon.png";
import moonImg from "./moon.png";
//import CountriesData from "./data.jsx";
import logoR from "./VectorR.png";
import logoL from "./VectorL.png";
import moment from "moment";
import Location from "./Icons/Location.jsx";
import Home from "./Icons/Home.jsx";
import Heart from "./Icons/Heart.jsx";
import User from "./Icons/User.jsx";
import Ball from "./Icons/Ball.jsx";
import Search from "./Icons/Search.jsx";

// const data = CountriesData.flatMap((el) => [
//   { country: el.country, cities: el.cities },
// ]);

// const data = [
//   {
//     country: "",
//     cities: [""],
//   },
// ];

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar, Mongolia")
  const [weather,setWeather] = useState({})
  const [loader,setLoader] = useState(false)
  const weatherApiKey="42b6f46c05a04431b28103643251501";

  const onChange = (e) => {
    setSearchValue(e.target.value);
      const filtered = allCities.filter((el)=>{
        return searchValue!==""&&el.city
          .toLocaleLowerCase()
           .startsWith(searchValue.toLocaleLowerCase())&&el
      })
      // data.filter((el) => {
      //   el.cities.filter((city) => {
      //     return (
      //       city
      //         .toLocaleLowerCase()
      //         .startsWith(searchValue.toLocaleLowerCase()) &&
      //       filtered.unshift({ country: el.country, city: city })
      //     );
      //   });
      // });
      setFilteredCities(filtered);
  };
  const convertData = (data) =>{
    const citiesAndCountries = data.flatMap((el)=>
      el.cities.map((city)=>({city:city,country:el.country}))
    )
    return citiesAndCountries
  }
  const getCities = async() => {
    try{
      const response = await fetch(`https://countriesnow.space/api/v0.1/countries`)
    const result = await response.json()
    const cities=convertData(result.data)
    setAllCities(cities)
    }
    catch(error){
      console.log(error);
    }
    
  };

  const getWeather = async() => {
    try{
      setLoader(true)
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`)
    const result = await response.json()
      const nightTemprature=result.forecast.forecastday[0].hour[22].temp_c
      const nightText=result.forecast.forecastday[0].hour[22].condition.text
      const dayTemprature=result.forecast.forecastday[0].hour[10].temp_c
      const dayText=result.forecast.forecastday[0].hour[10].condition.text
      setWeather({dayText:dayText,dayTemp:dayTemprature,nightText:nightText,nightTemp:nightTemprature})
      console.log(nightTemprature,dayTemprature,nightText,dayText)
    console.log(weather)
    }
    catch(error){
      console.log(error);
    }
    finally{
      setLoader(false)
    }
    
    
  }
  const handleChooseCity = (el) =>{
    setSelectedCity(`${el.city}, ${el.country}`)
  }
  useEffect(()=>{
    getCities()
    getWeather()
  },[])

  return (
    <>
      <div className=" bg-gray-100 w-screen h-screen  rounded-3xl relative flex justify-center items-center">
        <div className="bg-gray-100  h-full rounded-l-3xl flex flex-1 justify-center items-center absolute"></div>
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
              <img src={sunImg} alt="" />
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
        <div className=" w-full h-[1200px] rounded-r-3xl rounded-bl-3xl flex justify-center items-center relative ">
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
              <img src={moonImg} alt="" />
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
        <div className="absolute w-[400px] h-fit top-12  flex justify-center items-center rounded-3xl flex-col gap-3">
          <div className="w-[400px] h-fit bg-white flex justify-center items-center rounded-3xl">
            <Search className="rounded-3xl" />
            <input
              type="text"
              className=" top-0 p-5 w-[300px] text-2xl outline-none text-gray-400 rounded-3xl"
              placeholder="Search"
              onChange={onChange}
              value={searchValue}
            />
          </div>
          {
            searchValue!==""&&filteredCities.length!==0&&(
              <div className="bg-white p-5 rounded-3xl backdrop-blur-sm bg-opacity-50 w-[400px] text-gray-600">
            {filteredCities.slice(0, 4).map((el, index) => (
              <div
                key={index}
                className="flex w-full justify-start items-center" onClick={()=>handleChooseCity(el)}
              >
                <Location />
                <p className=" p-5 rounded-3xl">
                  {el.city},{el.country}
                </p>
              </div>
            ))}
          </div>
            )
          }
          
        </div>
      </div>
    </>
  );
}

export default App;
