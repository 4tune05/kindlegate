"use client";
import React from "react";

function Aboutus() {
  return (
    <div className=" w-screen lg:w-screen lg:mx-auto md:p-5 mt-5">
      <div className="flex flex-col items-center justify-between lg:flex-row text-[#1E1E1E]">
        <div className="  ml-32 space-y-8 md:w-[30%]">
          <h1 className="text-[20px] font-bold">About Us</h1>
          <p className="text-[12px] font-normal">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis urna.
            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Lorem ipsum dolor sit amet, consectetuer adipiscing Maecenas porttitor
            congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus
            malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra.
          </p>
          <h1 className="text-[20px] font-bold">Our History</h1>
        </div>
        <div className="w-screen md:w-[30%] mt-10 flex justify-end items-end  lg:mt-10">
          <img 
            src='./Assett.svg' 
            alt='about us asset' 
            className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[500px]' 
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
