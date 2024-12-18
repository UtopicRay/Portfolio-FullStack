import Button from "../Button.tsx";
import Avatar from '../../assets/img/Avatar2.webp';
import {TypeAnimation} from "react-type-animation";

export default function PersonalInfo() {
    return (<div className="grid md:grid-cols-2 grid-cols-1 md:col-span-5 col-span-8 p-8 glass fade-down">
        <div className="place-items-center">
            <img
                className="w-full md:h-[500px] max-w-full h-auto aspect-auto "
                src={Avatar.src}
                alt="imagen de Avatar"
            />
        </div>
        <div className="mx-2 flex justify-between items-start flex-col gap-y-7 h-full">
            <p className="text-xl lg:text-5xl font-bold text-left">
                Hola, soy Ray Rendón<br></br>
                <span className="xl:text-5xl 2xl:text-6xl text-3xl font-bold text-left [letter-spacing:0.15rem]">
            <TypeAnimation
                sequence={[
                    "Ing. Ciencias Informáticas",
                    1000,
                    "Desarrollador FullStack",
                    1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
          </span>
            </p>
            <div className="flex flex-col gap-y-5 justify-start items-start">
                <Button label="Descargar CV" type='button'
                        link='https://drive.google.com/file/d/1_F307skOtnPWdSxpLtCzu9_ETlJIL81U/view?usp=sharing'/>
                <div className="flex items-center">
                    <a
                        className="flex justify-center items-center text-white md:text-xl hover:scale-110 transition-all duration-200  underline"
                        href="mailto:rayrm2021@gmail.com?subject=Interesado%20en%20sus%20servicios"
                    >
                        rayrm2021@gmail.com
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="currentColor"
                                 className={`icon icon-tabler icons-tabler-filled icon-tabler-mail text-gray-500 mx-2`}><path
                                stroke="none" d="M0 0h24v24H0z" fill="none"/><path
                                d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"/><path
                                d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"/></svg>
            </span>
                    </a>
                </div>
            </div>
        </div>
    </div>)
}