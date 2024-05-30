import React from "react";
import Image from "next/legacy/image";

function Footer() {
  return (
    <div className="footer bg-[#1086A0] text-gray-100">
      <div className="w-full p-6 lg:max-w-[1200px] lg:mx-auto md:p-5">
        <div className="justify-center items-center flex flex-col md:flex-row md:space-x-24">
          <div className="footerlogo flex flex-row md:w-[30%] gap-6 mb-5 md:flex-col md:space-y-3">
            <Image
              src="/footerLogo.svg" // Adjust the path if necessary
              alt="footerlogo"
              className="w-10 h-10 md:w-24 md:h-24 mr-2"
              width={96}
              height={96}
            />
            <p className="font-light text-[12px] md:text-[14px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies,
            </p>
          </div>

          <div className="Footeritems text-[12px] w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:text-[20px] md:text-[14px] font-normal md:w-[70%] leading-[28px] mt-3 mb-4">
            <ul className="space-y-3">
              <li>Reach Us</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>

            <ul className="space-y-3">
              <li>Programs</li>
              <li>Arts</li>
              <li>SDGs</li>
              <li>Entrepreneurship</li>
            </ul>

            <ul className="space-y-3">
              <li>Resources</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>News</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 border-400 mt-4 md:mt-10">
          <div className="footersocial flex flex-row mt-4 gap-4 md:gap-10 justify-center items-center">
            <Image
              src="/baselinefacebook.svg"
              alt="facebook"
              className="w-6 ml-2"
              width={24}
              height={24}
            />
            <Image
              src="/instagram.svg"
              alt="instagram"
              className="w-6 ml-2"
              width={24}
              height={24}
            />
            <Image
              src="/twitter.svg"
              alt="twitter"
              className="w-6 ml-2"
              width={24}
              height={24}
            />
            <Image
              src="/youtube.svg"
              alt="youtube"
              className="w-6 ml-2"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
