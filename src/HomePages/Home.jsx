import React from "react";
import Firstslidersection from "./Firstslidersection";
import Secondgridsection from "./Secondgridsection";
import Thirdsection from "./Thirdsection";
import Fourthsection from "./Fourthsection";
import Slick from "./Carosel";
import Fifthsection from "./Fifthsection";
import Sixthsection from "./Sixthsection";
import Header2 from '../components/Header2'

const Home = () => {
  return (
    <div>
      
      <Header2 />
      <Firstslidersection />
      <Secondgridsection />
      <Thirdsection />
      <Fourthsection />
      <Slick />
      <Fifthsection />
      <Sixthsection />
 
    </div>
  );
};

export default Home;
