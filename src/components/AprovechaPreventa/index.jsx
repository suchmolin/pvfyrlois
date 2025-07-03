import { FiArrowRightCircle } from "react-icons/fi";

export default function AprovechaPreventa() {
    const imgSize = "w-[70px] min-[450px]:w-[100px] sm:w-[140px] md:w-[160px] lg:w-[190px]"
    return (
        <>
            <section id="preventa" className="w-full bg-naranja relative pt-20 pb-10">
                <img src="/img/lineadiscontinuaazul.webp" alt="linea punteada"
                    className="w-full absolute top-2"
                    style={{ transform: "scaleY(-1)" }}
                />
                <img src="/img/lineasverticalesizquierda.webp" alt="lineas laterales" className="absolute h-full top-0 left-0" />
                <img src="/img/lineasverticalesderecha.webp" alt="lineas laterales" className="absolute h-full top-0 right-0" />
                <h2 className="text-azul text-2xl min-[400px]:text-3xl md:text-4xl font-eastman-bold text-center leading-3">¡Aprovecha nuestra <span className="text-white text-4xl min-[400px]:text-5xl md:text-6xl block">preventa!</span></h2>

                <div className="flex flex-col items-center justify-center hover:scale-[102%] duration-300 py-7">
                    <div className="w-full flex justify-center -mb-3">
                        <img src="/img/rosa.webp" alt="/img/rosa.webp" className={imgSize + " z-10"} />
                        <img src="/img/amarrillo.webp" alt="/img/amarrillo.webp" className={imgSize + " -ml-7 sm:-ml-15 md:-ml-15"} />
                        <img src="/img/verde.webp" alt="/img/verde.webp" className={imgSize + " z-10 -ml-7 sm:-ml-15 md:-ml-15"} />
                        <img src="/img/naranja.webp" alt="/img/naranja.webp" className={imgSize + " -ml-7 sm:-ml-15 md:-ml-15"} />
                    </div>
                    <a href="#contacto" className="flex text-white text-nowrap text-lg min-[375px]:text-xl min-[430px]:text-2xl sm:text-3xl md:text-4xl  font-eastman-bold items-center justify-center gap-2 bg-azul py-2 px-2 lg:px-7 rounded-md mb-5 w-fit z-10">
                        <span className="text-white text-4xl lg:text-5xl"><FiArrowRightCircle /></span>
                        <div className="h-8 w-[2px] rounded-md bg-white">{" "}</div>
                        <span className="-mt-1">OBTENER DESCUENTO</span>
                    </a>
                </div>
            </section>
            <section className="w-full bg-azul text-white flex gap-1 items-center justify-center px-3 py-7 min-[385px]:py-10 border-b-5 border-black relative">
                <div className="w-[3px] h-[40px] min-[385px]:h-[50px] rounded-2xl bg-verde mt-2 -ml-30 min-[500px]:-ml-10"></div>
                <p className="text-sm min-[385px]:text-base min-[420px]:text-lg md:text-3xl lg:text-4xl font-eastman-bold ">¡Este summer es para vivir <span className="block text-verde ">grandes aventuras!</span></p>
                <img src="/img/little-explorer-holding-binoculars.png" alt="niña exploradora" className="w-[130px] min-[385px]:w-[160px] sm:w-[220px] lg:w-[250px] absolute bottom-0 right-0 xl:right-20 2xl:right-40" />
            </section>

        </>
    )
}