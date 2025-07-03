import MenuIcon from "./MenuIcon";

export default function Navbar() {
    return (
        <nav className="w-full h-[100px] bg-azul text-white flex justify-between items-center px-5 xl:px-20">
            <img src="/img/logo.webp" alt="logo Fyr Lois" className="w-[140px] h-auto" />
            <div>
                <button className="block sm:hidden">
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
    )
}