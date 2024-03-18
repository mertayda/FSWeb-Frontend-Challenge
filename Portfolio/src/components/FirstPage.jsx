import React from "react";
import casualImage from "../assets/casual.jpg";

const FirstPage = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center bg-cover bg-center w-full h-screen "
      style={{
        backgroundImage: `linear-gradient(90deg, #4731D3 75%, #CBF281 25%)`,
      }}
    >
      <div className="flex flex-col md:flex-row justify-center content-center items-center max-w-screen h-auto mt-10 md:mx-atuo">
        <div className="flex flex-col w-3/6 mx-auto h-auto text-left">
          <h1 className=" text-4xl md:text-6xl font-bold text-[#CBF281] ">
            I am Full-Stack Developer
          </h1>
          <p className="text-white mt-2 text-4xl">
            Who likes to craft solid and scalable web apps!
          </p>
          <div className="flex mt-4">
            <a
              href="https://github.com/your-username"
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <img
          src={casualImage}
          alt="Technology"
          className="object-contain w-1/2  md:w-1/3 h-auto rounded-xl md:mx-auto mt-5"
        />
      </div>
    </div>
  );
};

export default FirstPage;
