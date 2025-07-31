import { useState } from "react";
import MenuIcon from "./MenuIcon";
import { checkoutHandler } from "../../utils/checkoutHandler";
import { IoCartOutline } from "react-icons/io5";

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <nav className="w-full h-[100px] 3xl:h-[120px] bg-[#001A70] text-white flex justify-between items-center px-5 xl:px-20 relative">
                <img src="/img/logo.webp" alt="logo Fyr Lois" className="w-[140px] 3xl:w-[170px] h-auto" />
                <div className="flex gap-10 items-center ">
                    <button onClick={() => setOpen(!open)} className="block sm:hidden cursor-pointer">
                        <MenuIcon />
                    </button>

                    <ul className="hidden md:flex gap-5 text-xl items-center text-white">
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#conocenos">Conócenos</a></li>
                        <li><a href="#preventa">Preventa</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>

                    <button onClick={() => checkoutHandler()}><IoCartOutline className="text-white text-3xl cursor-pointer" /></button>
                </div>
            </nav>
            <div className={`${!open ? "h-0" : "h-[40px]"} flex md:hidden items-center bg-[#001A70] justify-between text-white text-xs eastman-bold w-full px-5 duration-300`}>
                <a href="#inicio">Inicio</a>
                <a href="#conocenos">Conócenos</a>
                <a href="#preventa">Preventa</a>
                <a href="#contacto">Contacto</a>

            </div>

        </>
    )
}