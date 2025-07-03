export default function VideoSec() {
    return (
        <div className="w-full flex justify-center">

            <div className="relative py-4 sm:py-6 px-6 w-11/12 sm:w-[640px] lg:w-[850px]">
                <img src="/img/formaVideo.webp" alt="fondo video" className="absolute top-0 left-0 w-full h-full" />
                <div className="bg-gray-400 w-full aspect-video relative"></div>
            </div>
        </div>
    )
}