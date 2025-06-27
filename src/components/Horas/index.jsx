export default function Horas() {
    return (
        <div className="w-full flex justify-center py-7">
            <div className="flex flex-col gap-7 w-[300px] min-[375px]:w-[350px] font-lato-black">
                <div className="flex flex-col text-center rounded-lg overflow-hidden">
                    <p className="text-white bg-rosa text-7xl py-4">60</p>
                    <p className="text-azul bg-white text-4xl py-1">Horas</p>
                </div>
                <div className="flex flex-col text-center rounded-lg overflow-hidden">
                    <p className="text-white bg-azul text-7xl py-4">3 - 16</p>
                    <p className="text-azul bg-white text-4xl py-1">Años</p>
                </div>
            </div>
        </div>
    )
}