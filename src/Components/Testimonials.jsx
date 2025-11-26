import React, { useRef, useState, useEffect } from "react";
import next_icon from "../assets/images/next_icon.png";
import back_icon from "../assets/images/back_icon.png";
import Ali from "../assets/images/Ali.jpg";
import adnan from "../assets/images/adnan.jpg";
import Nouman from "../assets/images/Nouman.jpg";
import haseeb from "../assets/images/haseeb.jpg";

const testimonials = [
  {
    img: adnan,
    name: "WAJEEH UL HASSAN",
    company: "Edusity, USA",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id sed expedita error officiis..."
  },
  {
    img: Ali,
    name: "AHMAD MUKHTAR",
    company: "Edusity, USA",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    img: haseeb,
    name: "HAFIZ HASEEB",
    company: "Edusity, USA",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    img: Nouman,
    name: "SALMAN HAIDER",
    company: "Edusity, USA",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  }
];

const Testimonials = () => {
  const slider = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideTo = (index) => {
    setCurrentIndex(index);
    slider.current.style.transform = `translateX(-${index * 100}%)`;
  };

  const slideForward = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    slideTo(nextIndex);
  };

  const slideBackward = () => {
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    slideTo(prevIndex);
  };

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(slideForward, 4000); // 4s
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative max-w-5xl mx-auto px-4 py-16">
      
      {/* BACK BTN */}
<button
  onClick={slideBackward}
  className="
    hidden sm:block
    absolute top-1/2 left-60
    cursor-pointer 
    -translate-y-1/2 
    bg-white shadow-lg p-3 rounded-full 
    hover:scale-110 transition-transform
    z-20
  "
>
  <img src={back_icon} alt="Back" className="w-5 h-5" />
</button>

{/* NEXT BTN */}
<button
  onClick={slideForward}
  className="
    absolute top-1/2  right-60
    cursor-pointer
    hidden sm:block
    -translate-y-1/2 
    bg-white shadow-lg p-3 rounded-full 
    hover:scale-110 transition-transform
    z-20
  "
>
  <img src={next_icon} alt="Next" className="w-5 h-5" />
</button>


      {/* SLIDER */}
      <div className="overflow-hidden rounded-xl -mt-20 ">
        <ul
          ref={slider}
          className="flex transition-transform duration-700 ease-in-out"
        >
          {testimonials.map((t, idx) => (
            <li key={idx} className="w-full flex-shrink-0 px-4 flex justify-center">
       <div className="
      bg-linear-to-r from-purple-500 via-pink-500 to-orange-400 
      p-8 rounded-2xl shadow-xl 
      hover:scale-105 transition-transform 
      max-w-sm w-full  h-50 sm:h-full      /* ⬅⬅ REDUCED CARD WIDTH */
    "
  >
    <div className="flex items-center mb-4">
      <img
        src={t.img}
        alt={t.name}
        className="w-14 h-14 rounded-full border-4 border-white shadow-md"
      />
      <div className="ml-4">
        <h3 className="text-white font-semibold text-lg">{t.name}</h3>
        <p className="text-white/80 text-sm">{t.company}</p>
      </div>
    </div>
    <p className="text-white/90 text-base">{t.text}</p>
  </div>
</li>

          ))}
        </ul>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
              currentIndex === idx ? "bg-purple-600" : "bg-gray-300"
            }`}
            onClick={() => slideTo(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
