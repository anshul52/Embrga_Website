import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";

const Nav = () => {
  const [respoNavSlide, setrespoNavSlide] = useState(false);
  return (
    <>
      <nav class="sm:bg-white sm:h-[10vh] h-[8vh] fixed w-full z-20 top-0 start-0  bg-white">
        <div
          class={`max-w-screen-xl sm:border-none border-b-[1.2px] border-b-gray-400 sm:bg-[#fff] ${
            respoNavSlide ? "bg-gray-100" : "bg-[#fff]"
          } flex flex-wrap items-center justify-between mx-auto h-full sm:px-10`}
        >
          <a
            href="https://embrga.com/"
            class="sm:flex items-center  hidden space-x-3 rtl:space-x-reverse"
          >
            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo"> */}
            <span class="self-center text-2xl font-semibold whitespace-nowrap ">
              Embrga
            </span>
          </a>
          <div class="flex sm:hidden text-[#061a3c] justify-between items-center w-full px-7">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo"> */}
            <span class="self-center text-2xl   font-semibold whitespace-nowrap ">
              Embrga
            </span>
            {!respoNavSlide ? (
              <RiMenu3Fill
                className="scale-[2]"
                onClick={() => setrespoNavSlide(true)}
              />
            ) : (
              <MdOutlineCancel
                className="scale-[2]"
                onClick={() => setrespoNavSlide(false)}
              />
            )}
          </div>

          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 text-[12px]"
            id="navbar-sticky"
          >
            <ul class="flex text-[14px]  font-medium">
              <li>
                <a
                  href="/"
                  class="block py-2 px-7  text-gray-900 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="/courses" class="block py-2 px-7 text-gray-400">
                  Courses
                </a>
              </li>
              {/* <li>
                <a href="#" class="block py-2 px-7 text-gray-400">
                  Services
                </a>
              </li> */}
              <li>
                <a
                  href="https://forms.gle/YSxtwB1JFjuEsbSr5"
                  class="block py-2 px-7 text-gray-400"
                >
                  Enroll Now
                </a>
              </li>
            </ul>
            <button className="ml-20 bg-[#061a3c] text-[#fff] rounded-[50px] py-[10px] px-7 ">
              Let,s do it!
            </button>
          </div>
        </div>
        {respoNavSlide && (
          <div className=" h-[100vh] bg-[#061a3c]/100 w-full z-[99]">
            <div
              class="items-center justify-between  w-full md:flex md:w-auto md:order-1 text-[22px]"
              id="navbar-sticky"
            >
              <ul class="flex text-[17px] pl-3 font-medium flex-col">
                <li>
                  <a
                    href="/"
                    class="block py-2  pt-5 px-7  text-gray-400 "
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a href="/courses" class="block py-2 px-7 text-gray-400">
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="https://forms.gle/YSxtwB1JFjuEsbSr5"
                    class="block py-2 px-7 text-gray-400"
                  >
                    Enroll Now
                  </a>
                </li>
                <li>
                  <a href="#" class="block py-[1px] px-7 text-gray-400">
                    {/* Services */}
                  </a>
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
