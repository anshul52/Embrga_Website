import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ imgUrl, title, desc, button, redirectLink }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-[#00121C] via-[#01121A] via-[#01121A] via-[#02121a] via-[#02202B] to-[#11202e] max-h-[470px]  rounded-lg shadow  dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={imgUrl} alt="" />
      </a>
      <div className="p-5 flex flex-col  items-start justify-between">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-customGolden">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
        <div
          onClick={() => {
            navigate(redirectLink ? `/courses/${redirectLink}` : "#"),
              setrespoNavSlide(false);
          }}
          className="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-customSkyBlue rounded-lg"
        >
          {button}
          {button === "Read More" && (
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
