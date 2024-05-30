"use client";
import React from "react";
import Image from "next/legacy/image";

import Program from "./Program";



//imported images
import smileyman from "/public/smileyman.svg";
import confidentbusinessman from "/public/confidentbusinessman.svg";
import stevejohnson from "/public/stevejohnson.svg";
import volunteering from "/public/volunteering.svg";
import beginnerskilled from "/public/beginnerskilled.svg";
import africantribal from "/public/africantribal.svg";
import CloserToFooter from "../CloserToFooter";

export default function page() {
  return (
    <section className="overflow-hidden.">
     
      <Program />
      <section>
        <div className="container mx-auto p-10">
          <h1 className="text-center text-2xl font-bold mb-8">What We Do</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="flex flex-col items-center text-center mt-10">
              <Image
                src={smileyman}
                width={300}
                height={200}
                className="h-[200px] w-auto rounded-3xl"
                alt="Leadership"
              />
              <h2 className="text-xl font-semibold mt-4   ">LEADERSHIP</h2>
              <div className="w-[85px] h-[0px] border-2 rounded-[3px] border-amber-400"></div>
            </div>
            <div className="gap-[96px]">
              <p className="mr-24 p-6 font-normal text-[#2B2B2B] text-justify leading-[22.5px] text-sm">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce
                est. Vivamus a tellus. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
                porttitor congue massa. Fusce posuere, magna sed pulvinar
                ultricies, purus lectus malesuada libero, sit amet commodo magna
                eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus
                a tellus. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Lorem ipsum dolor
                sit amet, consectetuer adipiscing elit. Maecenas porttitor
                congue massa. Fusce posuere, magna sed pulvinar ultricies, purus
                lectus malesuada libero, sit amet commodo magna eros quis urna.
                Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
            </div>

            <div className=" mt-10 flex flex-col items-center text-center">
              <Image
                src={confidentbusinessman}
                width={300}
                height={200}
                className="h-[200px] w-auto rounded-3xl"
                alt="Entrepreneurship"
              />
              <h2 className="text-xl font-semibold mt-4">ENTREPRENEURSHIP</h2>
              <div className="w-[132px] h-[0px] border-2 rounded-[3px] border-amber-400"></div>
            </div>
            <div>
              {" "}
              <p className="mr-16 p-6 font-normal text-[#2B2B2B] text-justify leading-[22.5px] text-sm">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce
                est. Vivamus a tellus. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
                porttitor congue massa. Fusce posuere, magna sed pulvinar
                ultricies, purus lectus malesuada libero, sit amet commodo magna
                eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus
                a tellus. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Lorem ipsum dolor
                sit amet, consectetuer adipiscing elit. Maecenas porttitor
                congue massa. Fusce posuere, magna sed pulvinar ultricies, purus
                lectus malesuada libero, sit amet commodo magna eros quis urna.
                Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
            </div>

            <div className=" mt-10 flex flex-col items-center text-center">
              <Image
                src={stevejohnson}
                width={300}
                height={200}
                className="h-[200px] w-auto rounded-3xl"
                alt="Arts Exhibition"
              />
              <h2 className="text-xl font-semibold mt-4">ARTS EXHIBITION</h2>
              <div className="w-[124px] h-[0px] border-2 rounded-[3px] border-amber-400"></div>
            </div>
            <div>
              <p className="mr-16 p-6 font-normal text-[#2B2B2B] text-justify leading-[22.5px] text-sm">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce
                est. Vivamus a tellus. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
                porttitor congue massa. Fusce posuere, magna sed pulvinar
                ultricies, purus lectus malesuada libero, sit amet commodo magna
                eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus
                a tellus. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Lorem ipsum dolor
                sit amet, consectetuer adipiscing elit. Maecenas porttitor
                congue massa. Fusce posuere, magna sed pulvinar ultricies, purus
                lectus malesuada libero, sit amet commodo magna eros quis urna.
                Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center text-center">
              <Image
                src={volunteering}
                width={300}
                height={200}
                className="h-[200px] w-auto rounded-3xl"
                alt="Food and Shelter Program"
              />
              <h2 className="text-xl font-semibold mt-4">
                FOOD & SHELTER PROGRAM
              </h2>
              <div className="w-[220px] h-[0px] border-2 rounded-[3px] border-amber-400"></div>
            </div>
            <div>
              <p className="mr-16 p-6 font-normal text-[#2B2B2B] text-justify leading-[22.5px] text-sm">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce
                est. Vivamus a tellus. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
                porttitor congue massa. Fusce posuere, magna sed pulvinar
                ultricies, purus lectus malesuada libero, sit amet commodo magna
                eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus
                a tellus. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Lorem ipsum dolor
                sit amet, consectetuer adipiscing elit. Maecenas porttitor
                congue massa. Fusce posuere, magna sed pulvinar ultricies, purus
                lectus malesuada libero, sit amet commodo magna eros quis urna.
                Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
            </div>

            <div className=" mt-10 flex flex-col items-center text-center">
              <Image
                src={beginnerskilled}
                width={300}
                height={200}
                className="h-[200px] w-auto rounded-3xl"
                alt="IT Training"
              />
              <h2 className="text-xl font-semibold mt-4">IT TRAINING</h2>
              <div className="w-[220px] h-[0px] border-2 rounded-[3px] border-amber-400"></div>
            </div>
            <div>
              {" "}
              <p className="mr-16 p-6 font-normal text-[#2B2B2B] text-justify leading-[22.5px] text-sm">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce
                est. Vivamus a tellus. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
                porttitor congue massa. Fusce posuere, magna sed pulvinar
                ultricies, purus lectus malesuada libero, sit amet commodo magna
                eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus
                a tellus. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Lorem ipsum dolor
                sit amet, consectetuer adipiscing elit. Maecenas porttitor
                congue massa. Fusce posuere, magna sed pulvinar ultricies, purus
                lectus malesuada libero, sit amet commodo magna eros quis urna.
                Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center text-center">
              <Image
                src={africantribal}
                width={300}
                height={200}
                className="h-[200px] w-auto rounded-3xl"
                alt="Vocational Training and Workshop"
              />
              <h2 className="text-xl font-semibold mt-4">
                VOCATIONAL TRAINING & WORKSHOP
              </h2>
              <div className="w-[306px] h-[0px] border-2 rounded-[3px] border-amber-400"></div>
            </div>
            <p className="mr-16 p-6 font-normal text-[#2B2B2B] text-justify leading-[22.5px] text-sm ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna
              eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a
              tellus. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Maecenas porttitor congue massa.
              Fusce posuere, magna sed pulvinar ultricies, purus lectus
              malesuada libero, sit amet commodo magna eros quis urna. Nunc
              viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,
              magna sed pulvinar ultricies, purus lectus malesuada libero, sit
              amet commodo magna eros quis urna. Nunc viverra imperdiet enim.
              Fusce est. Vivamus a tellus.Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
        </div>
      </section>
     <CloserToFooter/>
      
    </section>
  );
}
