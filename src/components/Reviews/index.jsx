import ReviewsSlider from "../ReviewsSlider";

export default function Reviews() {
    return (
        <section className="w-full bg-verde py-10 sm:py-20 flex flex-col items-center">
            <div className="relative pl-10 pr-5 py-3 sm:py-4 lg:py-6">
                <img src="/img/formablanca.webp" alt="fondo naranja" className="absolute top-0 left-0 w-full h-full" />
                <h2 className="text-azul font-eastman-bold text-lg min-[360px]:text-xl min-[420px]:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl z-10 relative leading-5 min-[420px]:leading-7 xl:leading-12 pl-5">Resultados que hablan <br /> por si solos</h2>
                <img src="/img/caraamarillo.webp" alt="fondo naranja" className="absolute -top-2 min-[420px]:-top-1 sm:-top-3 xl:-top-4 -left-5 min-[420px]:-left-7 sm:-left-14 xl:-left-30 w-[75px] min-[420px]:w-[85px] sm:w-[110px] xl:w-[170px]" />
            </div>
            <ReviewsSlider />
        </section>
    )
}