"use client";
import { useState } from "react";
import logo from "../public/menu-nav-logo-1.png";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full max-w-[1280px] p-1 mx-auto  flex justify-between  uppercase items-center">
      <Link href="/">
        <Image src={logo} width={80} height={80} alt="Logo" />
      </Link>
      <div className="flex items-center space-x-11  font-medium text-white cursor-pointer">
        <Link href="/">Home</Link>
        <div>Our Mandate</div>
        <div>Programs</div>
        <Link href="/tribepage">Our Tribe</Link>
        <Link href="/news">News</Link>
        <div>Blog</div>
        <Link href="/contact-us">
          <div>Contact Us</div>
        </Link>

        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <Link href="/involved">
            {" "}
            <div className="text-white">Get Involved</div>
          </Link>

          {isDropdownOpen && (
            <div className="absolute left-0 top-full mt-2 w-[213px] rounded-[5px] border border-purple-500 bg-gray-800 z-10">
              <div className="px-5 py-2.5 m-2 border border-white rounded-[36px] flex items-center">
                <Link href="/involved"></Link>
                <div className="text-white text-base font-bold leading-7">
                  GET INVOLVED
                </div>
              </div>

              <div className="px-5 py-2.5 m-2 bg-cyan-500 rounded-[10px] flex items-center">
                <Link
                  className="text-white text-base font-bold font-['Abhaya Libre'] leading-7"
                  href="/sponsor"
                >
                  AS A SPONSOR
                </Link>
              </div>
              <div className="px-5 py-2.5 m-2 bg-cyan-500 rounded-[10px] flex items-center">
                <Link
                  className="text-white text-base font-bold font-['Abhaya Libre'] leading-7"
                  href="/mentor"
                >
                  AS A MENTOR
                </Link>
              </div>
              <div className="px-5 py-2.5 m-2 bg-cyan-500 rounded-[10px] flex items-center">
                <Link
                  className="text-white text-base font-bold font-['Abhaya Libre'] leading-7"
                  href="/volunteer"
                >
                  AS VOLUNTEER
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <button className="bg-[#00A859] px-[28px] rounded-full uppercase outline outline-2 text-white inline-flex py-[5px]">
        Donate
      </button>
    </div>
  );
}

export default Header;
