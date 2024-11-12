import React from "react";

const Homepart2 = () => {
  return (
    <div className="w-full min-h-[90vh] sm:bg-[#fff]   text-[#061a3c] px-[5%] sm:py-[2%] py-[15%]">
      <div className=" w-full hidden sm:flex items-center justify-between mb-7">
        <div className="text-[60px]">
          Our <span className="italic text-[#704fe6]">Interactive</span> <br />
          featires
        </div>
        <div cn className="relative  h-[100px] w-[350px]">
          <button className="bg-[#dec8fe] shadow-xl absolute text-[15px] top-0 rotate-[-25deg] text-[#000] hover:scale-[1.2] ease-in duration-200  rounded-[50px] py-[10px] px-7 mr-5">
            Get Started
          </button>
          <button className="bg-[#6946e4] shadow-xl absolute text-[15px] top-10 left-[150px] rotate-45 text-[#fff] hover:scale-[1.2] ease-in duration-200  rounded-[50px] py-[10px] px-7 mr-5">
            Get Started
          </button>
          <button className="bg-[#ffd25d] shadow-xl absolute text-[15px] top-20  text-[#000]  left-[60px] hover:scale-[1.2] ease-in duration-200  rounded-[50px] py-[10px] px-7 mr-5">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full  sm:h-[60vh] sm:flex-row flex flex-col gap-10">
        <div className="sm:w-1/3 w-full h-full bg-[#dec8fe] rounded-[70px] p-7 overflow-hidden">
          <div className="w-full h-[45%] relative">
            <img
              src="/home/rings.svg"
              alt=""
              className="h-[30vh] w-[15vw] absolute top-[-32%] right-[-15%] rotate-[1deg]"
            />
          </div>
          <div className="w-full h-[55%]">
            <h1 className="text-[40px]">
              Job-Ready <br /> <span className="italic">Skills </span>
            </h1>
            <p className="text-[15px]">
              Our program emphasizes job-ready skills, focusing on the tools,
              languages, and frameworks most in demand in the industry.
            </p>
          </div>
        </div>
        <div className="sm:w-1/3 w-full h-full bg-[#704fe6] rounded-[70px] overflow-hidden p-7">
          <div className="w-full h-[45%] relative ">
            <img
              src="/home/desg1.svg"
              alt=""
              className="h-[20vh] w-[15vw] absolute top-[2%] right-[-17%] rotate-[1deg]"
            />
          </div>
          <div className="w-full h-[55%] text-[#fff]">
            <h1 className="text-[40px]">
              Expert <br /> <span className="italic">Mentors</span>
            </h1>
            <p className="text-[15px]">
              Learn from industry professionals with years of experience.Our
              mentors are seasoned developers and engineers with extensive
              experience in top tech companies.
            </p>
          </div>
        </div>
        <div className="sm:w-1/3 w-full h-full bg-[#ffd25d] rounded-[70px] p-7 overflow-hidden">
          <div className="w-full h-[45%] relative ">
            <img
              src="/home/dots.svg"
              alt=""
              className="h-[20vh] w-[15vw] absolute top-[-12%] right-[-17%] rotate-[1deg]"
            />
          </div>
          <div className="w-full h-[55%]">
            <h1 className="text-[40px]">
              Real-World <br /> <span className="italic">Projects</span>
            </h1>
            <p className="text-[15px]">
              Our program focuses on hands-on projects that simulate real-world
              challenges, helping you apply what you've learned and build
              portfolio-worthy work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepart2;
