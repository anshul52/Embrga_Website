import React from "react";
import { FreelanceTestimonailData } from "../../data/data";
import StarRating from "../ui/StarRating";

const Testimonials = () => {
  return (
    <section className="min-h-screen w-full text-white ">
      <h1 className="text-4xl text-center mb-10">Our Happy Customers</h1>

      <section className="w-full flex gap-4 py-10 justify-evenly">
        {FreelanceTestimonailData.map((card) => (
          <article
            key={card?.id}
            className="relative rounded-xl font-light text-sm p-4  bg-[#0d0d0d] h-42 w-[340px] border-b  border-gradient-to-t from-grey-900 to-transparent"
          >
            <div className="w-full bottom-0 z-30 absolute bg-[#22615F] blur-xl h-[14px]"></div>
            <header>
              <StarRating rating={card?.startCnt} />
              <h3>{card?.title}</h3>
            </header>
            <section>
              <p>{card?.description}</p>
              {/* <p>{card?.description}</p> */}
            </section>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Testimonials;
