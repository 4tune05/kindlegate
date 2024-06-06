"use client";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/menu-nav-logo-1.png";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [isInvolvedDropdownOpen, setIsInvolvedDropdownOpen] = useState(false);
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);
  const [isTribeDropdownOpen, setIsTribeDropdownOpen] = useState(false);
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
        setIsInvolvedDropdownOpen(false);
        setIsProgramDropdownOpen(false);
        setIsTribeDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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

            <div className="relative">
              <div
                onMouseEnter={() => setIsProgramDropdownOpen(true)}
                ref={programDropdownRef}
                className="text-white"
              >
                Programs
              </div>
              <div
                className={`absolute left-0 top-full mt-2 w-[213px] rounded-[5px] border border-purple-500 bg-gray-800 z-50 duration-1000 ease-in-out transform ${
                  isProgramDropdownOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0"
                }`}
              >
                <Link
                  href="/programs"
                  className=" dropdown-item px-5 py-2.5 m-2 border border-white rounded-[36px] flex items-center text-base font-bold leading-7 text-white"
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

            <div className="relative">
              <div
                onMouseEnter={() => setIsTribeDropdownOpen(true)}
                ref={tribeDropdownRef}
                className="text-white"
              >
                Our Tribe
              </div>
              <div
                className={`absolute left-0 top-full mt-2 w-[213px] rounded-[5px] border border-purple-500 bg-gray-800 z-50 transition duration-1000 ease-in-out transform ${
                  isTribeDropdownOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0"
                }`}
              >
                <div className="dropdown-item px-5 py-2.5 m-2 border border-white rounded-[36px] flex items-center text-base font-bold leading-7 text-white">
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

            <div className="relative">
              <div
                onMouseEnter={() => setIsInvolvedDropdownOpen(true)}
                ref={involvedDropdownRef}
                className="text-white"
              >
                Get Involved
              </div>
              <div
                className={`absolute left-0 top-full mt-2 w-[213px] rounded-[5px] border border-purple-500 bg-gray-800 z-50 transition duration-1000 ease-in-out transform ${
                  isInvolvedDropdownOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0"
                }`}
              >
                <Link
                  href="/involved"
                  className=" dropdown-item px-5 py-2.5 m-2 border border-white rounded-[36px] flex items-center text-base font-bold leading-7 text-white"
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
