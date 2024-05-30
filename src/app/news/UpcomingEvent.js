import React from "react";

export default function UpcomingEvent() {
  return (
    <section className="w-full relative bg-white flex flex-col items-center">
     

      <div className="relative w-[1154px] h-[379px] mb-[53px] mt-[53px] bg-white rounded-[10px] shadow border border-gray-200 flex flex-col items-center">
        <img
          className="absolute w-[499px] h-[260px] left-[57px] top-[57px] rounded-3xl"
          src="/rectangle 1270.png"
          alt="Event"
        />

        <div className="absolute left-[613px] top-[23px] flex flex-col justify-start items-start gap-4">
          <div className="text-black text-[32px] font-bold font-['Calibri'] leading-[72px]">
            About this Event
          </div>
          <div className="text-sky-950 text-xl font-normal font-['Calibri'] leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>
        </div>

        <div className="absolute left-[23px] top-[160px] w-[119px] h-[82px] bg-amber-400 rounded-[5px] flex flex-col justify-center items-center gap-2.5">
          <div className="text-gray-900 text-base font-bold font-['Open Sans'] leading-normal">
            23 Juli
          </div>
          <div className="text-gray-900 text-[32px] font-bold font-['Open Sans'] leading-normal">
            2023
          </div>
        </div>

        <div className="absolute left-[613px] top-[260px] w-[200px] h-[54px] bg-amber-400 rounded-[56px] flex justify-center items-center gap-2">
          <div className="text-zinc-800 text-xl font-bold font-['Calibri'] leading-7">
            JOIN NOW
          </div>
        </div>
      </div>
    </section>
  );
}
