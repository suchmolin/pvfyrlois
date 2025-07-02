import Formulario from "../Formulario";

export default function Contactanos() {
    return (
        <section id="contacto" className="w-full flex flex-col items-center pt-5">
            <div className="relative px-5 py-3">
                <img src="/img/formaverde.webp" alt="fondo naranja" className="absolute top-0 left-0 w-full h-full" />
                <h2 className="text-azul font-eastman-bold text-3xl text-center z-10 relative">CONTÁCTANOS</h2>
            </div>
            <h2 className="text-xl text-azul text-center font-bold leading-5 my-5">¡Sus vacaciones de verano <br />
                comienzan hoy <span className="text-rosa italic">con el inglés!</span>
            </h2>

            <Formulario />
            <div className="w-full bg-azul relative h-19">
            </div>
        </section >
    )
}