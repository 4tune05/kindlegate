// app/HomePageBody.js
import React from "react";
import Image from "next/image";
import Slider from "react-slick";

function HomePageBody() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full relative h-[684px] bg-zinc-100 flex justify-center items-start">
      <Slider {...settings} className="w-full h-full">
        <div className="flex items-center justify-center flex-col p-8">
          <Image
            height={501}
            width={504}
            className="w-[504px] h-[501px] mt-4"
            src="/asset-71.svg"
            alt="Description of image"
          />
          <div className="flex flex-col mt-10 ml-auto mr-10 text-center">
            <div className="w-full h-7 pl-[5.56px] pr-[50.70px] justify-center items-center inline-flex">
              <div className="w-[211.74px] h-7 text-gray-900 text-[32px] font-bold font-['Calibri'] leading-[72px]">
                OUR MANDATE
              </div>
            </div>
            <div className="w-[156.44px] h-0 border-4 border-amber-400 mt-8 mx-auto"></div>
            <div className="w-[604px] h-[180px] text-zinc-800 text-[15px] font-normal font-['Calibri'] leading-loose mt-4 mx-auto">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna
              eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a
              tellus. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col p-8">
          <div className="flex flex-col mt-10 ml-auto mr-10 text-center">
            <div className="w-full h-7 pl-[5.56px] pr-[50.70px] justify-center items-center inline-flex">
              <div className="w-[211.74px] h-7 text-gray-900 text-[32px] font-bold font-['Calibri'] leading-[72px]">
                OBJECTIVES
              </div>
            </div>
            <div className="w-[156.44px] h-0 border-4 border-amber-400 mt-8 mx-auto"></div>
            <div className="w-[604px] h-[180px] text-zinc-800 text-[15px] font-normal font-['Calibri'] leading-loose mt-4 mx-auto">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna
              eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a
              tellus. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HomePageBody;
