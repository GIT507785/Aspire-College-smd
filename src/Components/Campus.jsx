import React from "react";
import hafiz1 from "../assets/images/hafiz1.jpg";
import hafiz2 from "../assets/images/hafiz2.jpg";
import hafiz3 from "../assets/images/hafiz3.jpg";
import hafiz4 from "../assets/images/hafiz4.jpg";
import arrow2 from "../assets/images/arrow2.jpg";
import {ArrowRight}  from 'lucide-react'


const Campus = () => {
  return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div id="camp" className="flex items-center gap-2 h-[400px] w-full max-w-4xl mt-10 mx-auto my-30">
                <div className="relative group flex-grow transition-all  sm:w-56 rounded-lg 
                overflow-hidden h-[400px] duration-500 hover:w-full w-full">
                    <img className="h-full w-full object-cover object-center"
                        src={hafiz1}
                        alt="image" />
                </div>
                <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src={hafiz2}
                        alt="image" />
                </div>
                <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src={hafiz3}
                        alt="image" />
                </div>
                <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src={hafiz4}
                        alt="image" />
                </div>
                <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&h=800&w=800&auto=format&fit=crop"
                        alt="image" />
                </div>
                <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&h=800&w=800&auto=format&fit=crop"
                        alt="image" />
                </div>
            </div>
        </>
    );
};

export default Campus;
