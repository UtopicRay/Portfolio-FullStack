import { DiPhp, DiReact } from "react-icons/di";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import VueCommerce from "../assets/img/VueCommerce.webp";
import Esland from "../assets/img/esland-clon.webp";
import NetFlix from "../assets/img/Netflix-Clon.webp";
import Acortador from "../assets/img/Acortador.webp";
import { SiAstro } from "react-icons/si";

export const proyectos = [
  {
    name: "VueCommerce",
    description:
      "Proyecto basado en un ecommerce. Cuenta con la funcionalidad de añadir a al carrito de la compra, asi como buscar productos y ver los detalles de los mismos. La información de los productos es gracias al consumo de la api de 'dummyjson.com'. Proyecto propio.",
    img: VueCommerce,
    link: {
      site: "https://vuetify-ecommerce.vercel.app/",
      github: "https://github.com/UtopicRay/Clon-la-VeladaIII",
    },

    stack: [
      <FaVuejs className=" text-green-500 text-4xl hover:scale-110 transition-all duration-200" />,
      <SiVuetify className=" text-blue-500 text-4xl hover:scale-110 transition-all duration-200" />,
    ],
  },
  {
    name: "Clon de los Premios Esland",
    description:
      "Clon del sitio de la segunda edición de los premios esland. Dicho clon corresponde con la versión del sitio correspondiente a enero de 2024.",
    img: Esland,
    link: {
      site: "https://esland-clon.vercel.app/",
      github: "https://github.com/UtopicRay/esland-clon",
    },
    stack: [
      <SiAstro className="text-orange-500 text-4xl hover:scale-110 transition-all duration-200" />,
      <DiReact className="text-4xl text-blue-600 hover:scale-110 transition-all duration-200" />,
      <RiTailwindCssFill className="text-4xl text-blue-300 hover:scale-110 transition-all duration-200" />,
    ],
  },
  {
    name: "Clon de Netflix",
    description:
      "Proyecto basada en Netflix como plataforma de audiovisuales. Cuenta con servicio de autenticación y la información de la películas es gracias al consumo de la api de 'themoviedb.org'. Proyecto propio.",
    img: NetFlix,
    link: {
      site: "https://mi-clon-de-netflix.vercel.app/",
      github: "https://github.com/UtopicRay/Mi-clon-de-Netflix",
    },
    stack: [
      <DiReact className="text-4xl text-blue-600 hover:scale-110 transition-all duration-200" />,
      <RiTailwindCssFill className="text-4xl text-blue-300 hover:scale-110 transition-all duration-200" />,
      <RiFirebaseFill className="text-4xl text-yellow-400 hover:scale-110 transition-all duration-200"></RiFirebaseFill>,
    ],
  },
  {
    name: "Acortador de URL y Generador de QR",
    description:
      "Servicio de Generador de QR y acortador de URL. Proyecto propio.",
    img: Acortador,
    link: {
      site: "https://shorturlqr.000webhostapp.com/",
      github: "https://github.com/UtopicRay/Acortador-Url-Generador-QR",
    },
    stack: [
      <DiPhp className="text-4xl text-blue-300 hover:scale-110 transition-all duration-200"></DiPhp>,
    ],
  },
];
