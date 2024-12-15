import React from "react";
import Nav from "../components/Nav";

const FreelancePage = () => {
  return (
    <main className="min-h-[100vh] kanit-medium scrollbar bg-[#151616] w-full">
      <Nav />
      <div className="h-[100vh] overflow-hidden relative">
        <div className=" h-[40%] flex items-end justify-center ">
          <h1 className="sm:text-[15vh]  bg-gray-700 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700/10 kanit-medium leading-[15vh] text-center ">
            Web Dev & <br /> Design Agency .
          </h1>
        </div>
        <div className="h-[60%]  flex items-end justify-between w-full  px-[7%]">
          <div className="text-white w-[33%] flex flex-col gap-10 mb-[20vh] ">
            <div className="text-[35px] relative leading-[4vh] border-y-[#313536] bg-[#242b2d] border-y-[2px] py-10 pr-10 w-[10vw] bg-gradient-to-r from-[#151616] pl-5 to-transparent border-r-[#313536] border-r-[2px] kanit-light rounded-r-[25px] overflow-hidden">
              <span className="absolute z-[1000000]">107+ </span>
              <br />
              <span className="text-[15px] text-gray-400 absolute z-[1000000]">
                PARTNERS
              </span>
            </div>
            <div className="text-[35px] leading-[4vh] border-y-[#313536] bg-[#242b2d] border-y-[2px] py-10 pr-10  w-[12vw] bg-gradient-to-l from-[#151616] pl-5 to-transparent border-l-[#313536] border-l-[2px] kanit-light rounded-l-[25px] overflow-hidden">
              <span className="absolute z-[1000000]">92% </span> <br />
              <span className="text-[15px] text-gray-500 absolute z-[1000000]">
                FASTER TECHNOLOGY
              </span>
            </div>
          </div>
          <div className="h-[90%] w-[33%]">
            <img
              src="/agency/file_(5).png"
              className="object-contain h-full"
              alt=""
            />
          </div>
          <div className="text-gray-400  text-right w-[33%] kanit-light mb-[20vh]">
            <p className="text-[3vh]">
              Specialize in crafting solutions <br /> that are not only
              aesthetically <br />
              pleasing but also optimized for <br /> performance and
              scalability.
            </p>
            <button className="bg-white kanit-semibold text-black rounded-[25px] mt-7  px-3 py-2 text-[15px]">
              GET STARTED{" "}
            </button>
          </div>
        </div>
        {/* ---------------gradient effect---------------- */}
        <div className="bg-[#31587F] h-[50vh] w-[50vh] blur-[100px] rounded-[50%] absolute top-[25%] left-[-10%] z-[10000]"></div>
        <div className="bg-[#22615F] h-[50vh] w-[50vh] blur-[100px] rounded-[50%] absolute top-[25%] right-[-17%] z-[10000]"></div>
      </div>
    </main>
  );
};

export default FreelancePage;
