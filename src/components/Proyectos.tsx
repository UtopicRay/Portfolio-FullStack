import { useState } from "react";
import { motion } from "framer-motion";
import { proyectos } from "./Datos.tsx";
import Card from "./Card.tsx";

function Proyectos() {
  const [currentProject, setCurrentProject] = useState<number>(0);

  function handleClick(index: number) {
    if (index === currentProject) return;
    setCurrentProject(index);
  }

  return (
    <section
      className="max-container padding-container w-full flex justify-center items-center flex-col py-16 md:py-24"
      id="projects"
    >
      <h2 className="fade-down">Proyecto</h2>
      <div className="flex flex-col md:flex-row justify-between h-auto w-full gap-y-8 mt-8">
        <ul className="ml-6 flex md:flex-col gap-6 flex-wrap justify-center md:gap-1 space-y-2 md:space-y-4 text-2xl text-left">
          {proyectos.map((proyecto, index) => (
            <li
              key={index}
              className={`relative cursor-pointer px-3 py-1 md:text-2xl text-sm fade-right transition-colors duration-200 ${
                currentProject === index
                  ? "text-white"
                  : "text-gray-300 hover:text-gray-100"
              }`}
              onClick={() => handleClick(index)}
            >
              {currentProject === index && (
                <motion.span
                  layoutId="active-project-pill"
                  className="absolute inset-0 -z-10 rounded-lg bg-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
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