export default function QueObtiene() {
    const text = "text-base min-[390px]:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl eastman";

    const data = [
        {
            num: 4,
            bg: "bg-[#FFA400]",
            textColor: "text-[#001A70]",
            content: (
                <>
                    Semanas de <span className="eastman-bold">temáticas increíbles</span>
                </>
            ),
            icon: null,
        },
        {
            num: 60,
            bg: "bg-white",
            textColor: "text-[#001A70]",
            content: (
                <>
                    Horas de <span className="eastman-bold">diversión y aprendizaje </span>
                </>
            ),
            icon: null,
        },
        {
            num: null,
            bg: "bg-[#FFA400]",
            textColor: "text-[#001A70]",
            content: (
                <>
                    <span className="eastman-bold">Certificado  </span> de culminación
                </>
            ),
            icon: <img src="/img/certificadoblanco.webp" alt="certificado en blanco" className="w-10/12 object-right  " />,
        },
        {
            num: null,
            bg: "bg-white",
            textColor: "text-[#001A70]",
            content: (
                <>
                    Socialización <span className="lemon-bold">100</span><span className="eastman-bold">% en inglés</span>
                </>
            ),
            icon: <img src="/img/comunicacion.webp" alt="comunicación" className="w-10/12" />,
        },
        {
            num: null,
            bg: "bg-[#FFA400]",
            textColor: "text-[#001A70]",
            content: (
                <>
                    Unas vacaciones que <span className="eastman-bold"> recordará toda su vida</span>
                </>
            ),
            icon: <img src="/img/estrella.webp" alt="estrella" className="w-10/12" />,
        },
    ];

    return (
        <section className="w-full">
            <div className="bg-[url('/img/rayasazules.webp')] bg-center bg-cover h-[60px] 4xl:h-[120px]"></div>
            <div className="py-10 bg-[#001A70]">
                <div className="flex justify-center mb-7">
                    <div className="relative py-3 w-10/12 sm:w-fit sm:px-5">
                        <img src="/img/formaverde.webp" alt="fondo horario" className="w-full h-full absolute top-0 left-0" />
                        <p className="text-white text-nowrap text-xl md:text-2xl lg:text-3xl xl:text-4xl min-[390px]:text-2xl eastman-bold relative gap-2 text-center leading-6 lg:leading-8 xl:leading-10">
                            ¿Qué obtiene tu hijo <br /> <span className="text-[#001A70]">en el Summer?</span>
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-center py-7">
                    <div className="flex 3xl:grid grid-cols-2 flex-col md:flex-row md:flex-wrap md:gap-3 text-4xl min-[390px]:text-6xl lg:text-7xl 3xl:text-8xl eastman-bold items-end pr-3 gap-3 xl:gap-y-7 text-white w-[320px] min-[390px]:w-[390px] md:w-full md:justify-center md:gap-y-5 3xl:justify-center">
                        {data.map((item, idx) => (
                            <div
                                className={`flex items-center ${idx % 2 == 0 ? "justify-end" : ""} ${idx == data.length - 1 ? "" : ""} ${idx === 4 ? "3xl:col-span-2 3xl:justify-center" : ""}`}
                                key={idx}
                            >
                                <div className={`h-18 2xl:h-24 3xl:h-28 ${item.icon ? 'flex' : ''} w-[60px] min-[390px]:w-[80px] md:w-[120px] xl:w-[160px] 2xl:w-[200px] 3xl:w-[150px] justify-end pr-3 items-center ${item.icon ? 'md:p-5 xl:p-7 2xl:pl-20 3xl:pl-0' : 'flex'} lemon-bold`}>
                                    {item.num !== null ? item.num : item.icon}
                                </div>
                                <div className={`rounded-md ${item.bg} py-2 px-3 ${item.textColor} h-18 2xl:h-24 3xl:h-28 w-[250px] min-[390px]:w-[280px] lg:w-[320px] xl:w-[360px] 2xl:w-[370px] 3xl:w-[450px] flex items-center`}>
                                    <p className={text}>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}