import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  const [nav, setNav] = useState(false);
  function handleNav() {
    setNav(!nav);
  }
  return (
    <>
      <header className="fixed top-0 p-5 w-full flex flex-wrap bg-white bg-opacity-20 backdrop-blur-2xl text-[#F9E8C9] md:justify-center items-center z-10 justify-end">
        <ul className="md:flex gap-2 [&&>li]:p-5 hidden text-white font-bold text-xl">
          <li>
            <a href="#about" className="list-item text-sm">
              {" "}
              Sobre Mí
            </a>
          </li>
          <li>
            <a href="#experiencia" className="list-item text-sm">
              Experiencia
            </a>
          </li>
          <li>
            <a href="#projects" className="list-item text-sm">
              Proyectos
            </a>
          </li>
        </ul>
        <button className="md:block hidden bg-[#2A629A] px-4 py-2 rounded-lg text-gray-200 hover:bg-slate-700 duration-300">
          <a href="contact" className="text-white font-bold">
            Contact
          </a>
        </button>
        <div className="z-40 block md:hidden" onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? `text-gray-300 text-left text-xl fixed left-0 top-0 w-[60%] bg-black h-[100vh] border-r border-r-gray-900 ease-in-out duration-500 z-50 backdrop-blur-lg bg-opacity-25`
              : " text-left fixed left-[-100%] ease-in-out duration-500 top-0 h-full w-[60%]"
          }
        >
          <h1 className="ml-2 text-3xl font-bold">Ray</h1>
          <li>
            <a
              href="#about"
              className="list-item p-5"
              onClick={() => setNav(false)}
            >
              {" "}
              Sobre Mí
            </a>
          </li>
          <li>
            <a
              href="#experiencia"
              className="list-item p-5"
              onClick={() => setNav(false)}
            >
              Experiencia
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="list-item p-5"
              onClick={() => setNav(false)}
            >
              Proyectos
            </a>
          </li>
          <li>
            <button className="bg-[#2A629A] px-4 py-2 rounded-lg text-gray-200 hover:bg-slate-700 duration-300">
              <a
                href="#contact"
                className="text-white font-bold"
                onClick={() => setNav(false)}
              >
                Contact
              </a>
            </button>
          </li>
        </ul>
      </header>
    </>
  );
}
export default Navbar;
