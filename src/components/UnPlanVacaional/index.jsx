import { FiArrowRightCircle } from "react-icons/fi"

export default function UnPlanVacaional() {
    const cards = [
        {
            title: "KIDS: ",
            age: "3-5 ",
            titleColor: "#001A70",
            icon: "/img/rosa.webp",
            img: "/img/nina.png",
            bg: "#D60078",
            textBold: "¡Curiosidad sin límites! ",
            text: "Actividades diseñadas para acompañar sus primeros pasos junto al  inglés, mientras descubren el mundo a través de juegos y rutinas que estimulan su imaginación.",
            width: "w-[160px] sm:w-[180px] xl:w-[270px] 3xl:w-[320px] sm:-left-5 xl:-left-25 3xl:-left-40",
            point: "#FFD700",
        },
        {
            title: "ELEMENTARY: ",
            age: "6–11 ",
            titleColor: "#97D700",
            icon: "/img/naranja.webp",
            img: "/img/nino.png",
            bg: "#001A70",
            textBold: "¡Es momento de explorar! ",
            text: "Tu hijo vivirá aventuras para impulsar su creatividad y trabajo en equipo, a través de retos y dinámicas interactivas que conectan con sus Intereses.",
            reverse: true,
            width: "w-[220px] sm:w-[230px] xl:w-[320px] 3xl:w-[380px] sm:-left-10 xl:-left-30 3xl:-left-45",
            point: "#001A70",
        },
        {
            title: "HIGH SCHOOL: ",
            age: "12–16 ",
            titleColor: "#001A70",
            icon: "/img/verde.webp",
            img: "/img/adolecente.png",
            bg: "#97D700",
            textBold: "¡A conquistar el mundo! ",
            text: "Una aventura lingüística adaptada a su edad, con desafíos divertidos para desenvolverse con confianza en escenarios reales.",
            width: "w-[220px] sm:w-[210px] xl:w-[290px] 3xl:w-[360px] sm:-left-5 xl:-left-20 3xl:-left-35",
            point: "#FFA400",
        },
    ]
    return (
        <section id="edades" className="w-full flex flex-col items-center  overflow-hidden">
            <div className="w-full bg-verde text-center pt-10 pb-7 3xl:py-20">
                <h2 className="text-azul text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xltext-6xl 4xl:text-7xl font-eastman-bold leading-7 md:leading-8 xl:leading-10 2xl:leading-12 4xl:leading-17">
                    ¡UN PLAN VACACIONAL <br />
                    <span className="text-white">ADAPTADO A SU EDAD!</span>

                </h2>
            </div>
            <div className={`w-full bg-white relative `}>
                <img src="/img/formaverde2.png" alt="formaverde" className="absolute w-full -top-5" />
                <img src="/img/manoizquierda.webp" alt="mano izq" className="absolute w-[180px] lg:w-[250px] xl:w-[350px] 3xl:w-[500px] -top-8 sm:-top-30 3xl:-top-50 -left-15 xl:-left-25 3xl:-left-35" />
                <img src="/img/manoderecha.webp" alt="mano der" className="absolute w-[180px] lg:w-[250px] xl:w-[350px] 3xl:w-[500px] -top-8 sm:-top-30 3xl:-top-50 -right-15 xl:-right-25  3xl:-rigth-35" />
            </div>
            <div className="w-full flex flex-col items-center gap-3 mt-10 min-[440px]:mt-0  sm:mt-15 xl:mt-35">
                {
                    cards.map(card => (
                        <div key={card.title} className="w-full sm:w-[700px] xl:w-[800px] 2xl:w-[850px] 3xl:w-[900px] 4xl:w-[950px] flex flex-col items-center mb-3 relative sm:mb-20">
                            {/* <div className="w-full h-[60px] absolute bottom-0 bg-[url('/img/rayasgrisesfondo.webp')] bg-center bg-cover"></div> */}
                            <div className={`relative w-full flex justify-center items-end ${card.reverse ? "flex-row-reverse" : ""}`}>
                                <img src={card.icon} alt={`icon for ${card.title}`} className={`block sm:hidden w-[150px] -mb-5 ${card.reverse ? "-ml-10" : "-mr-10"}`} />
                                <img src={card.img} alt={`image for ${card.title}`} className={`block sm:hidden ${card.width} h-fit`} />
                                <h3 style={{ color: card.titleColor }} className={`hidden sm:flex items-center gap-1 font-eastman-bold xl:text-3xl 2xl:text-4xl 3xl:text-4xl 4xl:text-4xl`}>
                                    <span style={{ backgroundColor: card.point }} className="hidden sm:block w-[12px] h-[12px] rounded-full mt-1"></span>
                                    {card.title} <span className="font-lemon-bold -mt-1">{card.age}</span> AÑOS
                                </h3>
                            </div>
                            <div style={{ backgroundColor: card.bg }} className={`relative  w-11/12 rounded-lg py-3 px-5 text-white sm:flex sm:items-center xl:mb-20`}>
                                <h3 style={{ color: card.titleColor }} className={`flex items-center gap-1 font-bold sm:hidden`}>
                                    <span className="w-[8px] h-[8px] bg-white rounded-full mt-1"></span>
                                    {card.title} <span className="font-lemon -mt-1">{card.age}</span> AÑOS
                                </h3>
                                <div className="hidden sm:block w-[600px]"></div>
                                <img src={card.img} alt={`image for ${card.title}`} className={`hidden sm:block ${card.width}  absolute bottom-0`} />
                                <p className="text-center sm:text-start text-base sm:text-lg xl:text-2xl 3xl:text-3xl font-lato xl:py-5 3xl:py-6 leading-5 md:leading-6 xl:leading-7 3xl:leading-9">
                                    <span className="font-lato-bold">{card.textBold}</span>
                                    {card.text}
                                </p>
                            </div>
                        </div>

                    ))
                }
            </div>

            <div className="flex justify-center hover:scale-[102%] duration-300 py-7 md:py-0">
                <a href="#contacto" className="flex text-naranja text-nowrap text-lg min-[375px]:text-xl min-[430px]:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-eastman-bold items-center justify-center gap-2 bg-azul py-2 2xl:py-4 px-2 rounded-md mb-5 w-fit">
                    <span className="text-white text-4xl 3xl:text-5xl 4xl:text-6xl"><FiArrowRightCircle /></span>
                    <div className="h-8 3xl:h-12 w-[2px] 3xl:w-[3px] rounded-md bg-white">{" "}</div>
                    <span className="-mt-1">¡QUIERO INSCRIBIRLO!</span>
                </a>
            </div>

        </section>
    )
}