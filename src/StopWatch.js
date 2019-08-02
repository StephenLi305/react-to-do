import React, { useState, useEffect } from 'react';


const StopWatch = () => {
    const [second, setSecond] = useState(0);
    const [minute, setMintue] = useState(0);
    const [hour, setHour] = useState(0);
    const [started, setStarted] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    const startTime = () => {
        if (started) {
            clearInterval(intervalId);
            setStarted(false);
            setIntervalId(null);
        } else {
            setStarted(true);
            setIntervalId(() => setInterval(
                () => setSecond(second => second + 1)
                , 10))
        }
    }

    useEffect(() => {
        // Same as ComponentDid Update
        console.log(second);
        if (second > 59) {
            setSecond(0);
            setMintue(minute + 1);
        }

        if (minute > 59) {
            setMintue(0);
            setHour(hour + 1);
        }
    }, [second, minute, hour])


    const formatedHour = hour < 10 ? "0" + hour : hour
    const formatedMinute = minute < 10 ? "0" + minute : minute
    const formatedSecond = second < 10 ? "0" + second : second

    return (
        <div>
            <p>Hour:{formatedHour}</p>
            <p>Minute:{formatedMinute}</p>
            <p>Second:{formatedSecond}</p>
            <button onClick={startTime}>{started ? "Stop Time" : "Start Time"}</button>
        </div>
    )
}


export default StopWatch;
