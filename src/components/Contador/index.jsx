import { useEffect, useState } from "react";

export default function Contador() {
    const getTimeLeft = () => {
        const now = new Date();
        const currentYear = now.getFullYear();
        const target = new Date(currentYear, 6, 21, 0, 0, 0); // July is month 6 (0-indexed)
        let diff = target - now;
        if (diff < 0) diff = 0;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num) => num.toString().padStart(2, '0');
    const { days, hours, minutes, seconds } = {
        days: formatNumber(timeLeft.days),
        hours: formatNumber(timeLeft.hours),
        minutes: formatNumber(timeLeft.minutes),
        seconds: formatNumber(timeLeft.seconds),
    };

    return (
        <div className="pb-5 pt-2 flex gap-3 text-3xl xl:text-4xl">
            <div className="bg-white text-azul flex flex-col items-center justify-center  font-lemon-medium w-[65px] aspect-square rounded-lg">
                <p className="">{days}</p>
                <p className="text-xs font-lato-black">Days</p>
            </div>
            <div className="bg-white text-azul flex flex-col items-center justify-center  font-lemon-medium w-[65px] aspect-square rounded-lg">
                <p className="">{hours}</p>
                <p className="text-xs font-lato-black">Hours</p>
            </div>
            <div className="bg-white text-azul flex flex-col items-center justify-center  font-lemon-medium w-[65px] aspect-square rounded-lg">
                <p className="">{minutes}</p>
                <p className="text-xs font-lato-black">Minutes</p>
            </div>
            <div className="bg-white text-azul flex flex-col items-center justify-center  font-lemon-medium w-[65px] aspect-square rounded-lg">
                <p className="">{seconds}</p>
                <p className="text-xs font-lato-black">Seconds</p>
            </div>
        </div>
    )
}