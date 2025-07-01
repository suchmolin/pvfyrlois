export default function Aniversary() {
    return (
        <div className="py-10 bg-[url('/img/rayasgrisesfondo.webp')] bg-center bg-cover flex flex-col items-center overflow-hidden">
            <div className="w-[320px] min-[400px]:w-[360px] rounded-md overflow-hidden flex-col flex mb-5">
                <div className="w-full flex bg-gray-200 relative">
                    <div className="w-1/2 flex justify-center py-5">
                        <img src="/img/26aniversary.webp" alt="logo 26 aniversary Fyr Lois" className="w-[80px] h-auto" />
                    </div>
                    <div className="w-1/2 flex justify-center py-5">
                        <img src="/img/sesiones.webp" alt="logo 26 aniversary Fyr Lois" className="w-[80px] h-auto" />
                    </div>
                    <div className="flex items-center absolute left-1/2 top-0 h-full">
                        <div className="w-[2px] bg-naranja h-8/12 rounded-2xl "></div>
                    </div>
                </div>
                <div className="w-full flex bg-azul relative text-white text-xs min-[400px]:text-sm text-center">
                    <div className="w-1/2 flex justify-center py-5">
                        <p>26 años ofreciendo <br /> planes vacacionales</p>
                    </div>
                    <div className="w-1/2 flex justify-center py-5">
                        <p>Sesiones 100% <br /> en inglés</p>
                    </div>

                </div>

            </div>
            <div className="w-[320px] min-[400px]:w-[360px] rounded-md overflow-hidden flex-col flex">
                <div className="w-full flex bg-gray-200 relative">
                    <div className="w-1/2 flex justify-center py-5">
                        <img src="/img/certificado.webp" alt="logo 26 aniversary Fyr Lois" className="w-[80px] h-auto" />
                    </div>
                    <div className="w-1/2 flex justify-center py-5">
                        <img src="/img/marcocomun.webp" alt="logo 26 aniversary Fyr Lois" className="w-[80px] h-auto" />
                    </div>
                    <div className="flex items-center absolute left-1/2 top-0 h-full">
                        <div className="w-[2px] bg-naranja h-8/12 rounded-2xl "></div>
                    </div>
                </div>
                <div className="w-full flex bg-azul relative text-white text-xs min-[400px]:text-xs text-center">
                    <div className="w-1/2 flex justify-center py-5">
                        <p>Certificado de <br /> culminación</p>
                    </div>
                    <div className="w-1/2 flex justify-center py-5">
                        <p>Metodología  alineada <br /> al  Marco Común Europeo</p>
                    </div>

                </div>

            </div>
        </div>
    )
}