import { FiArrowRightCircle } from "react-icons/fi"

export default function Sumergelo() {
    const imgs = [
        "/img/niñoaudifonos.webp",
        "/img/astronauta.webp",
        "/img/globo2.webp",
        "/img/ciudad.webp",
    ]
    return (
        <>
            <section className="w-full flex flex-col items-center border-azul border-t-2 bg-amarillo relative overflow-hidden pb-10">
                <img src="/img/lineadiscontinuablancascirculosnaranjas.webp" alt="lineas divesirias" className="w-full" />
                <h2 className="text-lg min-[370px]:text-xl text-azul font-eastman-bold text-center text-nowrap mt-5 mb-10 w-[430px] min-[470px]:my-5">
                    ¡Sumérgelo en una aventura que <br />
                    ampliará su visión del mundo!
                </h2>
                <div className="relative pr-4 pl-15 py-3 w-[270px] min-[370px]:w-[300px] min-[430px]:w-[350px] min-[470px]:w-[400px]">
                    <img src="/img/formablanca.webp" alt="fondo blanco" className="absolute top-0 left-0 w-full h-full" />
                    <img src="/img/carapersonajedeporte.webp" alt="cara personaje de deporte" className="absolute -top-5 min-[370px]:-top-9 -left-8 w-[90px]" />
                    <h2 className="text-azul font-lato-bold text-sm min-[520px]:text-base z-10 relative ">Podrá disfrutar de cada temática y aprender de
                        manera distinta, en un espacio seguro para conocer {" "}
                        < b > su lado más explorador.</b>
                    </h2>
                </div>
                <div className="w-full flex justify-center py-10 gap-4 flex-wrap">
                    {
                        imgs.map(image => (
                            <img key={image} src={image} alt={image} className="w-[150px] min-[450px]:w-[200px]" />
                        ))
                    }
                </div>
                <img src="/img/adolecente.png" alt="niño con vinocular" className="w-[330px] min-[450px]:w-[400px] absolute bottom-0" />
            </section >
            <div className="w-full pt-7 pb-10 flex items-center justify-center bg-[url('/img/papel.webp')] bg-center bg-cover relative">
                <div className="flex justify-center hover:scale-[102%] duration-300">
                    <a href="#" className="flex text-naranja text-nowrap text-lg min-[375px]:text-xl min-[430px]:text-2xl font-eastman-bold items-center justify-center gap-2 bg-azul py-2 px-2 rounded-md mb-5 w-fit">
                        <span className="text-white text-4xl"><FiArrowRightCircle /></span>
                        <div className="h-8 w-[2px] rounded-md bg-white">{" "}</div>
                        <span className="-mt-1">RESERVA SU CUPO AHORA</span>
                    </a>
                </div>
                <img src="/img/lineadiscontinuanaranjacirculosverdes.webp" alt="linea punteada verde" className="w-full absolute bottom-5" />
            </div>
        </>
    )
}