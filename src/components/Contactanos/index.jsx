import Formulario from "../Formulario";

export default function Contactanos() {
    return (
        <section id="contacto" className="w-full flex flex-col items-center pt-5">
            <div className="relative px-5 py-3 2xl:py-6">
                <img src="/img/formaverde.webp" alt="fondo naranja" className="absolute top-0 left-0 w-full h-full" />
                <h2 className="text-azul font-eastman-bold text-3xl lg:text-4xl 2xl:text-6xl text-center z-10 relative">CONTÁCTANOS</h2>
            </div>
            <h2 className="text-xl lg:text-3xl 2xl:text-5xl text-azul text-center font-eastman-bold leading-5 lg:leading-8 2xl:leading-13  my-5">¡Sus vacaciones de verano <br />
                comienzan hoy <span className="text-rosa italic">con el inglés!</span>
            </h2>

            <Formulario />
            <div className="w-full bg-azul relative h-25 lg:h-55 2xl:h-[300px] 4xl:h-[400px] -mt-10">
            </div>
        </section >
    )
}