import { FiArrowRightCircle } from "react-icons/fi";
import Contador from "../Contador";
import logo2 from "/public/img/logo2.png";
import fondoNaranja from "/public/img/fondoNaranja.webp";
import ninoHeader from "/public/img/ninoHeader.png";
import formaAmarilla from "/public/img/formaAmarilla.webp";
import formaAmarillaPC from "/public/img/franjaPC.webp";
export default function Header() {

    return (
        <section id="inicio" className="w-full bg-[url('/img/cieloFondo.png')] bg-cover bg-center bg-no-repeat pt-10 flex flex-col md:flex-row items-center md:items-end relative justify-start md:justify-center 3xl:gap-20 4xl:gap-30">
            <div className="flex flex-col w-fit items-center pb-0 md:pb-20 xl:pb-30 4xl:pb-40">
                <img src={logo2} alt="logo summer Fyr Lois" className="w-[400px] xl:w-[500px] 3xl:w-[600px] h-auto -ml-3 xl:-ml-5" />
                <h1 className="text-azul text-3xl min-[380px]:text-4xl xl:text-5xl 3xl:text-6xl text-center font-eastman-bold mb-5">¡Dale a tu hijo una <br /> experiencia única!</h1>
                <div className="relative px-5 py-4">
                    <img src={fondoNaranja} alt="fondo naranja" className="absolute top-0 left-0 w-full h-full" />
                    <h2 className="text-azul font-bold text-2xl min-[380px]:text-3xl xl:text-4xl 3xl:text-5xl text-center z-10 relative leading-8 3xl:leading-12">Plan vacacional <br /> totalmente <span className="text-white font-eastman-bold">en inglés</span></h2>
                </div>
                <h2 className="text-azul text-2xl xl:text-3xl 3xl:text-5xl italic font-eastman-bold mt-5">Primera etapa:</h2>
                <Contador />
                <a href="#contacto" className="flex text-naranja text-xl min-[380px]:text-2xl 3xl:text-5xl font-eastman-bold items-center justify-center gap-2 bg-azul py-2 px-2 rounded-md mb-5  hover:scale-[102%] duration-300">
                    <span className="text-white text-4xl 3xl:text-5xl"><FiArrowRightCircle /></span>
                    <div className="h-8 3xl:h-12 w-[2px] 3xl:w-[3px] rounded-md bg-white">{" "}</div>
                    <span className="">INSCRÍBELO AHORA</span>
                </a>
            </div>
            <img src={ninoHeader} alt="Niño feliz yendo al plan vacacional de Fyr lois para aprender con clases 100% en ingles" className="w-[300px] md:w-[450px] lg:w-[550px] 2xl:w-[600px] 3xl:w-[700px] 4xl:w-[800px] h-fit relative" />
            <img src={formaAmarilla} alt="forma amarilla divisor de seccion" className="w-full absolute bottom-0 block sm:hidden" />
            <img src={formaAmarillaPC} alt="forma amarilla divisor de seccion" className="w-full absolute bottom-0 hidden sm:block" />
        </section>
    )

}