import React from 'react'

export default function Slide1({src, title, content}) {

  return (
    <div className="w-[1160px] h-[572px] relative">
      <div className="w-[532px] h-[572px] left-[628px] top-0 absolute bg-black/25" />
      <img
        className="w-[532px] h-[572px] left-[628px] absolute bg-cover"
        src={src}
        alt="Placeholder"
      />
      <div className="w-[672px] bg-[#4B4B4B] h-[354px] left-0 top-[144px] absolute">
        <div className="w-[586px] left-[52px] top-[15px] absolute text-white text-xl font-normal font-['Calibri'] ">
          <h1> {title}</h1> <br />
       
          {content}
        </div>
      </div>
    </div>
  );
}
