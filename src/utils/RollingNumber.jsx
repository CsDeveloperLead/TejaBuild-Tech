import { useEffect, useState } from "react";


export const RollingNumber = ({ targetNumber, duration, stepTime }) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
        const totalSteps = duration / stepTime;
        const stepValue = targetNumber / totalSteps;

        const interval = setInterval(() => {
            setCurrentNumber(prevNumber => {
                if (prevNumber >= targetNumber) {
                    clearInterval(interval);
                    return targetNumber;
                }
                return Math.min(prevNumber + stepValue, targetNumber);
            });
        }, stepTime);

        return () => clearInterval(interval);
    }, [targetNumber, duration, stepTime]);

    return <h1 className="text-5xl font-bold font-montserrat">{Math.floor(currentNumber)} +</h1>
}