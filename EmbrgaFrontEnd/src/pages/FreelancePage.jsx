import React from "react";
import Nav from "../components/Nav";
import Header from "../components/FreelancePage/Header";
// import Services from "../components/FreelancePage/Services";
import Testimonials from "../components/FreelancePage/Testimonials";
import RunningSlider from "../components/FreelancePage/RunningSlider";
import Footer from "../components/Footer.jsx";

const FreelancePage = () => {
  return (
    <main className="min-h-screen kanit-medium scrollbar bg-customBlack w-full">
      <Nav />
      <Header />
      <RunningSlider />
      {/* <Services /> */}
      <Testimonials />
      <Footer />
    </main>
  );
};

export default FreelancePage;
