import React from "react";

import html from "../assets/html.png";
import javas from "../assets/javascript.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailcss from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import typescript from "../assets/typescript.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: javas,
      title: "JAVASCRIPT",
    },
    {
      id: 2,
      src: react,
      title: "REACT",
    },
    {
      id: 3,
      src: redux,
      title: "REDUX",
    },
    {
      id: 4,
      src: node,
      title: "NODE",
    },
    {
      id: 5,
      src: tailcss,
      title: "TAILWIND",
    },
    {
      id: 6,
      src: typescript,
      title: "TYPESCRIPT",
    },
  ];

  return (
    <div className="flex flex-row ">
      <div className="bg-white w-full h-full">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-row justify-center w-full h-full text-black">
          <div className="flex flex-col w-1/3 ">
            <p className="text-4xl font-bold  p-2 inline text-left ">SKILLS</p>
          </div>

          <div className="w-2/3 h-full grid grid-cols-2 gap-12 text-center ">
            {techs.map(({ id, src, title }) => (
              <div key={id} className="flex flex-row  items-center ">
                <img src={src} alt="" className="w-20 h-20 " />
                <p className="ml-2 font-light  text-2xl">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
