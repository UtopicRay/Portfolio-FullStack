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
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="[grid-area:1/1]"
        >
          <div className="glass w-full col-span-5 hover:scale-[1.02] duration-300 transition-transform">
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
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
export default Card;