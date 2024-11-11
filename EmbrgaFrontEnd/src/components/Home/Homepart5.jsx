import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";

const Homepart5 = () => {
  return (
    <div className="w-full sm:min-h-[90vh] sm:flex-row flex flex-col items-center px-4">
      <div className="w-[50%] sm:h-[90vh] h-[33vh] flex items-center justify-center">
        <div className=" bg-[#ffcccc] -[#43a574] h-[80%] w-[300px] rounded-[150px] flex items-center overflow-hidden justify-center">
          <img src="/home/boy2.png" alt="" className="scale-[1.4]" />
        </div>
        <div className=" bg-[#ffd25d] h-[70%] w-[200px] rounded-[150px] overflow-hidden">
          <img
            src="/home/picc.jpg"
            alt=""
            className="h-full bg-center object-cover bg-contain bg-no-repeat"
          />
        </div>
      </div>
      <div className="sm:w-[50%] w-full flex h-full text-[#061a3c] p-1">
        <div className="  sm:p-10 h-full w-full">
          <h2 className="text-[35px] font-semibold mb-7">Why Choose Embgra?</h2>

          <section className="feature mb-4">
            <h3 className="flex items-center gap-2 text-[15px] font-semibold">
              {" "}
              <AiFillSafetyCertificate />
              Learn at Your Pace 🕒
            </h3>
            <p className="text-[14px]">
              Whether you’re a night owl or an early bird, learn whenever you
              want, wherever you want. Our classes are flexible, so you can
              watch a quick lesson between classes or binge a whole series on a
              weekend.
            </p>
          </section>

          <section className="feature mb-4">
            <h3 className="flex items-center gap-2 text-[15px] font-semibold">
              <AiFillSafetyCertificate /> Skip the Boring Stuff 🚫
            </h3>
            <p className="text-[14px]">
              No more snooze-worthy theory. At CodeWiz, you’ll learn through
              projects, memes, and real-world examples. From building apps to
              creating cool websites, our hands-on approach will keep you
              hooked.
            </p>
          </section>

          <section className="feature mb-4">
            <h3 className="flex items-center gap-2 text-[15px] font-semibold">
              {" "}
              <AiFillSafetyCertificate /> Be Future-Ready 🔥
            </h3>
            <p className="text-[14px]">
              Tech is the future, and you’re about to be the future of tech! Our
              courses are designed to get you job-ready. With us, you’re not
              just learning code – you’re building the skills that companies
              want.
            </p>
          </section>

          <section className="feature mb-4">
            <h3 className="flex items-center gap-2 text-[15px] font-semibold">
              {" "}
              <AiFillSafetyCertificate /> Collaborate & Create 💬
            </h3>
            <p className="text-[14px]">
              Join a community that’s as passionate as you are. Share your
              projects, get feedback, collaborate on group challenges, and
              celebrate each other’s wins. We’re all about community vibes.
            </p>
          </section>

          <section className="feature mb-4">
            <h3 className="flex items-center gap-2 text-[15px] font-semibold">
              {" "}
              <AiFillSafetyCertificate /> Earn Your Bragging Rights 🏆
            </h3>
            <p className="text-[14px]">
              Certificates? Yes. Real skills? Absolutely. With CodeWiz, you’re
              building a portfolio that stands out, filled with projects that
              you can show off on LinkedIn, GitHub, and even social media.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Homepart5;
