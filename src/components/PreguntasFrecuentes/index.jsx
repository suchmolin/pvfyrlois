import { useState } from "react"

export default function PreguntasFrecuentes() {
    const [selected, setSelected] = useState(-1)
    const preguntas = [
        {
            id: 1,
            ask: "¿Se necesita tener un nivel de inglés para inscribir a mi hijo?",
            ans: "No es necesario contar con un nivel de inglés previo. Nuestros teachers están preparados para capacitar, según el nivel del estudiante."
        },
        {
            id: 2,
            ask: "¿Cuál es la metodología de enseñanza utilizada?",
            ans: "Nuestra metodología está alineada al Marco Común Europeo de Referencia para las Lenguas, con un enfoque inmersivo y práctico que le permitirá desarrollar fluidez y confianza al comunicarse en el idioma inglés."
        },
        {
            id: 3,
            ask: "¿Se necesita llevar algo para el Plan Vacacional?",
            ans: "Además de las ganas de divertirse y aprender, no es necesario traer nada adicional para vivir esta increíble experiencia."
        },
    ]
    const imgSize = "w-[40px] lg:w-[90px] xl:w-[110px]"
    const boxStyle = "w-[100px] min-[440px]:w-[130px] lg:w-[190px] xl:w-[250px] 3xl:w-[350px] flex flex-col items-center py-2 xl:py-6 justify-center rounded-md"
    const textStyle = "text-center text-white font-bold text-xs min-[440px]:text-sm lg:text-base xl:text-xl 3xl:text-2xl 3xl:mt-3"
    return (
        <section id="faq" className="w-full bg-amarillo flex flex-col items-center py-10 xl:py-15 3xl:py-25 relative">

            <div className="relative pl-10 lg:pl-20 pr-5 py-3 lg:py-8 -mr-3">
                <img src="/img/formablanca.webp" alt="fondo naranja" className="absolute top-0 left-0 w-full h-full" />
                <h2 className="text-azul font-eastman-bold text-lg min-[360px]:text-xl min-[420px]:text-2xl lg:text-3xl 3xl:text-4xl text-center z-10 relative">PREGUNTAS FRECUENTES</h2>
                <img src="/img/carapersonajeaventura.webp" alt="fondo naranja" className="absolute -top-5 lg:-top-7 3xl:-top-11 -left-5 3xl:-left-10 w-[50px] min-[420px]:w-[55px] lg:w-[90px] 3xl:w-[110px]" />
            </div>
            <div className="w-full flex gap-2 justify-center py-7">
                <div className={`${boxStyle} bg-azul`}>
                    <img src="/img/niveles.webp" alt="nivel de ingles" className={imgSize} />
                    <p className={textStyle}>Nivel de inglés</p>
                </div>
                <div className={`${boxStyle} bg-naranja`}>
                    <img src="/img/marcocomuneuropeoblanco.webp" alt="nivel de ingles" className={imgSize} />
                    <p className={textStyle}>Metodología</p>
                </div>
                <div className={`${boxStyle} bg-verde`}>
                    <img src="/img/requisitos.webp" alt="nivel de ingles" className={imgSize} />
                    <p className={textStyle}>Requisitos</p>
                </div>
            </div>
            <div className="w-full flex justify-center">

                <div className="w-[300px] min-[360px]:w-[330px] min-[430px]:w-[400px] lg:w-[590px] xl:w-[770px] 3xl:w-[1070px] flex flex-col">
                    {
                        preguntas.map(ask => (
                            <div key={ask.id} className=" text-lg lg:text-xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 3xl:mb-4">
                                <div
                                    className="rounded-lg bg-gray-100 py-3 px-5 3xl:p-10 flex gap-5 cursor-pointer mb-5 items-center"
                                    onClick={() => setSelected(selected === ask.id ? -1 : ask.id)}
                                >
                                    <div className=" text-xl xl:text-6xl select-none flex items-center h-full">{selected === ask.id ? "-" : "+"}</div>
                                    <p className="text-azul">{ask.ask}</p>
                                </div>
                                <div
                                    className={`bg-white overflow-hidden transition-all duration-300 ${selected === ask.id ? "h-fit p-10 mb-5" : "h-0 p-0 mb-0"}`}
                                >
                                    {selected === ask.id && (
                                        <p className="text-gray-700">{ask.ans}</p>
                                    )}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <img src="/img/lineadiscontinuaazul.webp" alt="linea punteada azul" className="w-full absolute bottom-3" />
        </section>
    )
}