import { FiArrowRightCircle } from "react-icons/fi";
import Contador from "../Contador";
import logo2 from "/public/img/logo2.png";
import fondoNaranja from "/public/img/fondoNaranja.webp";
import ninoHeader from "/public/img/ninoHeader.png";
import formaAmarilla from "/public/img/formaAmarilla.webp";
export default function Header() {

    return (
        <section id="inicio" className="w-full bg-[url('/img/cieloFondo.png')] bg-cover bg-center bg-no-repeat pt-10 flex flex-col md:flex-row items-center md:items-end relative justify-start md:justify-center">
            <div className="flex flex-col w-fit items-center pb-0 md:pb-20">
                <img src={logo2} alt="logo summjer Fyr Lois" className="w-[400px] xl:w-[500px] h-auto" />
                <h1 className="text-azul text-3xl xl:text-4xl text-center font-eastman-bold mb-5">¡Dale a tu hijo una <br /> experiencia única!</h1>
                <div className="relative px-5 py-3">
                    <img src={fondoNaranja} alt="fondo naranja" className="absolute top-0 left-0 w-full h-full" />
                    <h2 className="text-azul font-lato-bold text-3xl xl:text-4xl text-center z-10 relative">Plan vacacional <br /> totalmente <span className="text-white">en inglés</span></h2>
                </div>
                <h2 className="text-azul text-2xl xl:text-3xl italic font-lato-black mt-5">Primera etapa:</h2>
                <Contador />
                <a href="#" className="flex text-naranja text-2xl font-eastman-bold items-center justify-center gap-2 bg-azul py-2 px-2 rounded-md mb-5  hover:scale-[102%] duration-300">
                    <span className="text-white text-4xl"><FiArrowRightCircle /></span>
                    <div className="h-8 w-[2px] rounded-md bg-white">{" "}</div>
                    <span className="-mt-1">INSCRÍBELO AHORA</span>
                </a>
            </div>
            <img src={ninoHeader} alt="Niño feliz yendo al plan vacacional de Fyr lois para aprender con clases 100% en ingles" className="w-[300px] md:w-[450px] lg:w-[550px] 2xl:w-[600px] h-auto relative" />
            <img src={formaAmarilla} alt="forma amarilla divisor de seccion" className="w-full absolute bottom-0 block sm:hidden" />
        </section>
    )

}