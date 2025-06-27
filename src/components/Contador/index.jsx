export default function Contador() {
    return (
        <div className="pb-5 pt-2 flex gap-3">
            <div className="bg-white text-azul flex flex-col items-center justify-center  font-lemon-medium w-[65px] aspect-square rounded-lg">
                <p className="text-3xl">25</p>
                <p className="text-xs font-lato-black">Days</p>
            </div>
            <div className="bg-white text-azul flex flex-col items-center justify-center  font-lemon-medium w-[65px] aspect-square rounded-lg">
                <p className="text-3xl">06</p>
                <p className="text-xs font-lato-black">Hours</p>
            </div>
            <div className="bg-white text-azul flex flex-col items-center justify-center  font-lemon-medium w-[65px] aspect-square rounded-lg">
                <p className="text-3xl">10</p>
                <p className="text-xs font-lato-black">Minutes</p>
            </div>
            <div className="bg-white text-azul flex flex-col items-center justify-center  font-lemon-medium w-[65px] aspect-square rounded-lg">
                <p className="text-3xl">09</p>
                <p className="text-xs font-lato-black">Seconds</p>
            </div>
        </div>
    )
}