import Aniversary from "../Aniversary";

export default function Motivalo() {
    return (
        <section className="w-full">
            <div className="pt-10 bg-[url('/img/rayasgrisesfondo.webp')] bg-center bg-cover">
                <div className="flex justify-center mb-7">
                    <div className="relative p-3 w-fit">
                        <img src="/img/fondoNaranja.webp" alt="fondo naranja" className="w-full h-full absolute top-0 left-0" />
                        <p className="text-white text-nowrap text-base min-[360px]:text-lg min-[395px]:text-xl min-[480px]:text-2xl font-eastman-bold relative text-center">
                            ¡Motívalo a que explore
                            <br />
                            el mundo <span className="text-azul">a través del idioma!</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white px-4 text-azul font-eastman-bold text-sm">
                Somos una empresa americana con más de <span className="text-naranja">2 décadas enseñando idiomas alrededor del mundo. </span>
                <br />
                <br />
                Hemos creado un método único para que aprender un idioma sea una experiencia que se disfrute y sea efectiva.
            </div>
            <Aniversary />
        </section>
    )
}