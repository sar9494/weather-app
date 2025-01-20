export const Loading_Page = (props) => {
  const { bigCircle, smallCircle } = props;
  return (
    <>
      <div className=" w-full h-screen rounded-l-3xl flex justify-center items-center relative">
        <div className="w-[410px] h-3/4 rounded-3xl flex items-center justify-center">
          <div
            className="w-[80px] h-[80px] bg-black rounded-full flex items-center justify-center relative overflow-hidden animate-spin border-none"
            style={{ backgroundColor: bigCircle }}
          >
            <div
              className="w-[30px] h-[40px] bg-white absolute top-0"
              style={{ backgroundColor: smallCircle }}
            ></div>
            <div
              className="w-[70px] h-[70px] bg-white rounded-full absolute "
              style={{ backgroundColor: smallCircle }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
