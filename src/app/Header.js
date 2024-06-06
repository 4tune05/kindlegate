"use client";
import { useState, useEffect } from "react";
import logo from "../assets/menu-nav-logo-1.png";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 flex justify-between uppercase items-center w-full h-[113px] transition-colors duration-300 ${
        isScrolled ? "bg-[#14bde3]" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full px-11">
        <Link href="/">
          <Image src={logo} width={80} height={65} alt="Logo" />
        </Link>
        <div className="flex space-x-4 gap-11 font-medium text-white cursor-pointer">
          <Link href="/">Home</Link>
          <Link href="/mandate">Our Mandate</Link>

          <div className="relative group">
            <div className="text-white">Programs</div>
            <div className="absolute left-0 top-full mt-2 w-[213px] rounded-[5px] border border-blue-500 bg-[#F2F2F2] z-50 transition-all duration-1000 ease-in-out transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
              <Link
                href="/programs"
                className="dropdown-item px-5 py-2.5 m-2 border border-[#006991] rounded-[36px] flex items-center text-base font-bold leading-7 text-[#006991]"
              >
                PROGRAMS
              </Link>
              <Link href="/arts" className="dropdown-item">
                ARTS
              </Link>
              <Link href="/trustees" className="dropdown-item">
                LEADERSHIP
              </Link>
              <Link href="/entrepreneurship" className="dropdown-item">
                ENTREPRENEURSHIP
              </Link>
              <Link href="/food-shelter" className="dropdown-item">
                FOOD SHELTER
              </Link>
              <Link href="/sbg-awareness" className="dropdown-item">
                SDG AWARENESS
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="text-white">Our Tribe</div>
            <div className="absolute left-0 top-full mt-2 w-[213px] rounded-[5px] border border-blue-500 bg-[#F2F2F2] z-50 transition-all duration-1000 ease-in-out transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
              <div className="dropdown-item px-5 py-2.5 m-2 border border-[#006991] rounded-[36px] flex items-center text-base font-bold leading-7 text-[#006991]">
                <Link className="" href="/tribepage">
                  OUR TRIBE
                </Link>
              </div>
              <Link href="/board" className="dropdown-item">
                BOARD OF DIRECTORS
              </Link>
              <Link href="/council" className="dropdown-item">
                EXECUTIVE ADVISORY
              </Link>
              <Link href="/partner" className="dropdown-item">
                DEVELOPMENT TEAM
              </Link>
            </div>
          </div>

          <Link href="/news">News</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact-us">Contact Us</Link>

          <div className="relative group">
            <div className="text-white">Get Involved</div>
            <div className="absolute left-0 top-full mt-2 w-[213px] rounded-[5px] border border-blue-500 bg-[#F2F2F2] z-50 transition-all duration-1000 ease-in-out transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
              <Link
                href="/involved"
                className="dropdown-item px-5 py-2.5 m-2 border border-[#006991] rounded-[36px] flex items-center text-base font-bold leading-7 text-[#006991]"
              >
                GET INVOLVED
              </Link>
              <Link href="/sponsor" className="dropdown-item">
                AS A SPONSOR
              </Link>
              <Link href="/mentor" className="dropdown-item">
                AS A MENTOR
              </Link>
              <Link href="/volunteer" className="dropdown-item">
                AS VOLUNTEER
              </Link>
            </div>
          </div>
        </div>

        <button className="bg-[#00A859] px-[28px] rounded-full uppercase outline outline-2 text-white inline-flex py-[5px]">
          Donate
        </button>
      </div>
    </header>
  );
}

export default Header;
