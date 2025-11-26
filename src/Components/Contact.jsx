import React from "react";
import message_icon from "../assets/images/message.png";
import call_icon from "../assets/images/phone.png";
import gmail_icon from "../assets/images/gmail.png";
import location_icon from "../assets/images/location.png";
import {ArrowRight}  from 'lucide-react'
import Title from "./Title";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6533ea21-9ff8-41e2-9eea-f2d619f982d6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="#Contact">
        <div className="mt-10 sm:mt-2">
          <Title subTitle='Contact Us' title='Get in Touch'/>
        </div>
    <div className="max-w-[80%] mx-auto my-15  flex flex-col sm:mt-0 
     lg:flex-row items-center justify-between gap-10">
      {/* LEFT */}
      <div className="flex-1 text-gray-600 -mt-15 sm:-mt-35 ">
        <h3 className="text-[25px] font-medium text-[#000f38] flex items-center mb-5">
          Send Us a Message
          <img src={message_icon} alt="" className="w-[35px] ml-2" />
        </h3>

        <p className="max-w-[450px] leading-[1.3]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum totam
          fuga magni velit nesciunt assumenda hic suscipit est repudiandae.
        </p>

        <ul className="mt-5">
          <li className="flex items-center my-4">
            <img src={gmail_icon} alt="" className="w-[25px] mr-2" />
            ali.nawaz6674594@gmail.com
          </li>

          <li className="flex items-center my-4">
            <img src={call_icon} alt="" className="w-[25px] mr-2" />
            +923366674594
          </li>

          <li className="flex items-center my-4">
            <img src={location_icon} alt="" className="w-[25px] mr-2" />
            Faislabad, Samundari
          </li>
        </ul>
      </div>

      {/* RIGHT (FORM) */}
      <div className="flex-1">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            className="w-full bg-[#EBECFE] p-3 mt-1 mb-4 outline-none"
            />

          <label>Phone Number</label>
          <input
            type="tel"
            name="Phone"
            placeholder="Enter Your Mobile Number"
            required
            className="w-full bg-[#EBECFE] p-3 mt-1 mb-4 outline-none"
            />

          <label>Write Your Message Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
            className="w-full bg-[#EBECFE] p-3 mt-1 mb-4 outline-none resize-none"
            />

          <button
            type="submit"
            className="flex items-center bg-[#212AE0] text-white px-6 py-3 rounded-md"
            >
            Submit Now
          <ArrowRight/>
          </button>
        </form>

        <span className="block mt-4">{result}</span>
      </div>
    </div>
              </div>
  );
};

export default Contact;
