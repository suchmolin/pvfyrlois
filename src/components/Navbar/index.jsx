import { useState } from "react";
import MenuIcon from "./MenuIcon";

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <nav className="w-full h-[100px] bg-azul text-white flex justify-between items-center px-5 xl:px-20 relative">
                <img src="/img/logo.webp" alt="logo Fyr Lois" className="w-[140px] h-auto" />
                <div>
                    <button onClick={() => setOpen(!open)} className="block sm:hidden cursor-pointer">
                        <MenuIcon />
                    </button>
                    <ul className="hidden sm:flex gap-5 text-xl items-center text-white">
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#conocenos">Conócenos</a></li>
                        <li><a href="#preventa">Preventa</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>
            </nav>
            <div className={`${!open ? "h-0" : "h-[40px]"} flex sm:hidden items-center bg-azul justify-between text-white text-xs font-eastman-bold w-full px-5 duration-300`}>
                <a href="#inicio">Inicio</a>
                <a href="#conocenos">Conócenos</a>
                <a href="#preventa">Preventa</a>
                <a href="#contacto">Contacto</a>

            </div>

        </>
    )
}