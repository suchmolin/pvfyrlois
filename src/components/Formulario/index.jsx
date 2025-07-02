export default function Formulario() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form action="#" onSubmit={(e) => handleSubmit(e)}
            className="w-[250px] min-[430px]:w-[300px] sm:w-[360px] rounded-2xl bg-[url('/img/fondoformulario.webp')] bg-center bg-cover py-7 px-3 min-[430px]:px-5 relative z-10 text-xs min-[430px]:text-sm sm:text-base"
        >
            <div className="w-full mb-4">
                <input type="text" name="name" placeholder="Nombre y Apellido"
                    className="w-full rounded-lg px-4 py-2 bg-white  focus:outline-0"
                />
            </div>
            <div className="w-full flex gap-1 min-[430px]:gap-2 mb-4">
                <input type="text" name="city" placeholder="Ciudad"
                    className="w-full rounded-lg px-4 py-2 bg-white  focus:outline-0"
                />
                <input type="number" name="cellphone" placeholder="Teléfono"
                    className="w-full rounded-lg px-4 py-2 bg-white  focus:outline-0"
                />
            </div>
            <div className="w-full mb-4">
                <input type="email" name="email" placeholder="Correo electrónico"
                    className="w-full rounded-lg px-4 py-2 bg-white  focus:outline-0"
                />
            </div>
            <div className="w-full mb-4">
                <textarea name="message" placeholder="Mensaje" rows={4}
                    className="w-full rounded-lg px-4 py-2 bg-white  focus:outline-0"
                />
            </div>
            <div className="w-full flex justify-center">
                <input type="submit" className="rounded-lg bg-azul text-white text-center px-20 py-2 cursor-pointer" value="Enviar" />
            </div>
            <img src="/img/rosa.webp" alt="personaje rosado" className="w-[150px] sm:w-[200px] absolute -bottom-20 sm:-bottom-30 -left-25 sm:-left-32" />
            <img src="/img/naranja.webp" alt="personaje naranja" className="w-[150px] sm:w-[200px] absolute -bottom-20 sm:-bottom-25 -right-25 sm:-right-32" />
        </form>
    )
}