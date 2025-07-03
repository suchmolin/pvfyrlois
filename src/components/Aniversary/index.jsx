export default function Aniversary() {
    return (
        <div className="py-10 bg-[url('/img/rayasgrisesfondo.webp')] bg-center bg-cover flex flex-col md:flex-row items-center overflow-hidden md:gap-4 md:justify-center font-lato-bold ">
            <div className="w-[320px] min-[400px]:w-[360px] lg:w-[450px]  rounded-md overflow-hidden flex-col flex mb-5 md:mb-0">
                <div className="w-full  h-[120px] lg:h-[140px] flex bg-gray-200 relative">
                    <div className="w-1/2 flex justify-center items-center py-5">
                        <img src="/img/26aniversary.webp" alt="logo 26 aniversary Fyr Lois" className="w-[80px] lg:w-[110px] h-fit" />
                    </div>
                    <div className="w-1/2 flex justify-center items-center py-5">
                        <img src="/img/sesiones.webp" alt="logo 26 aniversary Fyr Lois" className="w-[80px] lg:w-[110px]  h-fit" />
                    </div>
                    <div className="flex items-center absolute left-1/2 top-0 h-full">
                        <div className="w-[2px] bg-naranja h-8/12 rounded-2xl "></div>
                    </div>
                </div>
                <div className="w-full  h-[70px] flex bg-azul relative text-white text-xs min-[400px]:text-xs text-center">
                    <div className="w-1/2 flex justify-center py-5">
                        <p>26 AÑOS OFRECIENDO <br /> PLANES VACACIONALES</p>
                    </div>
                    <div className="w-1/2 flex justify-center py-5">
                        <p>SESIONES 100% <br /> EN INGLÉS</p>
                    </div>

                </div>

            </div>
            <div className="w-[320px] min-[400px]:w-[360px] lg:w-[450px]  rounded-md overflow-hidden flex-col flex">
                <div className="w-full  h-[120px] lg:h-[140px] flex bg-gray-200 relative">
                    <div className="w-1/2 flex justify-center items-center py-5">
                        <img src="/img/certificado.webp" alt="logo 26 aniversary Fyr Lois" className="w-[70px] lg:w-[100px]  h-fit" />
                    </div>
                    <div className="w-1/2 flex justify-center items-center py-5">
                        <img src="/img/marcocomun.webp" alt="logo 26 aniversary Fyr Lois" className="w-[70px] lg:w-[100px]  h-fit" />
                    </div>
                    <div className="flex items-center absolute left-1/2 top-0 h-full">
                        <div className="w-[2px] bg-naranja h-8/12 rounded-2xl "></div>
                    </div>
                </div>
                <div className="w-full  h-[70px] flex bg-azul relative text-white text-xs min-[400px]:text-xs lg:text-xs text-center">
                    <div className="w-1/2 flex justify-center py-5">
                        <p>CERTIFICADO DE <br /> CULMINACIÓN</p>
                    </div>
                    <div className="w-1/2 flex justify-center py-5">
                        <p>METODOLOGÍA ALINEADA <br /> AL MARCO COMÚN EUROPEO</p>
                    </div>

                </div>

            </div>
        </div>
    )
}