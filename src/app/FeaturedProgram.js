import React from "react";
import Image from "next/image";
function FeaturedProgram() {
  return (
    <div className="w-full h-[767px] relative bg-white  justify-start items-start">
      <div className="mb-4 text-center  text-gray-900 text-4xl font-bold font-['Calibri'] leading-[72px]">
        Featured Programs
      </div>
      <div className="flex items-center px-8 gap-20 justify-center flex-row">
        <div className="flex flex-col justify-start items-start gap-[35px]">
          <Image
            width={365}
            height={236}
            quality={100}
            className="w-[365px] h-[236px] origin-top-left rounded-[20px]"
            src="/side-view-smiley-man-holding-laptop-1.svg"
            alt="Leadership"
          />
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="h-[62px] text-center text-sky-950 text-2xl font-bold font-['Calibri'] leading-7">
              Leadership
            </div>
            <div className="w-[353px] text-black text-xl font-normal font-['Calibri'] leading-snug">
              Promoting thought-based Leadership in the Community
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="text-emerald-600 cursor-pointer text-2xl font-normal font-['Calibri'] underline leading-loose">
                Read more
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[378px] h-[435px] flex flex-col justify-start items-start gap-[41px]">
          <Image
            width={365}
            height={236}
            quality={100}
            className="w-[365px] h-[236px] rounded-[20px]"
            src="/confident-businessman-working-his-laptop-2.svg"
            alt="Arts"
          />
          <div className="w-[365px] text-start text-sky-950 text-2xl font-bold font-['Calibri'] leading-7">
           Entrepreneurship
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="w-[378px] text-justify text-black text-xl font-normal font-['Calibri'] leading-snug">
              We engage the community in recreational activities....
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="text-emerald-600 cursor-pointer text-2xl font-normal font-['Calibri'] underline leading-loose">
                Read more
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col justify-start items-start gap-[42px]">
          <Image
            width={365}
            height={236}
            quality={100}
            className="w-[365px] h-[236px] rounded-[20px]"
            src="/pexels-steve-johnson-11457201.svg"
            alt="Entrepreneurship"
          />
          <div className="w-[366px] text-center text-sky-950 text-2xl font-bold font-['Calibri'] leading-7">
            Art
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="w-[377px] text-black text-xl font-normal font-['Calibri'] leading-snug">
              Engage in entrepreneurial activities and learn the necessary
              skills to make it
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="text-emerald-600 cursor-pointer text-2xl font-normal font-['Calibri'] underline leading-loose">
                Read more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProgram;
