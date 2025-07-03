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

export default function ReviewsSlider() {
    const rvs = [
        [
            "/img/reviews/Primera para poner.png",
            "/img/reviews/Captura de pantalla 2025-06-24 a la(s) 5.24.33 p.m..png",
            "/img/reviews/Captura de pantalla 2025-06-24 a la(s) 5.19.24 p.m..png",
        ],
        [
            "/img/reviews/Captura de pantalla 2025-06-24 a la(s) 5.19.09 p.m..png",
            "/img/reviews/Captura de pantalla 2025-06-24 a la(s) 5.18.56 p.m..png",
            "/img/reviews/Captura de pantalla 2025-06-24 a la(s) 5.18.24 p.m..png",
        ],
        [
            "/img/reviews/Captura de pantalla 2025-06-24 a la(s) 5.18.02 p.m..png",
            "/img/reviews/Captura de pantalla 2025-06-24 a la(s) 5.17.33 p.m..png",
            "/img/reviews/Captura de pantalla 2025-06-24 a la(s) 5.15.06 p.m..png",
        ],
        [
            "/img/reviews/Captura de pantalla 2025-06-24 a la(s) 5.14.50 p.m..png",
            "/img/reviews/Captura de pantalla 2025-06-24 a la(s) 5.14.12 p.m..png",
            "/img/reviews/Captura de pantalla 2025-06-24 a la(s) 5.18.56 p.m..png",
        ],
    ];
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
        <div className="w-full flex justify-center slider-container my-10">
            <Slider {...settings} className="w-[280px] min-[400px]:w-[340px] min-[450px]:w-[370px] sm:w-[630px] lg:w-[950px] xl:w-[1150px] h-fit">
                {
                    rvs.map(rv => (
                        <div key={rv[0]}>
                            <div className="w-full flex flex-col items-center justify-center gap-2 px-1">
                                {
                                    rv.map(image => (
                                        <div key={image} className="w-full h-[60px] min-[400px]:h-[70px] min-[450px]:h-[80px] sm:h-[135px] lg:h-[200px] xl:h-[250px] rounded-md overflow-hidden relative">
                                            <img
                                                src={image}
                                                alt="imagen de galeria reviews"
                                                className="w-full h-full object-cover object-center absolute inset-0"
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}