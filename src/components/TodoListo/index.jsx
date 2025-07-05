import { FiArrowRightCircle } from "react-icons/fi";

export default function TodoListo() {
    const textSize = "w-[200px] min-[350px]:w-[250px] md:w-[350px] lg:w-[420px] xl:w-[600px] 2xl:w-[750px] 3xl:w-[820px] relative text-xs min-[350px]:text-sm md:text-base lg:text-lg xl:text-2xl 2xl:text-3xl 3xl:text-4xl"
    const iconBox = "w-[75px] md:w-fit h-fit flex  flex-wrap gap-1 relative"
    const iconSize = "w-[30px] min-[350px]:w-[35px] md:w-[45px] lg:w-[55px] xl:w-[65px] 2xl:w-[70px] 3xl:w-[75px] 4xl:w-[80px] h-fit md:mr-2 aspect-square"
    return (
        <section id="tematicas" className="w-full flex flex-col items-center">
            <h2 className="text-center text-lg text-azul">¡Todo listo para que tu hijo viva <br />
                las mejores aventuras <span className="font-eastman-bold">en inglés este verano!</span>
            </h2>
            <div className="w-full flex justify-center py-5">
                <div className="flex flex-wrap gap-4 justify-center">
                    <a href="#exploracion" className="w-[150px] lg:w-[200px] xl:w-[250px] 2xl:w-[300px] rounded-md overflow-hidden hover:scale-[102%] duration-300 cursor-pointer">
                        <img src="/img/exploracion.webp" alt="exploracion imagen" />
                    </a>
                    <a href="#deporte" className="w-[150px] lg:w-[200px] xl:w-[250px] 2xl:w-[300px] rounded-md overflow-hidden hover:scale-[102%] duration-300 cursor-pointer">
                        <img src="/img/deporte.webp" alt="deporte imagen" />
                    </a>
                    <a href="#tecnologia" className="w-[150px] lg:w-[200px] xl:w-[250px] 2xl:w-[300px] rounded-md overflow-hidden hover:scale-[102%] duration-300 cursor-pointer">
                        <img src="/img/tecnologia.webp" alt="tecnologia imagen" />
                    </a>
                    <a href="#conoceciudad" className="w-[150px] lg:w-[200px] xl:w-[250px] 2xl:w-[300px] rounded-md overflow-hidden hover:scale-[102%] duration-300 cursor-pointer">
                        <img src="/img/conoceciudad.webp" alt="conoceciudad imagen" />
                    </a>
                </div>
            </div>
            <div id="exploracion" className="w-full py-10 lg:py-15 flex gap-4 justify-center items-center relative text-white">
                <img src="/img/exploracionfondo.webp" alt="figura de fondo para exploracion" className="w-full h-full absolute top-0 left-0" />
                <div className={textSize}>
                    <h3 className="font-eastman-bold">EXPLORACIÓN</h3>
                    <div>

                        <p>Conocerá su lado más <b>aventurero </b>
                            de una forma diferente y divertida.
                        </p>
                    </div>
                </div>
                <div className={iconBox}>
                    <img src="/img/globo.webp" alt="globo terraqueo" className={iconSize} />
                    <img src="/img/franjas.webp" alt="globo terraqueo" className={iconSize} />
                    <img src="/img/montannas.webp" alt="globo terraqueo" className={iconSize} />
                    <img src="/img/linterna.webp" alt="globo terraqueo" className={iconSize} />
                </div>
            </div>
            <div id="deporte" className="w-full py-10 lg:py-15 flex gap-4 justify-center items-center relative text-azul">
                <img src="/img/deportefondo.webp" alt="figura de fondo para exploracion" className="w-full h-full absolute top-0 left-0" />
                <div className={textSize}>
                    <h3 className="font-eastman-bold">DEPORTE</h3>
                    <div>
                        <p>
                            Vivirá una experiencia llena de
                            energía a través del <b>deporte y
                                actividades físicas.</b>
                        </p>
                    </div>
                </div>
                <div className={iconBox}>
                    <img src="/img/escudoe.webp" alt="globo terraqueo" className={iconSize} />
                    <img src="/img/control.webp" alt="globo terraqueo" className={iconSize} />
                    <img src="/img/virtual.webp" alt="globo terraqueo" className={iconSize} />
                    <img src="/img/corona.webp" alt="globo terraqueo" className={iconSize} />
                </div>
            </div>
            <div id="tecnologia" className="w-full py-10 lg:py-15 flex gap-4 justify-center items-center relative text-azul">
                <img src="/img/tecnologiafondo.webp" alt="figura de fondo para exploracion" className="w-full h-full absolute top-0 left-0" />
                <div className={textSize}>
                    <h3 className="font-eastman-bold">TECNOLOGÍA</h3>
                    <div>
                        <p>
                            Hará un recorrido a través de
                            la <b>tecnología</b> y el <b>mundo actual.</b>

                        </p>
                    </div>
                </div>
                <div className={iconBox}>
                    <img src="/img/ia.webp" alt="globo terraqueo" className={iconSize} />
                    <img src="/img/virtual.webp" alt="globo terraqueo" className={iconSize} />
                    <img src="/img/planeta.webp" alt="globo terraqueo" className={iconSize} />
                    <img src="/img/manorobotica.webp" alt="globo terraqueo" className={iconSize} />
                </div>
            </div>
            <div id="conoceciudad" className="w-full py-10 lg:py-15 flex gap-4 justify-center items-center relative text-white">
                <img src="/img/conoceciudadfondo.webp" alt="figura de fondo para exploracion" className="w-full h-full absolute top-0 left-0" />
                <div className={textSize}>
                    <h3 className="font-eastman-bold">CONOCE LA CIUDAD</h3>
                    <div>

                        Se sumergirá en <b>la magia de la
                            ciudad,</b> descubriendo la historia
                        que la hace brillar.

                    </div>
                </div>
                <div className={iconBox}>
                    <img src="/img/globo.webp" alt="globo terraqueo" className={iconSize} />
                    <img src="/img/formas.webp" alt="globo terraqueo" className={iconSize} />
                    <img src="/img/lupa.webp" alt="globo terraqueo" className={iconSize} />
                    <img src="/img/monumento.webp" alt="globo terraqueo" className={iconSize} />
                </div>
            </div>
            <div className="w-full pt-15 pb-10 flex items-center justify-center bg-[url('/img/papel.webp')] bg-center bg-cover -mt-5">
                <div className="flex justify-center hover:scale-[102%] duration-300">
                    <a href="#contacto" className="flex text-naranja text-nowrap text-lg min-[375px]:text-xl min-[430px]:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl font-eastman-bold items-center justify-center gap-2 bg-azul py-2 3xl:py-4 px-2 rounded-md mb-5 w-fit">
                        <span className="text-white text-4xl 3xl:text-5xl"><FiArrowRightCircle /></span>
                        <div className="h-8 3xl:h-12 w-[2px] 3xl:w-[3px] rounded-md bg-white">{" "}</div>
                        <span className="-mt-1">¡INSCRÍBELO AQUÍ!</span>
                    </a>
                </div>
            </div>
        </section >
    )
}