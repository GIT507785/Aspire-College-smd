import React from "react";

import program1 from "../assets/images/program1.jpg";
import program2 from "../assets/images/program2.jpg";
import program3 from "../assets/images/program3.jpg";

import program_icon1 from "../assets/images/program_icon1.jpg";
import program_icon2 from "../assets/images/program_icon2.jpg";
import program_icon3 from "../assets/images/program_icon3.jpg";
import Title from "./Title";

const Programs = () => {
  return (
  
 <div id="programs">

        <div className="mt-25 sm:mt-20">
<Title subTitle='OUr PROGRAM' title='What We Offer'/>
        </div>

    <div id="#programs" className="w-[75%] mx-auto  sm:mt-2 sm:my-20 flex items-center justify-between gap-5 
      max-[1200px]:flex-col max-[1000px]:flex-col max-[850px]:flex-col max-[650px]:flex-col">
       
      {/* Program 1 */}
      <div className="flex-[31%] relative group max-[1200px]:w-full max-[650px]:my-5">
        <img src={program1} alt="" className="w-full h-[300px] rounded-lg object-cover" />

        {/* Caption Overlay */}
        <div
          className="absolute inset-0 bg-[rgba(3,4,8,0.87)] rounded-lg flex flex-col 
          items-center justify-center text-white opacity-0 group-hover:opacity-100 
          transition-all duration-700 cursor-pointer pt-[-50px] group-hover:pt-0"
          >
          <img src={program_icon1} alt="" className="w-[60px] mb-3" />
          <p>Graduation Degree</p>
        </div>
      </div>

      {/* Program 2 */}
      <div className="flex-[31%] relative group max-[1200px]:w-full max-[650px]:my-5">
        <img src={program2} alt="" className="w-full h-[300px] rounded-lg object-cover" />

        <div
          className="absolute inset-0 bg-[rgba(3,4,8,0.87)] rounded-lg flex flex-col 
          items-center justify-center text-white opacity-0 group-hover:opacity-100 
          transition-all duration-700 cursor-pointer pt-[-50px] group-hover:pt-0"
        >
          <img src={program_icon2} alt="" className="w-[60px] mb-3" />
          <p>Masters Degree</p>
        </div>
      </div>

      {/* Program 3 */}
      <div className="flex-[31%] relative group max-[1200px]:w-full max-[650px]:my-5">
        <img src={program3} alt="" className="w-full h-[300px] rounded-lg object-cover" />

        <div
          className="absolute inset-0 bg-[rgba(3,4,8,0.87)] rounded-lg flex flex-col 
          items-center justify-center text-white opacity-0 group-hover:opacity-100 
          transition-all duration-700 cursor-pointer pt-[-50px] group-hover:pt-0"
        >
          <img src={program_icon3} alt="" className="w-[60px] mb-3" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
          </div>
  );
};

export default Programs;
