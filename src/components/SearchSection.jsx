import Search from "../icons/Search.jsx";
import Location from "../icons/Location.jsx";
const SearchSection = (props) => {
  const {
    searchValue,
    setSearchValue,
    setSelectedCity,
    allCities,
    setFilteredCities,
    filteredCities,
  } = props;

  const handleChooseCity = (el) => {
    setSelectedCity({ city: el.city, country: el.country });
    setSearchValue("");
  };
  const onChange = (e) => {
    setSearchValue(e.target.value);
    const filtered = allCities.filter((el) => {
      return el.city
        .toLocaleLowerCase()
        .startsWith(e.target.value.toLocaleLowerCase());
    });
    setFilteredCities(filtered);
  };

  return (
    <div className="absolute w-[400px] h-fit top-12  flex justify-center items-center rounded-3xl flex-col gap-3">
      <div className="w-[400px] h-fit bg-white flex justify-center items-center rounded-3xl">
        <Search />
        <input
          type="text"
          className=" top-0 p-5 w-[300px] text-2xl outline-none text-gray-400 rounded-3xl"
          placeholder="Search"
          onChange={onChange}
          value={searchValue}
        />
      </div>
      {searchValue !== "" && filteredCities.length !== 0 && (
        <div className="bg-white p-5 rounded-3xl backdrop-blur-sm bg-opacity-50 w-[400px] text-gray-600">
          {filteredCities.slice(0, 4).map((el, index) => (
            <div
              key={index}
              className="flex w-full justify-start items-center"
              onClick={() => handleChooseCity(el)}
            >
              <Location />
              <p className=" p-5 rounded-3xl">
                {el.city},{el.country}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default SearchSection;
