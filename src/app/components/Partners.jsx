import React from "react";

function Partners() {
  return (
    <>
      <div className="  mb-10 w-full p-6 lg:max-w-[1200px] lg:mx-auto md:p-5 space-y-16  flex flex-col justify-center items-center">
        <h1 className="text-[#1E1E1E] font-bold text-[24px] lg:text-[30px]  border-b-2 border-[#E3B522]">
          Our Partners
        </h1>
        {/* <img src="./partnerlogos.svg" alt="partnersLogos" className="" /> */}
        <div className="flex flex-row items-center gap-5">
          <a href="https://www.one.org/">
            <img
    
              src="/one campaign.svg"
              alt="partnersLogos"
              className="w-[150px]"
            />
          </a>
          <a href="https://www.care.org/">
            <img
             
              src="/care foundation.svg"
              alt="partnersLogos"
              className="w-[300px]"
            />
          </a>
          <a href="https://www.savethechildren.net/">
            <img
              src="/save the children.svg"
              alt="partnersLogos"
              className="w-[200px]"
            />
          </a>
          <a href="https://www.oxfam.org/">
            <img
            
              src="/oxfam.svg"
              alt="partnersLogos"
              className="w-[150px] mx-6"
            />
          </a>
        </div>
        <div className="grid grid-cols-2 items-center space-y-3 gap-5 ">
          <a href="https://unfoundation.org/">
            <img
              // height={100}
              // width={200}
              // quality={100}
              src="/united nations foundation.svg"
              alt="partnersLogos"
              className="w-[400px]"
            />
          </a>
          <a href="https://www.unicef.org/">
            <img
              // height={600}
              // width={600}
              // quality={100}
              src="/unicef-original.svg"
              alt="partnersLogos"
              className="w-[400px] "
            />
          </a>
          <a href="https://www.wvi.org/">
            <img
          
              src="/png-transparent-world-logo-world-vision-international-foundation-text-world-vision-deutschland-future-v.svg"
              alt="partnersLogos"
              className="w-[400px] mb-8"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Partners;
