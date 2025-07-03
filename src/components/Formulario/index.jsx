import { useState } from "react"
import SendedMsg from "../SendedMsg"

export default function Formulario() {
    const [sended, setSended] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)


        document.getElementById("BtnEnviar").disabled = true

        await fetch("https://fyr-lois-2024.odoo.com/landing/integrationcrm", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            mode: "no-cors",
            cache: "no-cache",
        })

        setTimeout(() => {
            setSended(false)

        }, 5000)
        document.getElementById("BtnEnviar").disabled = false
        document.getElementById("myForm").reset()
        setSended(true)

    }
    return (
        <>
            <form id="myForm" onSubmit={(e) => handleSubmit(e)}
                className="w-[250px] min-[430px]:w-[300px] sm:w-[360px] lg:w-[450px] rounded-2xl bg-[url('/img/fondoformulario.webp')] bg-center bg-cover py-7 px-3 min-[430px]:px-5 relative z-20 text-xs"
            >
                <div className="w-full mb-4 lg:mb-6">
                    <input type="text" name="name" placeholder="Nombre y Apellido"
                        className="w-full rounded-lg px-2 py-2 bg-white  focus:outline-0 lg:h-12"
                    />
                </div>
                <div className="w-full flex gap-1 min-[430px]:gap-2 mb-4 lg:mb-6">
                    <input type="text" name="city" placeholder="Ciudad"
                        className="w-full rounded-lg px-2 py-2 bg-white  focus:outline-0 lg:h-12"
                    />
                    <input type="number" name="phone" placeholder="Teléfono"
                        className="w-full rounded-lg px-2 py-2 bg-white  focus:outline-0 lg:h-12"
                    />
                </div>
                <div className="w-full mb-4 lg:mb-6">
                    <input type="email" name="email" placeholder="Correo electrónico"
                        className="w-full rounded-lg px-2 py-2 bg-white  focus:outline-0 lg:h-12"
                    />
                </div>
                <div className="w-full mb-4 lg:mb-6">
                    <textarea name="description" placeholder="Mensaje" rows={4}
                        className="w-full rounded-lg px-2 py-2 bg-white  focus:outline-0"
                    />
                </div>
                <div className="w-full flex justify-center">
                    <input id="BtnEnviar" type="submit" className="rounded-lg bg-azul text-white text-center px-20 py-2 cursor-pointer disabled:bg-[#243468] disabled:cursor-wait" value="Enviar" />
                </div>
                <input type="hidden" name="sede" value="FYR LOIS CCCT" />
                <input type="hidden" name="modality" value="presencial" />
                <input
                    type="hidden"
                    value="Landing Summer 2025 Fyr Lois"
                    name="social_media"
                />
                <input type="hidden" value="Fyr Lois English Institute" name="from" />
                <img src="/img/rosa.webp" alt="personaje rosado" className="w-[150px] sm:w-[200px] lg:w-[300px] absolute -bottom-20 sm:-bottom-30 lg:-bottom-55 -left-25 sm:-left-32 lg:-left-50" />
                <img src="/img/naranja.webp" alt="personaje naranja" className="w-[150px] sm:w-[200px] lg:w-[300px] absolute -bottom-20 sm:-bottom-25  lg:-bottom-55 -right-25 sm:-right-32  lg:-right-50" />
                {sended && <SendedMsg />}
            </form>
        </>
    )
}