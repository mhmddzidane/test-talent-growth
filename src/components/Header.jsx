import React from "react";

const Header = () => {
  return (
    <div>
      <div className="bg-black px-7 py-5 text-white justify-center flex w-full ">
        <div className=" flex gap-5">
          <a href="#about">
            <p>ABOUT</p>
          </a>
          <a href="#contact">
            <p>CONTACT</p>
          </a>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-3xl font-semibold mt-10">ABOUT.</h1>
      </div>
      <div className=" mx-10 px-8 py-5 bg-black mt-10 rounded-md text-white grid grid-cols-3">
        <div className="flex flex-col col-span-2">
          <h2 className="text-2xl font-semibold ">
            Hello, my name is Zidane. I am an Undergradute Informatics
            <br /> Engineering Student at Mercu Buana University.
          </h2>
          <hr className="my-5" />
          <p>
            I'm focus in Front-end Web Development and UI/UX Design. As a person
            I'm a meticulous, organized, multitask and forward-thinking
            individual with a strong passion to learn new things. Proficient in
            JavaScript, React, and API integration; plus modern libraries and
            frameworks. Passionate about usability, reusable components and
            possess working knowledge of UI/UX Tool.
          </p>
        </div>
        <div className="hidden md:flex col-span-1 mr-10">
          <img
            src="https://portfolio-mhmddzidane.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpic.23e80511.jpg&w=1920&q=75"
            className="relative h-[200px] w-[200px] rounded-full ml-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
