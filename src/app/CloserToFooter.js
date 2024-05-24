import React from "react";

function CloserToFooter() {
  return (
    <section>
      <div className="w-full h-[357px] bg-amber-400 flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-between px-6 lg:px-12">
        <div className="mt-9 ml-11 lg:max-w-[800px] lg:mr-12 text-center lg:text-left">
          <div className="text-stone-900 text-[25px] font-bold font-['Calibri'] leading-7 mt-4">
            THE JOURNEY TO BUILDING A BETTER WORLD STARTS HERE WITH YOU
          </div>
          <div className="w-full text-black text-xl font-normal font-['Calibri'] leading-snug mt-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra imperdiet enim. Fusce est.
          </div>
          <div className="px-14 py-4  bg-cyan-500 rounded-[56px] mt-11 inline-block">
            <div className="text-stone-900 text-[25px] font-bold font-['Calibri'] leading-7">
              GET INVOLVED
            </div>
          </div>
        </div>
        
          <img
            className="w-[326px] h-[326px] -mr-[134px] mt-4 -rotate-2"
            src="/asset-61.svg"
            alt="Placeholder"
          />
        
      </div>
    </section>
  );
}

export default CloserToFooter;
