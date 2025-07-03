export default function Diferenciadores() {
    const square = "w-[40px] sm:w-[60px] lg:w-[80px] 2xl:w-[100px] h-fit"
    return (
        <div className="w-full flex justify-center text-azul font-eastman-bold text-md
             min-[400px]:text-xl min-[460px]:text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl mt-5">
            <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                    <div className=" bg-verde p-2 rounded-lg">
                        <img src="/img/PERSONAESTRELLA.webp" alt="persona estrella icono" className={square} />
                    </div>
                    <div className="relative px-2 py-2 flex justify-center items-cente h-fit ">
                        <img src="/img/fondoformablanco.webp" alt="forma fondo blanco" className="w-full h-full absolute top-0" />
                        <h3 className="relative">GUÍAS CERTIFICADOS</h3>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className=" bg-azul p-2 rounded-lg">
                        <img src="/img/FORMASGEOBLANCAS.webp" alt="persona estrella icono" className={square} />
                    </div>
                    <div className="relative px-2 py-2 flex justify-center items-cente h-fit ">
                        <img src="/img/fondoformablanco.webp" alt="forma fondo blanco" className="w-full h-full absolute top-0" />
                        <h3 className="relative">ACTIVIDADES RECREATIVAS</h3>
                    </div>
                </div><div className="flex gap-2 items-center">
                    <div className=" bg-naranja p-2 rounded-lg">
                        <img src="/img/DOSPERSONAS.webp" alt="persona estrella icono" className={square} />
                    </div>
                    <div className="relative px-2 py-2 flex justify-center items-cente h-fit ">
                        <img src="/img/fondoformablanco.webp" alt="forma fondo blanco" className="w-full h-full absolute top-0" />
                        <h3 className="relative">CUPOS LIMITADOS</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}