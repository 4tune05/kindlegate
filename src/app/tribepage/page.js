import React from "react";
import Image from "next/image";
import OurTeam from "./OurTeam";
import CloserToFooter from "../CloserToFooter";


function OurTribe() {
  return (
    <section>
      <main className="relative h-[786px]">
        <div className="absolute top-0 w-full -z-50">
          <div className="h-[786px] w-full ">
            <Image
              src="/group-happy-african-volunteers-hugs-park-africa-volunteering-charity-people-ecology-concept 1.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className=" fixed inset-0 bg-black/35"></div>
          </div>
          {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-200/0 via-gray-900/10 to-gray-800 " />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-800 " /> */}
        </div>
        <div className=" absolute top-32 w-full px-4 lg:px-0 lg:w-[950px] mt-[180px] flex flex-col justify-start items-center gap-8">
          <h1 className="  text-center text-[#f1f1f1] text-[64px] font-extrabold font-['Calibri'] leading-[64px]">
            OUR TRIBE
          </h1>
          <p className="text-center text-zinc-100 text-xl font-normal font-['Calibri'] leading-snug max-w-xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra imperdiet enim. Fusce est.
          </p>
        </div>
      </main>
      <OurTeam
      href="/trustees"
        title="Our Team"
        board="TRUSTEES"
        description={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis urna.
            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.

            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis urna.
            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.`}
        buttonText="Learn more"
      />
      <OurTeam
      href="/board"
        board="BOARD OF DIRECTORS"
        description={`Different description content for the second team. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.`}
        buttonText="Learn More"
      />
      <OurTeam
      href="/council"
        title="Our Team"
        board="GOVERNING COUNCIL"
        description={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis urna.
            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.

            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis urna.
            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.`}
        buttonText="Learn more"
      />
      <OurTeam
      href="/volunteer"
        board="VOLUNTEERS"
        description={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis urna.
            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.

            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis urna.
            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.`}
        buttonText="Learn more"
      />
      <CloserToFooter />
    </section>
  );
}

export default OurTribe;
