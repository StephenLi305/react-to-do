

import React, {useState} from 'react';
import { start } from 'pretty-error';

// start time,
// hit a button, counts down
// set interval


// 0 .... 20

const App() => {

    const [second, setSecond] = useState(0);
    const [minute, setMintue] = useState(0);
    const [hour, setHour] = useState(0);
    const [started, setStarted] = useState(false);
        
    const startTime = () => {
        if (started) {
            clearInterval();
            setStarted(false);
        } else {
            setStarted(true);
            setInterval(
                setSecond(second + 1)
            , 1000)
        }
    }

    componetDidUpdate( , prevState){
        prevSeconds = prevState.second;
        prevMinute = prevState.minute;
        prevHour = prevState.hour;
        if (prevSeconds > 59){
            setSecond(0);
            setMintue(prevMinute + 1); 
        }
        // prevState = 60 m 60 s
        // state = 1 h 0 min, 0 sec
        if(prevMinute > 59){
            setMintue(0);
            setHour(prevHour + 1);
        }
    }
    
    // compinentDidUpdate 
    // prev props, prev states
    // sec 59 -> 60 - >
    // min 1


    // if tine is greater than 60, time % 60  ex 61 1:01 
    // minute = time/ 60

    const formatHour = 
    // if hour less then 10, 0 + hour, else hour

    return(
        <div>
            <p>Hour:{formatHour}</p>
            <p>Minute:{formatMintue}</p>
            <p>Second:{second}</p>
            <button onClick={startTime}>Start Time</button>
        </div>
    )
}