export default function Galeria() {
    return (
        <section className="w-full bg-[url('/img/rayasgrisesfondo.webp')] bg-center bg-contain py-10 overflow-hidden">
            <div className="w-full px-5 py-5 flex flex-col items-center bg-gray-100">
                <h2 className="text-azul font-eastman-bold text-2xl">Un <span className="text-naranja italic">Summer</span> para disfrutar</h2>
                <div className="w-full flex justify-center gap-4">
                    <div className="w-5/12 rounded-md overflow-hidden  bg-gray-200">
                        <img src="/img/galeria1.png" alt="iamgen de galeria" />
                    </div>
                    <div className="w-7/12 flex flex-col gap-4">

                        <div className="h-[140px] rounded-md overflow-hidden bg-gray-200">
                            <img src="/img/galeria1.png" alt="imagen de galeria" />
                        </div>
                        <div className="h-[140px] rounded-md overflow-hidden  bg-gray-200">
                            <img src="/img/galeria1.png" alt="imagen de galeria" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}