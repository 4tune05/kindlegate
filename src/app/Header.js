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
    <section className="relative">
      <div
        className={`fixed top-0 z-50 flex justify-between uppercase items-center w-full h-[113px] transition-colors duration-300 ${
          isScrolled ? "bg-[#0F86A0]" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between w-full px-11">
          <Link href="/">
            <Image src={logo} width={91} height={68} alt="Logo" />
          </Link>
          <div className="flex space-x-4 gap-11 font-medium text-white cursor-pointer">
            <Link href="/">Home</Link>
            <Link href="/mandate">Our Mandate</Link>

            <div
              onClick={() => setIsProgramDropdownOpen(!isProgramDropdownOpen)}
              ref={programDropdownRef}
              className="relative"
            >
              <div className="text-white">Programs</div>
              {isProgramDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-[213px] rounded-[5px] border border-purple-500 bg-gray-800 z-50">
                  <div className="px-5 py-2.5 m-2 border border-white rounded-[36px] flex items-center">
                    <div className="text-white text-base font-bold leading-7">
                      PROGRAMS
                    </div>
                  </div>
                  <Link href="/arts">
                    <div className="px-5 py-2.5 m-2 hover:bg-cyan-500 rounded-[10px] flex items-center">
                      <div className="text-white text-base font-bold leading-7">
                        ARTS
                      </div>
                    </div>
                  </Link>
                  <Link href="/leadership">
                    <div className="px-5 py-2.5 m-2 hover:bg-cyan-500 rounded-[10px] flex items-center">
                      <div className="text-white text-base font-bold leading-7">
                        LEADERSHIP
                      </div>
                    </div>
                  </Link>
                  <Link href="/entrepreneurship">
                    <div className="px-5 py-2.5 m-2 hover:bg-cyan-500 rounded-[10px] flex items-center">
                      <div className="text-white text-base font-bold leading-7">
                        ENTREPRENEURSHIP
                      </div>
                    </div>
                  </Link>
                  <Link href="/food-shelter">
                    <div className="px-5 py-2.5 m-2 hover:bg-cyan-500 rounded-[10px] flex items-center">
                      <div className="text-white text-base font-bold leading-7">
                        FOOD SHELTER
                      </div>
                    </div>
                  </Link>
                  <Link href="/sbg-awareness">
                    <div className="px-5 py-2.5 m-2 hover:bg-cyan-500 rounded-[10px] flex items-center">
                      <div className="text-white text-base font-bold leading-7">
                        SDG AWARENESS
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <div
              onClick={() => setIsTribeDropdownOpen(!isTribeDropdownOpen)}
              ref={tribeDropdownRef}
              className="relative"
            >
              <div className="text-white">Our Tribe</div>
              {isTribeDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-[213px] rounded-[5px] border border-purple-500 bg-gray-800 z-50">
                  <div className="px-5 py-2.5 m-2 border border-white rounded-[36px] flex items-center">
                    <div className="text-white text-base font-bold leading-7">
                      OUR TRIBE
                    </div>
                  </div>
                  <div className="px-5 py-2.5 m-2 hover:bg-cyan-500 rounded-[10px] flex items-center">
                    <Link
                      href="/board"
                      className="text-white text-base font-bold leading-7"
                    >
                      BOARD OF DIRECTORS
                    </Link>
                  </div>
                  <Link href="/executive-advisory">
                    <div className="px-5 py-2.5 m-2 hover:bg-cyan-500 rounded-[10px] flex items-center">
                      <div className="text-white text-base font-bold leading-7">
                        EXECUTIVE ADVISORY
                      </div>
                    </div>
                  </Link>
                  <Link href="/development-team">
                    <div className="px-5 py-2.5 m-2 hover:bg-cyan-500 rounded-[10px] flex items-center">
                      <div className="text-white text-base font-bold leading-7">
                        DEVELOPMENT TEAM
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/news">News</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact-us">Contact Us</Link>

            <div
              onClick={() => setIsInvolvedDropdownOpen(!isInvolvedDropdownOpen)}
              ref={involvedDropdownRef}
              className="relative"
            >
              <div className="text-white">Get Involved</div>
              {isInvolvedDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-[213px] rounded-[5px] border border-purple-500 bg-gray-800 z-50">
                  <div className="px-5 py-2.5 m-2 border border-white rounded-[36px] flex items-center">
                    <div className="text-white text-base font-bold leading-7">
                      GET INVOLVED
                    </div>
                  </div>
                  <Link href="/sponsor">
                    <div className="px-5 py-2.5 m-2 hover:bg-cyan-500 rounded-[10px] flex items-center">
                      <Link
                        href="/sponsor"
                        className="text-white text-base font-bold leading-7"
                      >
                        AS A SPONSOR
                      </Link>
                    </div>
                  </Link>
                  <Link href="/mentor">
                    <div className="px-5 py-2.5 m-2 hover:bg-cyan-500 rounded-[10px] flex items-center">
                      <Link
                        href="/mentor"
                        className="text-white text-base font-bold leading-7"
                      >
                        AS A MENTOR
                      </Link>
                    </div>
                  </Link>
                  <Link href="/volunteer">
                    <div className="px-5 py-2.5 m-2 hover:bg-cyan-500 rounded-[10px] flex items-center">
                      <Link
                        href="/volunteer"
                        className="text-white text-base font-bold leading-7"
                      >
                        AS VOLUNTEER
                      </Link>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <button className="bg-[#00A859] px-[28px] rounded-full uppercase outline outline-2 text-white inline-flex py-[5px]">
            Donate
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
