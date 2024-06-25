"use client";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/menu-nav-logo-1.png";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const involvedDropdownRef = useRef(null);
  const programDropdownRef = useRef(null);
  const tribeDropdownRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        involvedDropdownRef.current &&
        !involvedDropdownRef.current.contains(event.target) &&
        programDropdownRef.current &&
        !programDropdownRef.current.contains(event.target) &&
        tribeDropdownRef.current &&
        !tribeDropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  return (
    <header
      className={`fixed top-0 z-50 flex justify-between uppercase px-6 items-center w-full h-[113px] transition-colors duration-300 ${
        isScrolled ? "bg-[#14bde3]" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full px-11">
        <Link href="/">
          <Image src={logo} width={79} height={84} alt="Logo" />
        </Link>
        <div className="flex space-x-4 gap-11 font-medium text-white cursor-pointer">
          <Link href="/">Home</Link>
          <Link href="/mandate">Our Mandate</Link>

          <div
            className="relative"
            ref={programDropdownRef}
            onMouseEnter={() => handleMouseEnter("program")}
          >
            <div className="text-white">Programs</div>
            <div
              className={`absolute left-0 top-full mt-2 w-[213px] rounded-[5px] border border-blue-500 bg-[#F2F2F2] z-50 transition-all duration-1000 ease-in-out ${
                openDropdown === "program"
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform -translate-y-2 pointer-events-none"
              }`}
            >
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

          <div
            className="relative"
            ref={tribeDropdownRef}
            onMouseEnter={() => handleMouseEnter("tribe")}
          >
            <div className="text-white">Our Tribe</div>
            <div
              className={`absolute left-0 top-full mt-2 w-[213px] rounded-[5px] border border-blue-500 bg-[#F2F2F2] z-50 transition-all duration-1000 ease-in-out ${
                openDropdown === "tribe"
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform -translate-y-2 pointer-events-none"
              }`}
            >
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
              <Link href="/volunteer" className="dropdown-item">
                DEVELOPMENT TEAM
              </Link>
            </div>
          </div>

          <Link href="/news">News</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact-us">Contact Us</Link>

          <div
            className="relative"
            ref={involvedDropdownRef}
            onMouseEnter={() => handleMouseEnter("involved")}
          >
            <div className="text-white flex gap-2">
              Get Involved
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            <div
              className={`absolute left-0 top-full mt-2 w-[213px] rounded-[5px] border border-blue-500 bg-[#F2F2F2] z-50 transition-all duration-1000 ease-in-out ${
                openDropdown === "involved"
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform -translate-y-2 pointer-events-none"
              }`}
            >
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
