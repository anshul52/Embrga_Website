import React from "react";

const Header = () => {
  return (
    <div className="sm:h-[100vh] h-[80vh] overflow-hidden relative w-full">
      <div className="sm:h-[40%] h-[30%] flex sm:items-end items-center justify-center ">
        <h1 className="sm:text-[15vh] text-4xl bg-gray-700 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700/10 kanit-medium sm:leading-[15vh] text-center ">
          Web Dev & <br /> Design Agency .
        </h1>
      </div>
      <div className="sm:h-[60%] h-[70%]  flex sm:flex-row flex-col-reverse items-end justify-between w-full  px-[7%]">
        <div className="text-white w-[33%] hidden sm:flex flex-col gap-10 mb-[20vh] ">
          <div className="text-[35px] relative leading-[4vh] border-y-[#313536] bg-[#242b2d] border-y-[2px] py-10 pr-10 w-[10vw] bg-gradient-to-r from-[#151616] pl-5 to-transparent border-r-[#313536] border-r-[2px] kanit-light rounded-r-[25px] overflow-hidden">
            <span className="absolute z-30">27+ </span>
            <br />
            <span className="text-[15px] text-gray-400 absolute z-30">
              PARTNERS
            </span>
          </div>
          <div className="text-[35px] leading-[4vh] border-y-[#313536] bg-[#242b2d] border-y-[2px] py-10 pr-10  w-[12vw] bg-gradient-to-l from-[#151616] pl-5 to-transparent border-l-[#313536] border-l-[2px] kanit-light rounded-l-[25px] overflow-hidden">
            <span className="absolute z-30">92% </span> <br />
            <span className="text-[15px] text-gray-500 absolute z-30">
              FASTER TECHNOLOGY
            </span>
          </div>
        </div>
        <div className="sm:h-[90%]  sm:w-[33%]">
          <img
            src="/agency/file_(5).png"
            className="object-contain h-full"
            alt=""
          />
        </div>
        <div className="text-gray-400  sm:text-right text-center sm:w-[33%] w-full  kanit-light sm:mb-[20vh] mb-[5vh]">
          <p className="sm:text-2xl text-base">
            Specialize in crafting solutions <br /> that are not only
            aesthetically <br />
            pleasing but also optimized for <br /> performance and scalability.
          </p>
          <button className="bg-white kanit-semibold text-black rounded-[25px] sm:mt-7 mt-3  px-3 py-2 sm:text-base text-sm  hover:scale-105  hover:transition">
            GET STARTED{" "}
          </button>
        </div>
      </div>
      {/* ---------------gradient effect---------------- */}
      <div className="bg-[#31587F] sm:block hidden sm:h-[50vh] sm:w-[50vh] h-[20vh] w-[20vh] sm:blur-[100px] blur-[50px] rounded-[50%] absolute sm:top-[25%] top-[55%] left-[-10%] z-20"></div>
      <div className="sm:bg-[#22615F] bg-[#31587F] sm:h-[50vh] sm:w-[50vh] h-[20vh] w-[20vh] sm:blur-[100px] blur-[50px] rounded-[50%] absolute sm:top-[25%] top-[25%] right-[-17%] z-20"></div>
    </div>
  );
};

export default Header;
