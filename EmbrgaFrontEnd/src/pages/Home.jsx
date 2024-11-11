import React from "react";
import Nav from "../components/Nav";
import Homepart1 from "../components/Home/Homepart1";
import Homepart2 from "../components/Home/Homepart2";
import Homepart3 from "../components/Home/Homepart3";
import Homepart4 from "../components/Home/Homepart4";
import Homepart5 from "../components/Home/Homepart5";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="min-h-[100vh] scrollbar bg-[#fff] w-full">
      <Nav />
      <Homepart1 />
      <Homepart3 />
      <Homepart2 />
      <Homepart4 />
      <Homepart5 />
      <Footer />
    </div>
  );
};

export default Home;
