import { useEffect, useState } from "react";

export function UpwardsCarousel({ items }) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length)
        }, 2000);

        return () => clearInterval(interval);

    }, [items.length])

    return (
        <div className="relative w-full h-12 sm:h-16 overflow-hidden xl:h-20">
            <div className="flex flex-col transition-transform duration-500 scroll-smooth" style={{ transform: `translateY(-${index * 25}%)` }}>
                {
                    items.map((item, i) => (
                        <div key={i} className="flex w-full justify-center text-4xl sm:h-16 md:justify-start md:items-start xl:h-20 md:text-4xl text-orange-500 items-center h-12 sm:text-5xl xl:text-6xl lg:text-5xl font-bold">
                            {item}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}