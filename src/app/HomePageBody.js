import React from "react";
import Image from "next/image";

function HomePageBody() {
  return (
    <div className="w-full relative h-[684px] bg-zinc-100 justify-between items-start inline-flex">
      <Image
        height={501}
        width={504}
        className="w-[504px] h-[501px] mt-4 -ml-24"
        src="/asset-71.svg"
        alt="Description of image"
      />
      <div className="flex flex-col mr-11 mt-10 ">
        <div className="w-[268px] h-7 pl-[5.56px] pr-[50.70px] justify-start items-center inline-flex">
          <div className="absolute  mt-7 right-24 w-[211.74px] h-7 text-gray-900 text-[32px] font-bold font-['Calibri'] leading-[72px]">
            OUR MANDATE
          </div>
          <div className="absolute right-24 mt-28  w-[200px] h-0 border-[3px] border-amber-400"></div>
        </div>

        <div className="w-[604px] mt-12 h-[180px] text-zinc-800 text-[15px] font-normal font-['Calibri'] leading-loose pr-11">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. <br />
        </div>

        <div className="w-[231px] h-7 pl-[4.79px] pr-[69.21px] justify-start items-center inline-flex">
          <div className="absolute right-24  text-sky-950 text-[32px] font-bold font-['Calibri'] leading-[72px]">
            OBJECTIVES
          </div>
          <div className="absolute right-24  w-[156.20px] h-0 border-[3px] border-amber-400 mt-11"></div>
        </div>

        <div className="w-[604px] mt-4 h-[180px] text-zinc-800 text-[15px] font-normal font-['Calibri'] leading-loose pr-11">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. <br />
        </div>
        <div className="ml-[280px] w-[251px] h-[60px] px-14 py-4 bg-cyan-500 rounded-[56px] justify-items-end items-center gap-2 flex">
          <div className="text-stone-900 text-[25px] font-bold font-['Calibri'] leading-7">
            LEARN MORE
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageBody;
