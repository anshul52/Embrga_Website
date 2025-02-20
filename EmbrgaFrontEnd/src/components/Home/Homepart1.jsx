import React from "react";
import { useNavigate } from "react-router-dom";

const Homepart1 = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full sm:min-h-[90vh]  flex items-center justify-center text-white px-[8%] relative">
      <div className="relative flex flex-col items-center justify-center">
        <h1 className="sm:text-[80px] text-[35px] text-center font-semibold">
          EMBRGA! The best place <br className="sm:block hidden" />
          to
          <span className="italic text-customSkyBlue"> learn </span>
          and
          <span className="italic text-[#ffb802]"> play</span>
          <br className="sm:block hidden" /> with code!
        </h1>
        <p className="text-[15px] text-[#808080] font-medium mt-10 text-center">
          Welcome to <span className="text-customSkyBlue">EMBRGA</span> Academy
          – where coding is as fun as Instagram! <br /> 🚀 Start from scratch or
          level up with skills tech companies love. <br /> Join us and bring
          your ideas to life!
        </p>
        <div className="text-[12px] font-light mt-5 sm:mb-0 mb-10">
          <div
            onClick={() => {
              navigate("/courses");
            }}
            className="bg-customSkyBlue shadow-xl  text-[#fff] hover:scale-[1.2] ease-in duration-200  rounded-[50px] py-[10px] px-7 mr-5"
          >
            Get Started
          </div>
        </div>
        {/* <img
          src="/home/rings1.svg"
          alt=""
          className="sm:h-[20vh] h-[30vh] sm:w-[12vw] w-[22vw] absolute sm:top-[55%] top-[15%] left-[-12%] rotate-[25deg] opacity-[30%]"
        /> */}

        <img
          src="/home/playunderline.svg"
          alt=""
          className="h-[20vh] w-[15vw] sm:block hidden absolute top-[35%] left-[65%] rotate-[10deg]"
        />
        <img
          src="/home/learnunderline.svg"
          alt=""
          className="h-[20vh] w-[15vw] absolute top-[32%] sm:block hidden left-[24%] rotate-[1deg]"
        />
      </div>
      <div className="bg-[#31587F] sm:h-[50vh] sm:w-[50vh] h-[20vh] w-[20vh] sm:blur-[100px] blur-[50px] rounded-[50%] absolute sm:top-[25%] top-[25%] right-[-17%] z-20"></div>
    </div>
  );
};

export default Homepart1;
