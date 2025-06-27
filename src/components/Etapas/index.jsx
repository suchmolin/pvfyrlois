export default function Etapas() {
    return (
        <div className="w-full flex justify-center py-7">
            <div className="flex flex-col w-[300px] min-[375px]:w-[350px] font-lato-black text-center">
                <div className="w-full flex gap-1 items-center justify-center mb-2 font-eastman-bold">
                    <div className="w-[18px] h-[18px] square bg-naranja rounded-full mt-2"></div>
                    <p className="text-azul text-3xl">1era temporada</p>
                </div>
                <div className="text-white flex gap-2 justify-center bg-naranja text-[80px] leading-18 py-7 rounded-lg mb-5">
                    <div>
                        <p>21</p>
                        <p className="text-4xl">Jul</p>
                    </div>
                    -
                    <div>
                        <p>15</p>
                        <p className="text-4xl">Ago</p>
                    </div>

                </div>
                <div className="w-full flex gap-1 items-center justify-center mb-2 font-eastman-bold">
                    <div className="w-[18px] h-[18px] square bg-rosa rounded-full mt-2"></div>
                    <p className="text-azul text-3xl">2era temporada</p>
                </div>
                <div className="text-white flex gap-2 justify-center bg-rosa text-[80px] leading-18 py-7 rounded-lg">
                    <div>
                        <p>18</p>
                        <p className="text-4xl">Ago</p>
                    </div>
                    -
                    <div>
                        <p>12</p>
                        <p className="text-4xl">Sep</p>
                    </div>

                </div>

            </div>
        </div>
    )
}