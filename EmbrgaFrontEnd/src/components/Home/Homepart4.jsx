import React, { useState, useEffect } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const images = [
  "/home/page1.svg",
  "/home/page2.svg",
  "/home/page3.svg",
  "/home/page4.svg",
  "/home/page5.svg",
  "/home/page6.svg",
  "/home/page7.svg",
  "/home/page8.svg",
];

const Homepart4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 8000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="w-full min-h-[90vh] bg-customBlack text-white sm:px-[5%] py-[70px] sm:mb-0 mb-10 relative">
      <h1 className="text-center mb-5 sm:text-[50px] text-[35px] font-semibold">
        <span className="bg-gray-700 text-transparent bg-clip-text bg-gradient-to-r from-customSkyBlue to-white">
          Design
        </span>{" "}
        Showcase
      </h1>
      <div className="sm:px-[100px] px-[10px]">
        <div className="relative w-full  overflow-hidden  h-[650px] rounded-[70px]">
          {images?.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 top-0 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute z-30 sm:top-[50%] top-[95%] outline-none left-14  px-4 py-4 rounded-full shadow-lg transition hover:bg-gray-300"
        >
          <MdArrowBackIos className="text-[#061a3c] text-[19px]" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute z-30 sm:top-[50%] top-[95%] outline-none right-14  px-4 py-4 rounded-full shadow-lg transition hover:bg-gray-300"
        >
          <MdArrowForwardIos className="text-[#061a3c]  text-[19px]" />
        </button>
      </div>{" "}
      <div className="bg-[#31587F] sm:block hidden sm:h-[80vh] sm:w-[80vh] h-[20vh] w-[20vh] sm:blur-[150px] blur-[50px] rounded-[50%] absolute sm:top-[5%] top-[55%] left-[-10%] z-20"></div>
    </div>
  );
};

export default Homepart4;
