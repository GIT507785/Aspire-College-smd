import React from "react";
import arrow2 from "../assets/images/arrow2.jpg";
import aspireImg from "../assets/images/aspire.jpg";
import {ArrowRight}  from 'lucide-react'


const Hero = () => {
  return (
    <div href="#hero"
      className="w-full min-h-screen text-white flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${aspireImg})`,
      }}
    >
      <div className="text-center max-w-[800px] px-4">
        <h1 className="text-[60px] font-semibold font-serif max-[850px]:text-[30px] max-[650px]:text-[20px] max-[650px]:max-w-[400px] max-[650px]:mx-auto">
          We Ensure better Education for a better world
        </h1>

        <p className="max-w-[700px] mx-auto my-2 mb-5 leading-[1.4] max-[650px]:text-[14px] max-[650px]:my-[15px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
          veritatis quod accusantium, saepe iure deleniti perferendis. <br /> At
          earum ipsum dolor est eligendi unde. Praesentium officiis, facilis
          suscipit velit ipsam perferendis?
        </p>

        <button className="bg-white cursor-pointer text-black px-6 py-3 rounded-md font-medium flex items-center gap-2 mx-auto hover:opacity-90 transition">
          Explore more
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
