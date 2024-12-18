import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { sections } from "../Datos.tsx";
import "./Nabvar.css";
import Button from "../Button";
function Navbar() {
  const [nav, setNav] = useState(false);
  function handleNav() {
    setNav(!nav);
  }
  return (
    <header className="header top-0 p-5 w-full flex flex-wrap text-[#F9E8C9] md:justify-center items-center z-10 justify-end">
      <ul className="md:flex gap-2 [&&>li]:px-5 hidden text-white font-bold text-xl  py-5">
        {sections.map((section, index) => (
          <li key={index}>
            <a href={section.id} className="list-item text-lg">
              {section.name}
            </a>
          </li>
        ))}
        <li className="md:block hidden">
          <Button label="Contacto" link="#contact" type="button" />
        </li>
      </ul>

      <div className="z-40 block md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? ` text-gray-300 text-left text-xl fixed left-0 top-0 w-[60%] [&&>li]:my-8 bg-black h-[100vh] border-r border-r-gray-900 ease-in-out duration-500 z-50 backdrop-blur-lg bg-opacity-25`
            : " text-left fixed left-[-100%] ease-in-out duration-500 top-0 h-full w-[60%]"
        }
      >
        {sections.map((section, index) => (
          <li key={index}>
            <a
              href={section.id}
              className="list-item p-5 mt-10 text-base"
              onClick={() => setNav(false)}
            >
              {section.name}
            </a>
          </li>
        ))}
        <li className="p-5" onClick={() => setNav(false)}>
          <Button label="Contacto" link="#contact" type="button" />
        </li>
      </ul>
    </header>
  );
}
export default Navbar;
