import logoR from "../images/logoR.png";
import logoL from "../images/logoL.png";
export const Background = () => {
  return (
    <>
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
    </>
  );
};
