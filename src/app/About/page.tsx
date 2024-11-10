import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { aboutInfo } from "@/app/Data/data";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#16222A]">
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Content */}
        <div>
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">
            {aboutInfo.description}
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                <span className="text-white">
                  <FaCheck />
                </span>
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Tax & Annual Financial Audit Consulltant
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center">
                <span className="text-white">
                  <FaCheck />
                </span>
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Front-End Web Developer
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-orange-600 -800 flex flex-col items-center justify-center">
                <span className="text-white">
                  <FaCheck />
                </span>
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Full-Stack Web Developer
              </p>
            </div>
          </div>
        </div>
        {/* Stats Content */}
        <div className="grid grid-cols-2 gap-16 items-center lg-max-auto">
          {/* 1st Stat */}
          <div>
            <Image
              src="/Images/customer.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="text-base sm:text-lg text-gray-400 text-center ">
              Satisfied Customers
            </p>
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.client}
            </p>
          </div>
          {/* 2nd State */}
          <div>
            <Image
              src="/Images/experience.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="text-base sm:text-lg text-gray-400 text-center ">
              Experience
            </p>
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.experience}
            </p>
          </div>
          {/* 3rd Stat */}
          <div>
            <Image
              src="/Images/projects.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="text-base sm:text-lg text-gray-400 text-center ">
              Annual Audits
            </p>
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.project}
            </p>
          </div>
          <div>
            <Image
              src="/Images/rocket.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="text-base sm:text-lg text-gray-400 text-center ">
              Website Launched
            </p>
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.website}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
