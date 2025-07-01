export default function QueObtiene() {

    return (
        <section className="w-full">
            <div className="bg-[url('/img/rayasazules.webp')] bg-center bg-cover h-[60px]"></div>
            <div className="py-10 bg-azul">
                <div className="flex justify-center mb-7">
                    <div className="relative py-3 w-10/12">
                        <img src="/img/formaverde.webp" alt="fondo horario" className="w-full h-full absolute top-0 left-0" />
                        <p className="text-white text-nowrap text-xl min-[390px]:text-2xl font-eastman-bold relative gap-2 text-center">
                            ¿Qué obtiene tu hijo <br /> <span className="text-azul">en el Summer?</span>
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-center py-7">
                    <div className="flex flex-col w-[50px] min-[390px]:w-[60px] text-4xl min-[390px]:text-6xl font-lato-bold items-end pr-3 gap-3 text-white">
                        <div className="h-18 flex items-center">4</div>
                        <div className="h-18 flex items-center">60</div>
                        <div className="h-18 flex items-center">
                            <img src="/img/certificadoblanco.webp" alt="certificado en blanco" />
                        </div>
                        <div className="h-18 flex items-center">
                            <img src="/img/comunicacion.webp" alt="certificado en blanco" />
                        </div>
                        <div className="h-18 flex items-center">
                            <img src="/img/estrella.webp" alt="certificado en blanco" />
                        </div>
                    </div>
                    <div className="flex flex-col w-[250px] min-[390px]:w-[270px] gap-3 text-base min-[390px]:text-lg  font-eastman">
                        <div className="rounded-md bg-naranja py-2 px-3 text-azul h-18 flex items-center">
                            <p>
                                Semanas de <span className="font-eastman-bold">temáticas increíbles</span>
                            </p>
                        </div>
                        <div className="rounded-md bg-white py-2 px-3 text-azul h-18">
                            <p>
                                Horas de <span className="font-eastman-bold">diversión y aprendizaje </span>
                            </p>
                        </div>
                        <div className="rounded-md bg-naranja py-2 px-3 text-azul h-18">
                            <p>
                                <span className="font-eastman-bold">Certificado  </span> de culminación
                            </p>
                        </div>
                        <div className="rounded-md bg-white py-2 px-3 text-azul h-18">
                            <p>
                                Socialización <span className="font-eastman-bold">100% en inglés</span>
                            </p>
                        </div>
                        <div className="rounded-md bg-naranja py-2 px-3 text-azul h-18">
                            <p>
                                Unas vacaciones que <span className="font-eastman-bold"> recordará toda su vida</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}