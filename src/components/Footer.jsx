import Location from "../icons/Location.jsx";
import Home from "../icons/Home.jsx";
import Heart from "../icons/Heart.jsx";
import User from "../icons/User.jsx";

const Footer = (props) =>{
    const {color}=props
    return <div className="flex gap-10">
    <Home color={color} />
    <Heart />
    <Location />
    <User />
  </div>
}
export default Footer