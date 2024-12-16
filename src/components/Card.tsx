import type { Proyecto } from "../type/types";
import Button from "./Button";

function Card({ proyecto }: { proyecto: Proyecto }) {
  return (
    <div className=" glass w-full col-span-5 max-w-[600px] mx-auto hover:scale-105 duration-200 transition-all fade-up">
      <div className="w-full h-auto">
        <img
          src={proyecto.img.src}
          alt={`imagen de ${proyecto.name}`}
          className="w-full h-full object-cover rounded-lg mb-4"
        ></img>
      </div>
      <div className="p-6">
        <p className="text-gray-200 my-4 text-left text-lg md:text-xl xl:text-2xl">
          {proyecto.description}
        </p>
        <div className="flex md:flex-row flex-col justify-between items-center w-full">
          <div className="space-x-4 mt-4 md:mt-0">
            <Button label="Visitar" link={proyecto.link.site} type="button" />
            <Button label="Código" link={proyecto.link.github} type="button" />
          </div>
          <div className="flex mt-4 justify-start items-start ">
            {proyecto.stack?.map((skill, index) => (
              <div className="" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
