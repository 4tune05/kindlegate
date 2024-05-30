import React from "react";
import Teamdata from "./Teamdata";

function Team() {
  return (
    <div className="   w-full p-6 lg:max-w-[1200px] lg:mx-auto md:p-5  mt-24">
      <div className=" text-[#1E1E1E] p-3 space-y-10 mb-4 flex flex-col justify-center items-center">
        <h1 className="font-bold text-[36px] leading-[72px] ">Our Team</h1>
        <p className=" font-normal text-[14px] leading-[200%]  md:w-[1000px]  text-left md:text-24px">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing
          Maecenasporttitor congue massa. Fusce posuere, magna sed pulvinar
          ultricies, puruslectus malesuada libero, sit amet commodo magna eros
          quis urna. Nunc viverra
        </p>
      </div>

      <Teamdata />
    </div>
  );
}

export default Team;
