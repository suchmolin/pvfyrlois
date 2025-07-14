import { FiArrowRightCircle } from "react-icons/fi";
import { checkoutHandler } from "../../utils/checkoutHandler";

export default function AprovechaPreventa() {
    const imgSize = "w-[100px] min-[430px]:w-[110px] sm:w-[160px] md:w-[160px] lg:w-[190px] xl:w-[220px] 4xl:w-[250px]"
    return (
        <>
            <section id="preventa" className="w-full bg-[#FFA400] relative pt-20 xl:py-30 pb-10">
                <img src="/img/lineadiscontinuaazul.webp" alt="linea punteada"
                    className="w-full absolute top-2"
                    style={{ transform: "scaleY(-1)" }}
                />
                <img src="/img/lineasverticalesizquierda.webp" alt="lineas laterales" className="absolute h-full top-0 left-0" />
                <img src="/img/lineasverticalesderecha.webp" alt="lineas laterales" className="absolute h-full top-0 right-0" />
                <h2 className="text-[#001A70] text-2xl min-[400px]:text-3xl sm:text-5xl md:text-5xl xl:text-6xl 3xl:text-7xl 4xl:text-8xl eastman-bold text-center leading-3 sm:leading-6 3xl:leading-10 4xl:leading-15">¡Aprovecha nuestra <span className="text-white text-5xl min-[400px]:text-6xl sm:text-8xl md:text-8xl xl:text-9xl 3xl:text-[150px] 4xl:text-[200px] block">preventa!</span></h2>

                <div className="flex flex-col items-center justify-center hover:scale-[102%] duration-300 py-7">
                    <div className="w-full flex justify-center items-end -mb-3">
                        <img src="/img/rosa.webp" alt="/img/rosa.webp" className={imgSize + " z-10 "} />
                        <img src="/img/amarrillo.webp" alt="/img/amarrillo.webp" className={imgSize + " -ml-7 sm:-ml-15 md:-ml-15 "} />
                        <img src="/img/verde.webp" alt="/img/verde.webp" className={imgSize + " z-10 -ml-7 sm:-ml-15 md:-ml-15 "} />
                        <img src="/img/naranja.webp" alt="/img/naranja.webp" className={imgSize + " -ml-7 sm:-ml-15 md:-ml-15 "} />
                    </div>
                    <button onClick={() => checkoutHandler()} className="flex text-white text-nowrap text-lg min-[375px]:text-xl min-[430px]:text-2xl sm:text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl  eastman-bold items-center justify-center gap-2 bg-[#001A70] py-2 4xl:py-4 px-2 lg:px-7 rounded-md mb-5 w-fit z-10 cursor-pointer">
                        <span className="text-white text-4xl xl:text-6xl"><FiArrowRightCircle /></span>
                        <div className="h-8 3xl:h-12 w-[2px] 3xl:w-[3px] rounded-md bg-white">{" "}</div>
                        <span className="">OBTENER DESCUENTO</span>
                    </button>
                </div>
            </section>
            <section className="w-full bg-[#001A70] text-white flex gap-1 items-center justify-center px-3 py-7 min-[385px]:py-10 xl:py-20 3xl:py-30 border-b-5 border-black relative">
                <div className="w-[3px] xl:w-[4px] 3xl:w-[7px] h-[40px] min-[385px]:h-[50px]  xl:h-[110px] 3xl:h-[140px] rounded-2xl bg-[#97D700]  xl:mt-0 -ml-30 xl:-ml-60 xl:mr-3 min-[500px]:-ml-10"></div>
                <p className="text-sm min-[385px]:text-base min-[420px]:text-lg md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl 4xl:text-7xl eastman-bold leading-5 md:leading-7 lg:leading-8 xl:leading-11 3xl:leading-15 4xl:leading-17">¡Este summer es para vivir <span className="block text-[#97D700] ">grandes aventuras!</span></p>
                <img src="/img/little-explorer-holding-binoculars.png" alt="niña exploradora" className="w-[130px] min-[385px]:w-[160px] sm:w-[220px] lg:w-[250px] xl:w-[350px]  3xl:w-[450px] absolute bottom-0 right-0 xl:right-20 2xl:right-40" />
            </section>

        </>
    )
}