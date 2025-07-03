import { useState } from "react"
import { FiArrowRightCircle } from "react-icons/fi"
import { useRef } from "react"

export default function AsiSeVive() {
    const [selected, setSelected] = useState(1)
    const videos = [
        {
            id: 0,
            url: "/img/padre1.mp4",
            poster: "",
        },
        {
            id: 1,
            url: "/img/madreehijo.mp4",
            poster: "",
        },
        {
            id: 2,
            url: "/img/madre1.mp4",
            poster: "",
        },
    ]
    const widthUnsel = "w-[60px] min-[410px]:w-[80px] min-[500px]:w-[100px] md:w-[150px] lg:w-[170px] xl:w-[190px]"
    const widthSel = "w-[160px] min-[410px]:w-[200px] min-[500px]:w-[220px] md:w-[260px] lg:w-[280px] xl:w-[310px]"

    // Refs para controlar los videos
    const videoRefs = useRef([])

    // Función para manejar la selección y reproducción/pausa
    const handleSelect = (id) => {
        const idx = videos.findIndex(vid => vid.id === id)
        const ref = videoRefs.current[idx]
        if (selected === id) {
            if (ref) {
                if (ref.paused) {
                    ref.play()
                } else {
                    ref.pause()
                }
            }
            return
        }
        setSelected(id)
        videos.forEach((vid, idx) => {
            const ref = videoRefs.current[idx]
            if (ref) {
                if (vid.id === id) {
                    ref.play()
                } else {
                    ref.pause()
                    ref.currentTime = 0
                }
            }
        })
    }

    return (
        <section className="w-full flex flex-col items-center pt-10 pb-5">
            <div className="relative px-5 py-3">
                <img src="/img/formaverde.webp" alt="fondo naranja" className="absolute top-0 left-0 w-full h-full" />
                <h2 className="text-white font-eastman-bold text-2xl min-[400px]:text-3xl text-center z-10 relative text-nowrap">¡ASÍ SE VIVE LA<br /><span className="text-azul">EXPERIENCIA FYR LOIS!</span></h2>
            </div>
            <div className="w-full flex justify-center gap-3 py-10">
                {
                    videos.map((vid, idx) => (
                        <div key={`video${vid.id}`}
                            className={`rounded-md h-[250px] min-[410px]:h-[300px] min-[500px]:h-[400px] md:h-[500px] xl:h-[650px] bg-gray-100 cursor-pointer duration-300 overflow-hidden relative ${vid.id == selected ? widthSel : widthUnsel}`}>

                            <video
                                ref={el => videoRefs.current[idx] = el}
                                src={vid.url}
                                poster={vid.poster}
                                onClick={() => handleSelect(vid.id)}
                                className="h-full w-full object-cover absolute"
                            >
                            </video>
                        </div>
                    ))
                }
            </div>

            <div className="flex justify-center hover:scale-[102%] duration-300">
                <a href="#contacto" className="flex text-naranja text-nowrap text-base min-[3650px]:text-lg min-[400px]:text-xl min-[460px]:text-2xl font-eastman-bold items-center justify-center gap-2 bg-azul py-2 px-2 rounded-md mb-5 w-fit">
                    <span className="text-white text-4xl"><FiArrowRightCircle /></span>
                    <div className="h-8 w-[2px] rounded-md bg-white">{" "}</div>
                    <span className="-mt-1">QUIERO INSCRIBIR A MI HIJO</span>
                </a>
            </div>
        </section>
    )
}