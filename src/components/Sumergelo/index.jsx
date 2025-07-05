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
            <section className="w-full flex flex-col items-center border-azul border-t-2 bg-amarillo relative overflow-hidden pb-10 lg:pb-20">
                <img src="/img/lineadiscontinuablancascirculosnaranjas.webp" alt="lineas divesirias" className="w-full" />
                <h2 className="text-lg min-[370px]:text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl  3xl:text-6xl 4xl:text-7xl text-azul font-eastman-bold text-center text-nowrap mt-5 mb-10 w-[430px] sm:w-full min-[470px]:my-5 sm:my-10 leading-5 sm:leading-6 md:leading-7 lg:leading-11 3xl:leading-15 4xl:leading-18">
                    ¡Sumérgelo en una aventura que <br />
                    ampliará su visión del mundo!
                </h2>
                <div className="relative pr-4 pl-15 py-3 2xl:py-6 w-10/12 sm:w-8/12 xl:w-7/12 2xl:w-[880px] -mr-3">
                    <img src="/img/formablanca.webp" alt="fondo blanco" className="absolute top-0 left-0 w-full h-full" />
                    <img src="/img/carapersonajedeporte.webp" alt="cara personaje de deporte" className="absolute -top-5 min-[370px]:-top-9 sm:-top-11  2xl:-top-12 -left-8 min-[520px]:-left-12  2xl:-left-20 w-[90px] min-[520px]:w-[110px] 2xl:w-[130px]" />
                    <h2 className="text-azul font-eastman-bold text-sm min-[520px]:text-base md:text-lg lg:text-2xl z-10 relative leading-4 sm:leading-5 md:leading-6 lg:leading-7">Podrá disfrutar de cada temática y aprender de
                        manera distinta, en un espacio seguro para conocer {" "}
                        < b > su lado más explorador.</b>
                    </h2>
                </div>
                <div className="w-full flex justify-center py-10 gap-4 flex-wrap">
                    {
                        imgs.map(image => (
                            <img key={image} src={image} alt={image} className="w-[150px] min-[450px]:w-[200px] lg:w-[240px] 2xl:w-[260px] 3xl:w-[350px] 4xl:w-[400px]" />
                        ))
                    }
                </div>
                <img src="/img/niño-visorconfondo.png" alt="niño con vinocular" className="w-[250px] min-[450px]:w-[300px] lg:w-[350px] 2xl:w-[380px] 3xl:w-[450px] 4xl:w-[490px] absolute -bottom-30 -ml-20" />
            </section >
            <div className="w-full pt-7 pb-10 3xl:pb-20 flex items-center justify-center bg-[url('/img/papel.webp')] bg-center bg-cover relative">
                <div className="flex justify-center hover:scale-[102%] duration-300">
                    <a href="#contacto" className="flex text-naranja text-nowrap text-lg min-[375px]:text-xl min-[430px]:text-2xl xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-eastman-bold items-center justify-center gap-2 bg-azul py-2 px-2 rounded-md mb-5 w-fit">
                        <span className="text-white text-4xl 3xl:text-5xl 4xl:text-6xl"><FiArrowRightCircle /></span>
                        <div className="h-8 3xl:h-12 w-[2px] 3xl:w-[3px] rounded-md bg-white">{" "}</div>
                        <span className="">QUIERO INSCRIBIR A MI HIJO</span>
                    </a>
                </div>
                <img src="/img/lineadiscontinuanaranjacirculosverdes.webp" alt="linea punteada verde" className="w-full absolute bottom-5" />
            </div>
        </>
    )
}