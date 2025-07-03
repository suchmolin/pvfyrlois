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
    const imgSize = "w-[40px] lg:w-[60px]"
    const boxStyle = "w-[100px] min-[440px]:w-[130px] lg:w-[160px] xl:w-[180px] flex flex-col items-center py-2 justify-center rounded-md"
    const textStyle = "text-center text-white font-bold text-xs min-[440px]:text-sm lg:text-base"
    return (
        <section id="faq" className="w-full bg-amarillo flex flex-col items-center py-10 xl:py-15 relative">

            <div className="relative pl-10 pr-5 py-3">
                <img src="/img/formablanca.webp" alt="fondo naranja" className="absolute top-0 left-0 w-full h-full" />
                <h2 className="text-azul font-lato-bold text-lg min-[360px]:text-xl min-[420px]:text-2xl lg:text-4xl text-center z-10 relative">PREGUNTAS FRECUENTES</h2>
                <img src="/img/carapersonajeaventura.webp" alt="fondo naranja" className="absolute -top-5 -left-5 w-[50px] min-[420px]:w-[55px] lg:w-[60px]" />
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

                <div className="w-[300px] min-[360px]:w-[330px] min-[430px]:w-[400px] lg:w-[510px] xl:w-[600px] flex flex-col">
                    {
                        preguntas.map(ask => (
                            <div key={ask.id} className=" text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                <div
                                    className="rounded-lg bg-gray-100 py-3 px-5 flex gap-5 cursor-pointer mb-5"
                                    onClick={() => setSelected(selected === ask.id ? -1 : ask.id)}
                                >
                                    <div className="font-bold text-xl select-none">{selected === ask.id ? "-" : "+"}</div>
                                    <p className="text-azul">{ask.ask}</p>
                                </div>
                                <div
                                    className={`bg-white overflow-hidden transition-all duration-300 ${selected === ask.id ? "h-fit py-3 px-5 mb-5" : "h-0 p-0 mb-0"}`}
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