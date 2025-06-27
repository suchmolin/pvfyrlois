import MenuIcon from "./MenuIcon";

export default function Navbar() {
    return (
        <nav className="w-full h-[100px] bg-azul text-white flex justify-between items-center px-5">
            <img src="/img/logo.webp" alt="logo Fyr Lois" className="w-[140px] h-auto" />
            <div>
                <button>
                    <MenuIcon />
                </button>
            </div>
        </nav>
    )
}