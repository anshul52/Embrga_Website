import React from "react";
import Nav from "../components/Nav";
import Header from "../components/FreelancePage/Header";
import Services from "../components/FreelancePage/Services";
import Testimonials from "../components/FreelancePage/Testimonials";
import SampleProjects from "../components/FreelancePage/SampleProjects.jsx";
import RunningSlider from "../components/FreelancePage/RunningSlider";
import FreeAuditSection from "../components/FreelancePage/FreeAuditSection.jsx";
import Footer from "../components/Footer.jsx";

const FreelancePage = () => {
  return (
    <main className="min-h-screen kanit-medium scrollbar bg-customBlack w-full overflow-hidden">
      <Nav />
      <Header />
      <RunningSlider />
      <Services />
      <SampleProjects />
      <FreeAuditSection />
      {/* <Testimonials /> */}
      <Footer />
    </main>
  );
};

export default FreelancePage;
