import React from "react";
import { BlogData } from "./BlogData";
import Image from "next/image";

export default function BlogBody() {
  return (
    <section className="mt-[70px] relative pb-[222px]">
      {BlogData.map((blog, index) => (
        <div key={blog.id} className="mb-8 px-[126px]">
          <div className="w-[696px] text-stone-900 text-[40px] font-bold font-['Calibri'] leading-[49.50px] mb-4">
            {blog.title}
          </div>
          <div className="w-[550px] h-[0px] border-4 border-amber-400 mb-4"></div>
          <div className="mb-[41px] text-stone-900 text-xl font-normal font-['Calibri'] leading-[43px]">
            {blog.date}
          </div>
          <div
            className={`flex ${
              index === 1 ? "flex-row-reverse" : "flex-row"
            } gap-4 items-start`}
          >
            {blog.image && (
              <div className="relative flex-shrink-0">
                <Image
                  src={blog.image}
                  width={478}
                  height={347}
                  alt="Blog Image"
                />
                <Image
                  src="/frame 337.png"
                  width={478}
                  height={347}
                  className="absolute top-0 left-0"
                  alt="Overlay Image"
                />
              </div>
            )}
            <div
              className={`w-[670px] ${
                blog.image && index === 1 ? "mr-[100px]" : ""
              } text-zinc-800 text-xl font-normal font-['Calibri'] leading-snug text-left`}
            >
              {blog.text}
            </div>
          </div>
        </div>
      ))}
      <div className="absolute pb-32 bottom-0 flex flex-col justify-center items-center gap-4 left-0 right-0 ">
        <svg
          className="w-20"
          viewBox="0 0 90 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 37">
            <g id="Group 35">
              <circle id="Ellipse 12" cx="74" cy="16" r="16" fill="#14BDE3" />
              <path
                id="Vector 1"
                d="M69 7L78 16L69 25"
                stroke="black"
                stroke-width="2"
              />
            </g>
            <g id="Group 36">
              <circle
                id="Ellipse 12_2"
                cx="16"
                cy="16"
                r="16"
                transform="rotate(-180 16 16)"
                fill="#14BDE3"
              />
              <path
                id="Vector 1_2"
                d="M21 25L12 16L21 7"
                stroke="black"
                stroke-width="2"
              />
            </g>
          </g>
        </svg>
        <svg
          className=" w-12"
          viewBox="0 0 54 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 38">
            <circle id="Ellipse 13" cx="3" cy="3" r="3" fill="#14BDE3" />
            <circle id="Ellipse 14" cx="15" cy="3" r="3" fill="#D9D9D9" />
            <circle id="Ellipse 15" cx="27" cy="3" r="3" fill="#D9D9D9" />
            <circle id="Ellipse 16" cx="39" cy="3" r="3" fill="#D9D9D9" />
            <circle id="Ellipse 17" cx="51" cy="3" r="3" fill="#D9D9D9" />
          </g>
        </svg>
      </div>
    </section>
  );
}
