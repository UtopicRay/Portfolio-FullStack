import { useEffect, useRef, useState } from "react";
import { proyectos } from "../mock/Data.tsx";
import Card from "./Card.tsx";

function Proyectos() {
  const [currentProject, setCurrentProject] = useState<number>(0);
  function handleClick(index: number) {
    setCurrentProject((prev) => (prev = index));
  }
  useEffect(() => {}, [currentProject]);
  return (
    <section
      className="max-container padding-container w-full flex justify-center items-center flex-col py-16  md:py-24"
      id="projects"
    >
      <h2 className="fade-down">Proyecto</h2>
      <div className="flex flex-col md:flex-row justify-between h-auto w-full gap-y-8 mt-8">
        <ul className="ml-6 flex  md:flex-col gap-6 flex-wrap justify-center md:gap-1 space-y-2 md:space-y-4 text-2xl text-left">
          {proyectos.map((proyecto, index) => (
            <li
              key={index}
              className={`cursor-pointer text-gray-300 md:text-2xl text-sm fade-right animate-duration-${
                index * 100
              } ${currentProject === index ? "active-project" : "list-item"}`}
              onClick={() => handleClick(index)}
            >
              {proyecto.name}
            </li>
          ))}
        </ul>
        <Card proyecto={proyectos[currentProject]} />
      </div>
    </section>
  );
}
export default Proyectos;
