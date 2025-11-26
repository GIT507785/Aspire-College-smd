import React from "react";

const Title = ({ subTitle, title }) => {
  return (
    <div className="text-center text-[#212EA0] text-[15px] font-semibold uppercase  
   -mt-19  sm:mt-1 my-16  sm:my-[70px]">
      <p>{subTitle}</p>
      <h2 className="text-[32px] text-[#000f38] mt-1 normal-case">{title}</h2>
    </div>
  );
};

export default Title;
