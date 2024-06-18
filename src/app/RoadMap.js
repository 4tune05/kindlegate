"use client";
import React from "react";
import Slider from "react-slick";
import Slide1 from "./Slide1";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RoadMap() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // customPaging: (i) => (
    //   <div className="mt-12 h-4 w-4  rounded-full border-2 border-gray-900"></div>
    // ),
  };

  return (
    <div className="w-full h-[810px] relative bg-sky-900 flex flex-col justify-start items-start">
      <img
        src="/assett.svg"
        className="w-[280px] absolute -top-11 -right-6"
        alt=""
      />
      <div className="ml-24 text-white mt-8 text-[40px] font-bold leading-[49.50px]">
        <div className="flex justify-between">
          OUR VALUE ADDING ROADMAP <br />
          (HESS MANDATE)
        </div>
      </div>
      <div className="w-[313px] h-[0px] ml-24 mt-8 top-[99px] absolute border-4 border-amber-400"></div>
      <div className="flex justify-center items-end w-full mt-4 mb-10">
        <div className="w-[80%]">
          <Slider {...settings}>
            <div className="flex justify-center">
              <Slide1
                src="/image223.jpg"
                title="Healthy communities:"
                content="  We believe when our communities are healthy and Eco-friendly, people
          thrive. Consequently, often many of the services that keep people
          healthy are difficult to access for the people who need them most. We
          will facilitate enabling environments to promote creativity,
          innovation and collaboration for healthcare causes and objectives. We
          will ensure that through our community networks every Hungry Citizen
          within our reach gets Food Assistance and the Homeless get a clean
          living environment with access to disease prevention medicine."
              />
            </div>
            <div className="flex justify-center">
              <Slide1
                src="/image226.jpg"
                title="Economic Development:
"
                content="  We believe that cities and regions are stronger when their
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
"
              />
            </div>
            <div className="flex justify-center">
              <Slide1
                src="/image224.jpg"
                title=" Safety and Justice:
"
                content="We believe in an ethical future where safe and just
                  communities have justice systems that are responsive, fair and
                  that works for our nation’s most vulnerable populations,
                  especially those most impacted by crime, violence and gender
                  inequality. We will provide a support and legal aid systems
                  that will reduce unnecessary incarceration.
 "
              />
            </div>
            <div className="flex justify-center">
              <Slide1
                src="/image225.jpg"
                title="Social Economic Empowerment:
"
                content=" We believe that by the articulation of a common position
                    towards deploying our diverse and rich cultural resources,
                    we would contribute to combating vices such as youth
                    restiveness, insecurity and unemployment. These efforts will
                    be manifested by promoting activities, events and curating
                    Exhibitions, Workshops, Training and Festivals of African
                    Inspired Arts, Drama, Music, Crafts and Culture. Also,
                    entrepreneurs will be empowered through capacity
                    development, seed capital, mentoring and networking.
"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow slick-next bg-blue-500 hover:bg-blue-700 rounded-full p-2 cursor-pointer`}
      style={{ ...style, display: "block", right: "-25px", zIndex: 1 }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow slick-prev bg-blue-500 hover:bg-blue-700 rounded-full p-2 cursor-pointer`}
      style={{ ...style, display: "block", left: "-25px", zIndex: 1 }}
      onClick={onClick}
    ></div>
  );
}

export default RoadMap;
