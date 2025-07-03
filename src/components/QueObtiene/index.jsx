export default function QueObtiene() {
    const text = "text-base min-[390px]:text-lg lg:text-xl  font-eastman"
    return (
        <section className="w-full">
            <div className="bg-[url('/img/rayasazules.webp')] bg-center bg-cover h-[60px]"></div>
            <div className="py-10 bg-azul">
                <div className="flex justify-center mb-7">
                    <div className="relative py-3 w-10/12 sm:w-fit sm:px-5">
                        <img src="/img/formaverde.webp" alt="fondo horario" className="w-full h-full absolute top-0 left-0" />
                        <p className="text-white text-nowrap text-xl md:text-2xl lg:text-3xl xl:text-4xl min-[390px]:text-2xl font-eastman-bold relative gap-2 text-center">
                            ¿Qué obtiene tu hijo <br /> <span className="text-azul">en el Summer?</span>
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-center py-7">
                    <div className="flex flex-col md:flex-row md:flex-wrap md:gap-3 text-4xl min-[390px]:text-6xl lg:text-7xl font-eastman-bold items-end pr-3 gap-3 text-white w-[320px] min-[390px]:w-[390px] md:w-full md:justify-center md:gap-y-5">
                        <div className="flex items-center">
                            <div className="h-18 w-[60px] min-[390px]:w-[80px] lg:w-[100px] justify-end pr-3 flex items-center">4</div>
                            <div className="rounded-md bg-naranja py-2 px-3 text-azul h-18 w-[250px] min-[390px]:w-[280px] lg:w-[320px] flex items-center">
                                <p className={text}>
                                    Semanas de <span className="font-eastman-bold">temáticas increíbles</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="h-18 w-[60px] min-[390px]:w-[80px] lg:w-[100px] justify-end pr-3 flex items-center">60</div>
                            <div className="rounded-md bg-white py-2 px-3 text-azul h-18  w-[250px] min-[390px]:w-[280px] lg:w-[320px]">
                                <p className={text}>
                                    Horas de <span className="font-eastman-bold">diversión y aprendizaje </span>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="h-18 flex w-[60px] min-[390px]:w-[80px] lg:w-[100px] justify-end pr-3 items-center">

                                <img src="/img/certificadoblanco.webp" alt="certificado en blanco" className="w-10/12 object-right h-fit" />
                            </div>
                            <div className="h-18 flex items-center">
                                <div className="rounded-md bg-naranja py-2 px-3 text-azul h-18  w-[250px] min-[390px]:w-[280px] lg:w-[320px]">
                                    <p className={text}>
                                        <span className="font-eastman-bold">Certificado  </span> de culminación
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="h-18  w-[60px] min-[390px]:w-[80px] lg:w-[100px] justify-end pr-3 flex items-center">
                                <img src="/img/comunicacion.webp" alt="certificado en blanco" className="w-10/12" />
                            </div>
                            <div className="rounded-md bg-white py-2 px-3 text-azul h-18  w-[250px] min-[390px]:w-[280px] lg:w-[320px]">
                                <p className={text}>
                                    Socialización <span className="font-eastman-bold">100% en inglés</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="h-18 w-[60px] min-[390px]:w-[80px] lg:w-[100px] justify-end pr-3 flex items-center">
                                <img src="/img/estrella.webp" alt="certificado en blanco" className="w-10/12" />
                            </div>
                            <div className="rounded-md bg-naranja py-2 px-3 text-azul h-18  w-[250px] min-[390px]:w-[280px] lg:w-[320px]">
                                <p className={text}>
                                    Unas vacaciones que <span className="font-eastman-bold"> recordará toda su vida</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}