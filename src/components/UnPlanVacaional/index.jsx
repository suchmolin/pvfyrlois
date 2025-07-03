import { FiArrowRightCircle } from "react-icons/fi"

export default function UnPlanVacaional() {
    const cards = [
        {
            title: "KIDS: 3-5 AÑOS",
            titleColor: "#001A70",
            icon: "/img/rosa.webp",
            img: "/img/nina.png",
            bg: "#D60078",
            textBold: "¡Curiosidad sin límites! ",
            text: "Actividades diseñadas para acompañar sus primeros pasos junto al  inglés, mientras descubren el mundo a través de juegos y rutinas que estimulan su imaginación.",
            width: "w-[160px] sm:w-[180px] sm:-left-5",
            point: "#FFD700",
        },
        {
            title: "ELEMENTARY: 6–11 AÑOS",
            titleColor: "#97D700",
            icon: "/img/naranja.webp",
            img: "/img/nino.png",
            bg: "#001A70",
            textBold: "¡Es momento de explorar! ",
            text: "Tu hijo vivirá aventuras para impulsar su creatividad y trabajo en equipo, a través de retos y dinámicas interactivas que conectan con sus Intereses.",
            reverse: true,
            width: "w-[220px] sm:w-[230px] sm:-left-10",
            point: "#001A70",
        },
        {
            title: "HIGH SCHOOL: 12–16 AÑOS",
            titleColor: "#001A70",
            icon: "/img/verde.webp",
            img: "/img/adolecente.png",
            bg: "#97D700",
            textBold: "¡A conquistar el mundo! ",
            text: "Una aventura lingüística adaptada a su edad, con desafíos divertidos para desenvolverse con confianza en escenarios reales.",
            width: "w-[220px] sm:w-[210px] sm:-left-5",
            point: "#FFA400",
        },
    ]
    return (
        <section id="edades" className="w-full flex flex-col items-center  overflow-hidden">
            <div className="w-full bg-verde text-center pt-10 pb-7">
                <h2 className="text-azul text-2xl font-eastman-bold">
                    ¡UN PLAN VACACIONAL <br />
                    <span className="text-white">ADAPTADO A SU EDAD!</span>

                </h2>
            </div>
            <div className={`w-full bg-white relative `}>
                <img src="/img/formaverde2.png" alt="formaverde" className="absolute w-full -top-5" />
                <img src="/img/manoizquierda.webp" alt="mano izq" className="absolute w-[180px] lg:w-[250px] xl:w-[350px] -top-8 sm:-top-30 -left-15 xl:-left-25" />
                <img src="/img/manoderecha.webp" alt="mano der" className="absolute w-[180px] lg:w-[250px] xl:w-[350px] -top-8 sm:-top-30 -right-15 xl:-right-25" />
            </div>
            <div className="w-full flex flex-col items-center gap-3 mt-10 min-[440px]:mt-0  sm:mt-15">
                {
                    cards.map(card => (
                        <div key={card.title} className="w-full sm:w-[700px] flex flex-col items-center mb-3 relative sm:mb-20">
                            {/* <div className="w-full h-[60px] absolute bottom-0 bg-[url('/img/rayasgrisesfondo.webp')] bg-center bg-cover"></div> */}
                            <div className={`relative w-full flex justify-center items-end ${card.reverse ? "flex-row-reverse" : ""}`}>
                                <img src={card.icon} alt={`icon for ${card.title}`} className={`block sm:hidden w-[150px] -mb-5 ${card.reverse ? "-ml-10" : "-mr-10"}`} />
                                <img src={card.img} alt={`image for ${card.title}`} className={`block sm:hidden ${card.width} h-fit`} />
                                <h3 style={{ color: card.titleColor }} className={`hidden sm:flex items-center gap-1 font-bold`}>
                                    <span style={{ backgroundColor: card.point }} className="hidden sm:block w-[12px] h-[12px] rounded-full mt-1"></span>
                                    {card.title}
                                </h3>
                            </div>
                            <div style={{ backgroundColor: card.bg }} className={`relative  w-11/12 rounded-lg py-3 px-5 text-white sm:flex sm:items-center`}>
                                <h3 style={{ color: card.titleColor }} className={`flex items-center gap-1 font-bold sm:hidden`}>
                                    <span className="w-[8px] h-[8px] bg-white rounded-full mt-1"></span>
                                    {card.title}
                                </h3>
                                <div className="hidden sm:block w-[600px]"></div>
                                <img src={card.img} alt={`image for ${card.title}`} className={`hidden sm:block ${card.width}  absolute bottom-0`} />
                                <p className="text-center  sm:text-start text-sm sm:text-base"><b>{card.textBold}</b>{card.text}</p>
                            </div>
                        </div>

                    ))
                }
            </div>

            <div className="flex justify-center hover:scale-[102%] duration-300 py-7 md:py-0">
                <a href="#contacto" className="flex text-naranja text-nowrap text-lg min-[375px]:text-xl min-[430px]:text-2xl md:text-3xl xl:text-4xl font-eastman-bold items-center justify-center gap-2 bg-azul py-2 px-2 rounded-md mb-5 w-fit">
                    <span className="text-white text-4xl"><FiArrowRightCircle /></span>
                    <div className="h-8 w-[2px] rounded-md bg-white">{" "}</div>
                    <span className="-mt-1">¡QUIERO INSCRIBIRLO!</span>
                </a>
            </div>

        </section>
    )
}