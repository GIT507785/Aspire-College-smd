import React from "react";
import About_img from "../assets/images/about.jpg";
import play_icon from "../assets/images/play_icon.png";

const About = ({ setPlayState }) => {
  return (
    <div id="about"
      className="w-[90%] mx-auto my-[100px] -mt-1 flex items-center justify-between 
      max-[800px]:flex-col"
    >
      {/* LEFT SIDE */}
      <div
        className="flex-[40%] relative max-[800px]:flex-[100%] 
        max-[800px]:order-2 max-[800px]:my-5"
      >
        <img
          src={About_img}
          alt=""
          className="w-[80%] h-[433px] rounded-lg object-cover max-[800px]:w-[200px] max-[800px]:h-[200px]"
        />

        {/* Play Icon (Enable if needed) */}
        {/* 
        <img
          src={play_icon}
          alt=""
          className="w-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 
          -translate-y-1/2 cursor-pointer"
          onClick={() => setPlayState(true)}
        /> 
        */}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-[56%] max-[800px]:flex-[100%]">
        <h3 className="font-semibold text-[16px] text-[#212EA0]">About College</h3>

        <h2 className="text-[35px] text-[#000f38] my-3 max-w-[400px]">
          Nuturing Tomorrow's Leaders Today
        </h2>

        <p className="text-[#676767] mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores,
          temporibus nulla hic officia minus doloremque ullam amet repudiandae
          corrupti veritatis adipisci ipsam suscipit quasi placeat consectetur
          eaque ea iusto!
        </p>

        <p className="text-[#676767] mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, iste
          eaque ipsa enim repudiandae est modi ducimus. Accusantium vel quas
          quos sed eius unde nobis, exercitationem vitae accusamus mollitia
          culpa!
        </p>

        <p className="text-[#676767] mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
          eligendi deserunt consequuntur omnis unde ipsam sequi, laboriosam odit
          aperiam, iusto libero labore reprehenderit voluptatibus assumenda
          harum quis consequatur ipsa mollitia?
        </p>
      </div>
    </div>
  );
};

export default About;
