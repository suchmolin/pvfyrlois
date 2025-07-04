import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src="/img/flechasdobles.webp"
            alt="Siguiente"
            className={`${className} hover:scale-[115%] duration-300 aspect-square`}
            style={{
                ...style,
                display: "block",
                zIndex: 2,
                transform: "rotate(0deg)",
                cursor: "pointer"
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src="/img/flechasdobles.webp"
            alt="Anterior"
            className={`${className} hover:scale-[115%] duration-300 aspect-square`}
            style={{
                ...style,
                display: "block",
                zIndex: 2,
                transform: "rotate(180deg)",
                cursor: "pointer"
            }}
            onClick={onClick}
        />
    );
}

export default function Galeria() {
    const galeria = [
        [
            "/img/galeria/1.JPG",
            "/img/galeria/2.JPG",
            "/img/galeria/3.jpg",
        ],
        [
            "/img/galeria/4.JPG",
            "/img/galeria/5.JPG",
            "/img/galeria/6.JPG",
        ],
        [
            "/img/galeria/7.JPG",
            "/img/galeria/8.JPG",
            "/img/galeria/9.JPG",
        ],
        [
            "/img/galeria/10.jpg",
            "/img/galeria/11.jpg",
            "/img/galeria/12.JPG",
        ],
        [
            "/img/galeria/13.JPG",
            "/img/galeria/14.JPG",
            "/img/galeria/15.jpg",
        ],
        [
            "/img/galeria/16.jpg",
            "/img/galeria/17.jpg",
            "/img/galeria/18.JPG",
        ],
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <section className="w-full bg-[url('/img/rayasgrisesfondo.webp')] bg-center bg-contain py-10 overflow-hidden">
            <div className="w-full px-5 py-5 flex flex-col items-center bg-gray-100  pb-10">
                <h2 className="text-azul font-eastman-bold text-2xl lg:text-3xl xl:text-4xl  mb-5">Un <span className="text-naranja italic">Summer</span> para disfrutar</h2>
                <div className=" w-full flex justify-center slider-container">
                    <Slider {...settings} className="w-[370px] sm:w-[630px] lg:w-[950px] xl:w-[1150px] h-fit">
                        {
                            galeria.map(gal => (
                                <div key={gal[0]}>
                                    <div className="w-full flex justify-center gap-2">
                                        <div className="w-6/12 rounded-md overflow-hidden  bg-gray-200 relative">
                                            <img src={gal[0]} alt="iamgen de galeria" className="h-full" />
                                        </div>
                                        <div className="w-6/12 flex flex-col gap-4">

                                            <div className="h-1/2 rounded-md overflow-hidden bg-gray-200">
                                                <img src={gal[1]} alt="imagen de galeria" className="h-full" />
                                            </div>
                                            <div className="h-1/2 rounded-md overflow-hidden  bg-gray-200">
                                                <img src={gal[2]} alt="imagen de galeria" className="h-full" />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}