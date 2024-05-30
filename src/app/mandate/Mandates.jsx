import React from "react";

import Image from "next/legacy/image";
import cuteblackbaby from "/public/cuteblackbaby.svg";

function Mandates() {
  return (
    <section className="overflow-hidden">
      <div className=" w-full h-screen  p-5 flex items-center text-left text-[#F1F1F1]">
        <Image
          src={cuteblackbaby}
          layout="fill"
          objectFit="cover"
          alt="Cute Black Baby"
        />
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="absolute top-[100px] md:top-[270px] md:w-[589px] z-50 md:ml-[8%] text-center text-zinc-100">
          <h1 className="font-bold md:text-[50px] mb-4">
            OUR MANDATE
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra imperdiet enim. Fusce est.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mandates;
