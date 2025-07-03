import { GoDotFill } from "react-icons/go";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { TiLocationOutline } from "react-icons/ti";
export default function Footer() {
    const liStyle = "flex gap-1 items-center text-azul text-xs sm:text-sm md:text-base xl:text-lg "
    return (
        <footer className="w-full bg-verde py-10 xl:py-15 relative px-5 flex flex-wrap min-[385px]:flex-nowrap gap-5 justify-between min-[385px]:justify-center z-20">
            <img src="/img/llineasblancas.webp" alt="" className="absolute top-3 w-full" />
            <img src="/img/logo.webp" alt="logo Fyr Lois Footer" className="w-[80px] sm:w-[110px] md:w-[140px] xl:w-[160px] h-fit order-1 min-[385px]:order-0 lg:mr-20" />
            <ul className="order-0 lg:w-[260px] xl:w-[320px] lg:flex flex-wrap">
                <li className="font-eastman-bold text-azul text-sm sm:text-base md:text-sm lg:text-base xl:text-lg lg:w-full">Navegación</li>
                <li className={liStyle + " lg:w-[130px] xl:w-[160px]"}><GoDotFill className="text-white" /> <a href="#inicio">Inicio</a></li>
                <li className={liStyle + " lg:w-[130px] xl:w-[160px]"}><GoDotFill className="text-white" /> <a href="#conocenos">Conócenos</a></li>
                <li className={liStyle + " lg:w-[130px] xl:w-[160px]"}><GoDotFill className="text-white" /> <a href="#tematicas">Temáticas</a></li>
                {/* <li className={liStyle + " lg:w-[130px] xl:w-[160px]"}><GoDotFill className="text-white" /> <a href="#testimonios">Testimonios</a></li> */}
                <li className={liStyle + " lg:w-[130px] xl:w-[160px]"}><GoDotFill className="text-white" /> <a href="#edades">Edades</a></li>
                <li className={liStyle + " lg:w-[130px] xl:w-[160px]"}><GoDotFill className="text-white" /> <a href="#preventa">Preventa</a></li>
                <li className={liStyle + " lg:w-[130px] xl:w-[160px]"}><GoDotFill className="text-white" /> <a href="#faq">FAQ</a></li>
                <li className={liStyle + " lg:w-[130px] xl:w-[160px]"}><GoDotFill className="text-white" /> <a href="#contacto">Contacto</a></li>
            </ul>
            <ul className="order-2 min-[385px]:order-0 ">
                <li className="font-eastman-bold text-azul text-sm sm:text-base md:text-sm lg:text-base xl:text-lg">Contáctanos</li>
                <li className={liStyle}><span className="w-[20px]"><HiOutlineDevicePhoneMobile className="text-white text-lg" /></span> 0212 959 3681 CCCT</li>
                <li className={liStyle + " flex items-start"}><span className="w-[20px]"><TiLocationOutline className="text-white text-xl" /></span> (CCCT), nivel C2, Sector Yarey, local PB 005.
                </li>
            </ul>
            <p className="absolute text-xs text-azul bottom-1 right-1">© 2025 Fyr lois. All Right Reserved.</p>
        </footer>
    )
}