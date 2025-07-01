import { FiArrowRightCircle } from "react-icons/fi";
import Diferenciadores from "../Diferenciadores";
import Etapas from "../Etapas";
import Horas from "../Horas";
import VideoSec from "../VideoSec";

export default function Caracteristicas() {
    return (
        <section className="w-full bg-amarillo py-5 overflow-hidden">
            <VideoSec />
            <h2 className="text-azul text-xl min-[380px]:text-2xl text-center mt-7">
                ¡UN VERANO LLENO DE
                <br />
                <span className="font-lato-black font-bold">AVENTURAS SORPRENDENTES!</span>
            </h2>
            <Diferenciadores />
            <Horas />
            <Etapas />
            <h2 className="text-azul text-lg font-eastman-bold text-center mb-3">ESCOGE TU HORARIO FAVORITO</h2>

            <div className="flex justify-center mb-7">
                <div className="relative p-2 w-fit">
                    <img src="/img/fondohorario.webp" alt="fondo horario" className="w-full h-full absolute top-0 left-0" />
                    <div className="text-azul text-nowrap text-base min-[360px]:text-lg min-[395px]:text-xl min-[480px]:text-2xl font-eastman-bold relative flex items-center justify-center gap-2">
                        9:00 - 12:00 P.M.
                        <div className="w-[1px] h-[15px] bg-azul"></div>
                        3:00 - 6:00 P.M.
                    </div>
                </div>
            </div>
            <div className="flex justify-center hover:scale-[102%] duration-300">
                <a href="#" className="flex text-naranja text-nowrap text-lg min-[375px]:text-xl min-[430px]:text-2xl font-eastman-bold items-center justify-center gap-2 bg-azul py-2 px-2 rounded-md mb-5 w-fit">
                    <span className="text-white text-4xl"><FiArrowRightCircle /></span>
                    <div className="h-8 w-[2px] rounded-md bg-white">{" "}</div>
                    <span className="-mt-1">RESERVA SU CUPO AHORA</span>
                </a>
            </div>

            <div className="flex justify-center -mb-8">
                <img src="/img/amarrillo.webp" alt="personaje Fyr Lois amarillo" className="w-[200px] min-[500px]:w-[240px] h-auto" />
                <img src="/img/verde.webp" alt="personaje Fyr Lois amarillo" className="w-[180px] min-[500px]:w-[240px] h-auto" />
            </div>
        </section>
    )
}