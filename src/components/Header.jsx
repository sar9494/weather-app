import Location from "../icons/Location"
import moment from "moment";
const Header = (props) =>{
    const {selectedCity,textColor}=props
    return<div className="flex justify-between items-center h-fit w-5/6">
    <div>
      <p className="text-gray-400">{moment().format("LL")}</p>
      <p className="h-fit w-[280px] text-5xl font-extrabold p-0 m-0" style={{color:textColor}}>
        {selectedCity}
      </p>
    </div>
    <Location />
  </div>
}
export default Header