export default function Summer2025() {
    return (
        <>
            <section className="py-10 bg-azul flex flex-col md:flex-row items-center justify-center overflow-hidden">
                <div className="w-[290px] min-[360px]:w-[350px] md:w-[400px] xl:w-[600px] 2xl:w-[700px] 4xl:w-[800px] relative">
                    <img src="/img/logo2.png" alt="logo summer 2025 fyr lois" className="w-full" />
                </div>
                <div className="flex gap-3 h-full md:-ml-10">
                    <div className=" w-[4px] 2xl:w-[8px] 4xl:w-[10px] rounded-lg bg-white"></div>
                    <h2 className="text-white min-[370px]:text-lg min-[440px]:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 4xl:text-6xl font-eastman-bold text-nowrap leading-5 sm:leading-7 xl:leading-9 3xl:leading-11 4xl:leading-15"><span className="font-lemon-bold">26</span> AÑOS BRINDANDO <br />
                        EXPERIENCIAS INIGUALABLES <br />
                        <span className="text-verde font-lemon-bold">100</span><span className="font-eastman-bold text-verde">% EN INGLÉS</span>
                    </h2>
                </div>
            </section>
            <div className="w-full h-[60px] bg-[url('/img/rayasazules.webp')] bg-center bg-cover"></div>
        </>
    )
}