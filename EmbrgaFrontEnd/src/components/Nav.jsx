import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const [respoNavSlide, setrespoNavSlide] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <nav className="bg-customBlack sm:h-[10vh] h-[8vh] fixed w-full z-40 top-0 start-0">
        <div
          className={`max-w-screen-xl sm:border-none border-b-[1.2px] border-b-gray-400 bg-customBlack ${
            respoNavSlide ? "bg-customBlack" : "bg-[#fff]"
          } flex flex-wrap items-center justify-between mx-auto h-full sm:px-10`}
        >
          <div
            onClick={() => {
              navigate("/"), setrespoNavSlide(false);
            }}
            className="sm:flex items-center cursor-pointer hidden space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Embrga
            </span>
          </div>
          <div className="flex  sm:hidden text-[#061a3c] justify-between items-center w-full px-7">
            <span
              onClick={() => {
                navigate("/"), setrespoNavSlide(false);
              }}
              className="self-center text-2xl cursor-pointer font-semibold whitespace-nowrap text-white"
            >
              Embrga
            </span>
            {!respoNavSlide ? (
              <RiMenu3Fill
                className="scale-[2] text-white"
                onClick={() => setrespoNavSlide(true)}
              />
            ) : (
              <MdOutlineCancel
                className="scale-[2] text-white"
                onClick={() => setrespoNavSlide(false)}
              />
            )}
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 text-[12px]"
            id="navbar-sticky"
          >
            <ul className="flex text-[14px]  font-medium">
              <li>
                <div
                  onClick={() => {
                    navigate("/"), setrespoNavSlide(false);
                  }}
                  className={`block py-2 px-7  ${
                    location.pathname === "/"
                      ? "text-customSkyBlue font-semibold"
                      : "text-gray-400"
                  } cursor-pointer `}
                  aria-current="page"
                >
                  Home
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    navigate("/courses"), setrespoNavSlide(false);
                  }}
                  className={`block py-2 px-7  ${
                    location.pathname.includes("/courses")
                      ? "text-customSkyBlue font-semibold"
                      : "text-gray-400"
                  } cursor-pointer `}
                >
                  Courses
                </div>
              </li>
              {/* <li>
                <a href="#" className="block py-2 px-7 text-gray-400">
                  Services
                </a>
              </li> */}
              <li>
                <a
                  href="#"
                  className="block py-2 px-7 text-gray-400 cursor-pointer"
                >
                  Enroll Now
                </a>
              </li>
              <li>
                <div
                  onClick={() => {
                    navigate("/agency-services"), setrespoNavSlide(false);
                  }}
                  className={`block py-2 px-7  ${
                    location.pathname.includes("/agency-services")
                      ? "text-customSkyBlue font-semibold"
                      : "text-gray-400"
                  } cursor-pointer `}
                >
                  Our Agency
                </div>
              </li>
            </ul>
            <button className="ml-20 bg-customSkyBlue text-[#fff] rounded-[50px] py-[10px] px-7 ">
              Let,s do it!
            </button>
          </div>
        </div>
        {respoNavSlide && (
          <div className="h-[100vh] bg-customBlack w-full z-[99]">
            <div
              class="items-center justify-between  w-full md:flex md:w-auto md:order-1 text-[22px]"
              id="navbar-sticky"
            >
              <ul class="flex text-[17px] pl-3 font-medium flex-col">
                <li>
                  <div
                    onClick={() => {
                      navigate("/"), setrespoNavSlide(false);
                    }}
                    class={`block py-2  pt-5 px-7 cursor-pointer ${
                      location.pathname === "/"
                        ? "text-customSkyBlue"
                        : "text-gray-400"
                    }`}
                    aria-current="page"
                  >
                    Home
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => {
                      navigate("/courses"), setrespoNavSlide(false);
                    }}
                    class={`block py-2 px-7  ${
                      location.pathname === "/courses"
                        ? "text-customSkyBlue"
                        : "text-gray-400"
                    } cursor-pointer`}
                  >
                    Courses
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-7 text-gray-400 cursor-pointer"
                  >
                    Enroll Now
                  </a>
                </li>
                <li>
                  <div
                    onClick={() => {
                      navigate("/agency-services"), setrespoNavSlide(false);
                    }}
                    class={`block py-2 px-7 cursor-pointer ${
                      location.pathname.includes("/agency-services")
                        ? "text-customSkyBlue"
                        : "text-gray-400"
                    }`}
                    aria-current="page"
                  >
                    Our Agency
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
      <nav className=" h-[10vh] w-full"></nav>
    </>
  );
};

export default Nav;
