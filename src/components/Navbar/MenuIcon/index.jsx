export default function MenuIcon() {
    const square = "w-[18px] aspect-square border-4 border-white rounded-md"
    return (
        <div className="grid grid-cols-2 gap-1">
            <div className={square}></div>
            <div className={square}></div>
            <div className={square}></div>
            <div className={square}></div>
        </div>
    )
}