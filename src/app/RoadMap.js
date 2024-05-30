"use client"
import React, { useState } from "react";
import Slider from "slick-slider-react";


function RoadMap() {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full h-[810px] relative bg-sky-900 rounded-[20px] border border-black flex-col justify-start items-start inline-flex">
      <div className="left-0 top-0 absolute text-white text-[40px] font-bold font-['Calibri'] leading-[49.50px]">
        OUR VALUE ADDING ROADMAP <br />
        (HESS MANDATE)
      </div>
      
        <div className="w-[313px] h-[0px] left-0 top-[99px] absolute border-4 border-amber-400"></div>
      
      <img
        className="w-[346px] h-[343px]"
        src="https://via.placeholder.com/346x343"
        alt="Placeholder"
      />

      <div className="w-[1200.76px] h-[616px] relative">
        <Slider index={index} onSlide={setIndex} className="gap-4 px-4">
          <div className="w-[1160px] h-[572px] relative">
            <div className="w-[532px] h-[572px] left-[628px] top-0 absolute bg-black/opacity-20" />
            <img
              className="w-[532px] h-[572px] left-[628px] top-0 absolute"
              src="https://via.placeholder.com/532x572"
              alt="Placeholder"
            />
            <div className="w-[672px] h-[354px] left-0 top-[144px] absolute">
              <div className="w-[576px] h-[232px] left-[52px] top-[40px] absolute text-white text-xl font-normal font-['Calibri'] leading-snug">
                Healthy communities: <br />
                <br />
                We believe when our communities are healthy and Eco-friendly,
                people thrive. Consequently, often many of the services that
                keep people healthy are difficult to access for the people who
                need them most. We will facilitate enabling environments to
                promote creativity, innovation and collaboration for healthcare
                causes and objectives. We will ensure that through our community
                networks every Hungry Citizen within our reach gets Food
                Assistance and the Homeless get a clean living environment with
                access to disease prevention medicine.
              </div>
            </div>
          </div>
          <div className="w-[1160px] h-[572px] relative">
            <img
              className="w-[539.44px] h-[572px] left-0 top-0 absolute"
              src="https://via.placeholder.com/539x572"
              alt="Placeholder"
            />
            <div className="w-[584.06px] h-[296px] left-[527.27px] top-[29px] absolute">
              <span className="text-white text-lg font-bold font-['Times New Roman'] leading-[25px] tracking-wide">
                Economic Development:
                <br />
              </span>
              <span className="text-white text-lg font-normal font-['Times New Roman'] leading-[25px] tracking-wide">
                <br />
                We believe that cities and regions are stronger when their
                residents have opportunities to thrive as entrepreneurs,
                employers, and employees. The Kindle Gate Foundation will
                partner with private and public organizations, using technology
                to provide indigents citizens and job seekers with necessary
                skills acquisitions and connect employers to trained potential
                employees. This will help remove employment barriers by
                modernizing the workforce system. Through advocacy and
                evidence-based research we will act as a guide for policymakers
                across African governments in order to promote thought based
                leadership and entrepreneurship.
              </span>
            </div>
          </div>
          <div className="w-[1160px] h-[572px] relative">
            <img
              className="w-[523.87px] h-[572px] left-[636.13px] top-0 absolute"
              src="https://via.placeholder.com/524x572"
              alt="Placeholder"
            />
            <div className="w-[661.73px] h-[354.62px] left-0 top-[109.19px] absolute">
              <div className="w-[567.20px] h-[191.33px] left-[43.33px] top-[80.14px] absolute">
                <span className="text-white text-lg font-bold font-['Times New Roman'] leading-[25px] tracking-wide">
                  Safety and Justice:
                </span>
                <span className="text-white text-lg font-normal font-['Times New Roman'] leading-[25px] tracking-wide">
                  {" "}
                  <br />
                  <br />
                  We believe in an ethical future where safe and just
                  communities have justice systems that are responsive, fair and
                  that works for our nation’s most vulnerable populations,
                  especially those most impacted by crime, violence and gender
                  inequality. We will provide a support and legal aid systems
                  that will reduce unnecessary incarceration.
                </span>
              </div>
            </div>
          </div>
          <div className="w-[1160px] h-[572px] relative">
            <div className="w-[532px] h-[572px] left-0 top-0 absolute bg-black/opacity-20" />
            <img
              className="w-[526px] h-[572px] left-[6px] top-0 absolute"
              src="https://via.placeholder.com/526x572"
              alt="Placeholder"
            />
            <div className="w-[672px] h-[354px] left-[488px] top-[40px] absolute">
              <div className="w-[576px] h-[270px] left-[44px] top-[42px] absolute">
                <span className="text-white text-lg font-bold font-['Times New Roman'] leading-[25px] tracking-wide">
                  Social Economic Empowerment:
                </span>
                <div className=" bg-[#4B4B4B] w-[672px] h-[364px]">
                  <span className=" text-white text-lg font-normal font-['Times New Roman'] leading-[25px] tracking-wide">
                    <br />
                    <br />
                    We believe that by the articulation of a common position
                    towards deploying our diverse and rich cultural resources,
                    we would contribute to combating vices such as youth
                    restiveness, insecurity and unemployment. These efforts will
                    be manifested by promoting activities, events and curating
                    Exhibitions, Workshops, Training and Festivals of African
                    Inspired Arts, Drama, Music, Crafts and Culture. Also,
                    entrepreneurs will be empowered through capacity
                    development, seed capital, mentoring and networking.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default RoadMap;
