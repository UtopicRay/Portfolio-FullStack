import { useEffect, useRef, useState } from "react";
import { proyectos } from "../mock/Data.tsx";
import Card from "./Card.tsx";

function Proyectos() {
  const [currentProject, setCurrentProject] = useState<number>(0);
  function handleClick(index: number) {
    setCurrentProject((prev) => (prev = index));
    console.log(proyectos[currentProject]);
  }
  return (
    <section
      className="my-24 max-w-[1200px] mx-auto grid md:grid-cols-8 grid-cols-2 gap-6"
      id="projects"
    >
      <div className="relative col-span-3 grid place-items-center grid-cols-1">
        <h2 className=" text-4xl font-bold ">Proyecto</h2>
        <ul className="ml-6 flex  md:flex-col gap-6 flex-wrap justify-center md:gap-1 space-y-2 md:space-y-4 text-2xl text-left">
          {proyectos.map((proyecto, index) => (
            <li
              key={index}
              className={`cursor-pointer text-gray-300 md:text-2xl text-sm ${
                currentProject === index ? "active-project" : "list-item"
              }`}
              onClick={() => handleClick(index)}
            >
              {proyecto.name}
            </li>
          ))}
        </ul>
      </div>
      <Card proyecto={proyectos[currentProject]} />
    </section>
  );
}
export default Proyectos;
