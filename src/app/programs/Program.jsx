"use client";
import React from "react";
import Link from 'next/link';
import Image from "next/legacy/image";
import maskgroup from "/public/Mask group.svg"; 

function Program() {
  return (
    <section className="overflow-hidden">
     
    <div className=" w-full h-screen  p-5 flex items-center text-left text-[#F1F1F1]">
      <Image
        src={maskgroup}
        layout="fill"
        objectFit="cover"
        alt="maskgroup"
      />

     <div className="absolute inset-0 bg-black opacity-[-50]"></div>
    <div className="absolute top-[100px] md:top-[270px] md:w-[589px] z-10 md:ml-[8%] text-center text-zinc-100">
    <h1 className="font-bold md:text-[50px] mb-4">
      <Link href="/mandate">
        PROGRAMS
      </Link>
    </h1>
    <p className="md:text-xl font-normal">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.
    </p>
  </div>
   </div>
  </section>


 );
}

export default Program;
