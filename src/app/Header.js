"use client"
import { useState } from "react";
import logo from "../assets/menu-nav-logo-1.png";
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
    <section className="relative">
      <div className="absolute top-0 z-50 flex justify-between pt-8 px-11 w-full h-[113px] uppercase items-center">
        <Link href="/">
          <Image src={logo} width={91} height={68} alt="Logo" />
        </Link>
        <div className="flex space-x-4 gap-11 font-medium text-white cursor-pointer">
          <Link href="/">Home</Link>
          <div>Our Mandate</div>
          <div>Programs</div>
          <Link href="/tribepage">Our Tribe</Link>
          <Link href="/news">News</Link>
          <div>Blog</div>
          <div>Contact Us</div>
          
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <div className="text-white">Get Involved</div>
            
            {isDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-[213px] rounded-[5px] border border-purple-500 bg-gray-800 z-10">
                
                <div className="px-5 py-2.5 m-2 border border-white rounded-[36px] flex items-center">
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
    </section>
  );
}

export default Header;




