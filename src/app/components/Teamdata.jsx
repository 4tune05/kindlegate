import React from "react";
import Image from "next/legacy/image";
import { CiUser } from "react-icons/ci";

// Sample data array
const data = [
  {
    id: 1,
    title: "TRUSTEES",
    header: "Maecenas porttitor congue massa",
    description:
      "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina",
  },
  {
    id: 2,
    title: "BOARD OF DIRECTORS",
    header: "Maecenas porttitor congue massa",
    description:
      "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina",
  },
  {
    id: 3,
    title: "GOVERNING COUNCIL",
    header: "Maecenas porttitor congue massa",
    description:
      "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina",
  },
  {
    id: 4,
    title: "VOLUNTEERS",
    header: "Maecenas porttitor congue massa",
    description:
      "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina",
  },
  {
    id: 5,
    title: "SPONSORS",
    header: "Maecenas porttitor congue massa",
    description:
      "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina",
  },
  {
    id: 6,
    title: "MENTORS",
    header: "Maecenas porttitor congue massa",
    description:
      "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina",
  },
];

const Teamdata = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  mx-auto lg:ml-12 p-4">
      {data.map((item) => (
        <div key={item.id} className="p-3 w-full text-left text-[#1E1E1E] mb-6">
          <CiUser className="bg-[#E3B522] w-full h-[224px] md:w-[230px] text-[#D9D9D9] " />
          <h1 className="bg-[#14BDE3] p-2 text-center w-full h-[48px] md:w-[230px] mb-3">
            {item.title}
          </h1>
          <div className="bg-[#FFFFFF] w-full h-[69px] md:w-[230px]">
            <h2 className="mt-2 md:mt-3 font-bold text-[12px] leading-[16px]">
              {item.header}
            </h2>
            <p className="mt-2 font-normal text-[14px] leading-[16px] ">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Teamdata;
