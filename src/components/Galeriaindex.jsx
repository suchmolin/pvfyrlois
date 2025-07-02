import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
        cssEase: "linear"
    };
    return (
        <section className="w-full bg-[url('/img/rayasgrisesfondo.webp')] bg-center bg-contain py-10 overflow-hidden">
            <div className="w-full px-5 py-5 flex flex-col items-center bg-gray-100  pb-10">
                <h2 className="text-azul font-eastman-bold text-2xl">Un <span className="text-naranja italic">Summer</span> para disfrutar</h2>
                <div className=" w-full flex justify-center slider-container">
                    <Slider {...settings} className="w-[370px] h-fit">
                        {
                            galeria.map(gal => (
                                <div key={gal[0]}>
                                    <div className="w-full flex justify-center gap-4">
                                        <div className="w-5/12 rounded-md overflow-hidden  bg-gray-200">
                                            <img src={gal[0]} alt="iamgen de galeria" />
                                        </div>
                                        <div className="w-7/12 flex flex-col gap-4">

                                            <div className="h-[140px] rounded-md overflow-hidden bg-gray-200">
                                                <img src={gal[1]} alt="imagen de galeria" />
                                            </div>
                                            <div className="h-[140px] rounded-md overflow-hidden  bg-gray-200">
                                                <img src={gal[2]} alt="imagen de galeria" />
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