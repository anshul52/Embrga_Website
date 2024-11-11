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
    <div className="w-full min-h-[90vh] bg-[#fff] text-[#061a3c] sm:px-[5%] py-[70px] sm:mb-0 mb-10 relative">
      <h1 className="text-center mb-5 sm:text-[50px] text-[35px] font-semibold">
        Design Showcase
      </h1>
      <div className="sm:px-[100px] px-[10px] ">
        <div className="relative w-full  overflow-hidden  h-[650px] rounded-[70px]">
          {images.map((image, index) => (
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
          className="absolute z-20 sm:top-[50%] top-[95%] outline-none left-14  px-4 py-4 rounded-full shadow-lg transition hover:bg-gray-300"
        >
          <MdArrowBackIos className="text-[#061a3c] text-[19px]" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute sm:top-[50%] top-[95%] outline-none right-14  px-4 py-4 rounded-full shadow-lg transition hover:bg-gray-300"
        >
          <MdArrowForwardIos className="text-[#061a3c]  text-[19px]" />
        </button>
      </div>
    </div>
  );
};

export default Homepart4;
