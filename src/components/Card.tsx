import { AnimatePresence, motion } from "framer-motion";
import type { Proyecto } from "../type/types";
import Button from "./Button";

function Card({ proyecto }: { proyecto: Proyecto }) {
  return (
    <div className="w-full max-w-[600px] mx-auto grid">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={proyecto.name}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="glass w-full col-span-5 [grid-area:1/1] hover:scale-105 duration-200 transition-all"
        >
          <div className="w-full h-auto">
            <img
              src={proyecto.img.src}
              alt={`imagen de ${proyecto.name}`}
              className="w-full h-full object-cover rounded-lg mb-4"
            />
          </div>
          <div className="p-6">
            <p className="text-gray-200 my-4 text-left text-lg md:text-xl xl:text-2xl">
              {proyecto.description}
            </p>
            <div className="flex md:flex-row flex-col justify-between items-center w-full">
              <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
                <Button label="Visitar" link={proyecto.link.site} type="button" />
                <Button label="Código" link={proyecto.link.github} type="button" />
              </div>
              <div className="flex mt-4 justify-start items-start gap-3">
                {proyecto.stack?.map((skill, index) => (
                  <div key={index}>{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
export default Card;