import React, { useState, useEffect } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { RunningTextData } from "../../data/data";

const RunningSlider = () => {
  const [position, setPosition] = useState(0);
  const slideInterval = 2000;

  const totalSlides = 5;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 1) % totalSlides);
    }, slideInterval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gray-400/20 py-6 border-y-[2px] border-y-slate-500/30">
      <div className="flex animate-marquee gap-10 items-center ">
        {RunningTextData?.map((text) => {
          return (
            <>
              <p className="whitespace-nowrap text-xl font-medium text-white mx-4">
                {text?.title}
              </p>
              <p className="whitespace-nowrap text-xl  text-blue-500 mx-4">
                <PiStarFourFill className="text-yellow-200" />
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RunningSlider;
