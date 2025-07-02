import { GoDotFill } from "react-icons/go";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { TiLocationOutline } from "react-icons/ti";
export default function Footer() {
    const liStyle = "flex gap-1 items-center text-azul text-xs"
    return (
        <footer className="w-full bg-verde py-10 relative px-5 flex flex-wrap min-[385px]:flex-nowrap gap-5 justify-between min-[385px]:justify-center z-10">
            <img src="/img/llineasblancas.webp" alt="" className="absolute top-3 w-full" />
            <img src="/img/logo.webp" alt="logo Fyr Lois Footer" className="w-[80px] h-fit order-1 min-[385px]:order-0" />
            <ul className="order-0">
                <li className="font-eastman-bold text-azul text-sm">Navegación</li>
                <li className={liStyle}><GoDotFill className="text-white" /> <a href="#inicio">Inicio</a></li>
                <li className={liStyle}><GoDotFill className="text-white" /> <a href="#conocenos">Conócenos</a></li>
                <li className={liStyle}><GoDotFill className="text-white" /> <a href="#tematicas">Temáticas</a></li>
                <li className={liStyle}><GoDotFill className="text-white" /> <a href="#testimonios">Testimonios</a></li>
                <li className={liStyle}><GoDotFill className="text-white" /> <a href="#edades">Edades</a></li>
                <li className={liStyle}><GoDotFill className="text-white" /> <a href="#preventa">Preventa</a></li>
                <li className={liStyle}><GoDotFill className="text-white" /> <a href="#faq">FAQ</a></li>
                <li className={liStyle}><GoDotFill className="text-white" /> <a href="#contacto">Contacto</a></li>
            </ul>
            <ul className="order-2 min-[385px]:order-0">
                <li className="font-eastman-bold text-azul text-sm">Contáctanos</li>
                <li className={liStyle}><span className="w-[20px]"><HiOutlineDevicePhoneMobile className="text-white text-lg" /></span> 0212 959 3681 CCCT</li>
                <li className={liStyle + " flex items-start"}><span className="w-[20px]"><TiLocationOutline className="text-white text-xl" /></span> (CCCT), nivel C2, Sector Yarey, local PB 005.
                </li>
            </ul>
            <p className="absolute text-xs text-azul bottom-1 right-1">© 2025 Fyr lois. All Right Reserved.</p>
        </footer>
    )
}