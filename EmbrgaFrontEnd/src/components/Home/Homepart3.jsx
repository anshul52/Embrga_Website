import React from "react";
import { GoDotFill } from "react-icons/go";

const Homepart3 = () => {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center   text-[#061a3c] px-[5%]  ">
      <div className="flex sm:flex-row flex-col items-center h-[90%] w-full  rounded-[25px] gap-[4%] sm:py-[2%] py-[10%] bg-[#ffd25d]">
        <div className="sm:w-[50%] w-full h-full flex items-center justify-center">
          <div className="h-[80%] rounded-[25px] w-[100%] overflow-hidden ">
            <img
              src="/home/compu.png"
              alt=""
              className="h-full bg-center object-cover bg-contain bg-no-repeat"
            />
          </div>
        </div>
        <section class="sm:w-[50%] w-full h-full">
          <div class="home-section text-[#061a3c] h-full w-full  flex items-start justify-center flex-col px-5">
            <h2 className="sm:text-[35px] text-[15px] font-semibold mb-7">
              Where Coding Becomes a Lifestyle{" "}
            </h2>
            <p className="text-[13px] mb-4">
              We’re a team of tech geeks, coders, and creatives with one
              mission: make coding cool and accessible for everyone. We know Gen
              Z wants to create, not just consume. So, we’ve designed our
              courses to be project-based, fun, and no-fluff so you can go from
              zero to coder in no time.
            </p>

            <section class="mentors mb-4">
              <h3 className="font-semibold flex items-center gap-2">
                <GoDotFill /> Our Mentors
              </h3>
              <p>
                Learn from the real deal – our instructors are pros working at
                places like Apple, Amazon, and Snapchat. They keep it real and
                know what it takes to make it in tech.
              </p>
            </section>

            <section class="community">
              <h3 className="font-semibold  flex items-center gap-2">
                <GoDotFill /> Join Our Community
              </h3>
              <p>
                Meet like-minded coders, collab on projects, and maybe find your
                future startup squad. We’re more than a coding school – we’re a
                movement.
              </p>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepart3;
