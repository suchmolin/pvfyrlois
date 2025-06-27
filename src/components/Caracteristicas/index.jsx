import Diferenciadores from "../Diferenciadores";
import Etapas from "../Etapas";
import Horas from "../Horas";
import VideoSec from "../VideoSec";

export default function Caracteristicas() {
    return (
        <section className="w-full bg-amarillo py-5">
            <VideoSec />
            <h2 className="text-azul text-xl min-[380px]:text-2xl text-center mt-7">
                ¡UN VERANO LLENO DE
                <br />
                <span className="font-lato-black font-bold">AVENTURAS SORPRENDENTES!</span>
            </h2>
            <Diferenciadores />
            <Horas />
            <Etapas />
        </section>
    )
}