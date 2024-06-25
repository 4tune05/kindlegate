import React from "react";
import Link from "next/link";
function OurTeam({ title, description, buttonText, board, href }) {
  return (
    <div className="w-full bg-white  py-10 mx-auto">
      <h2 className="text-center text-black text-4xl font-bold font-['Calibri'] leading-[72px] mb-10">
        {title}
      </h2>
      <div className="w-full flex justify-center items-start gap-[178px]">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="w-[400px] h-[360px] relative">
            <div className="w-[400px] h-[360px] absolute bg-amber-400 rounded-[10px]" />
            <div className="w-32 h-32 absolute bg-stone-300 rounded-full left-[136px] top-[55px]" />
            <div className="w-[268px] h-[165px] absolute bg-zinc-300 rounded-tl-[100px] rounded-tr-[100px] left-[66px] top-[195px]" />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-center text-black text-[32px] font-bold font-['Calibri'] leading-[72px]">
            {board}
            </div>
            <div className="w-[208px] h-[0px] border-[3px] border-amber-400"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="w-[644px] text-black text-xl font-normal font-['Calibri'] leading-snug">
            {description}
          </div>
          <Link href={href}
            className="px-14 py-4 bg-cyan-500 rounded-[56px] flex justify-center items-center gap-2"
            
          >
            <div className="text-sky-950 text-[25px] font-bold font-['Calibri'] leading-7">
              {buttonText}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
