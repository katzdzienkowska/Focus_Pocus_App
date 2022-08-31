import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import bell from '../assets/bell.mp3';
import '../index.css';

const PomodoroTimer = () => {

    const { theme } = useContext(ThemeContext);

    const [sessionTime, setSessionTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);
    const [play, setPlay] = useState(false);
    const [timeType, setTimeType] = useState('work');
    const [displayTime, setDisplayTime] = useState(25 * 60);


    const incrementSessionTime = () => {
        if (sessionTime < 60) {
            setSessionTime(sessionTime + 1);
            setDisplayTime(displayTime + 60);
        };
    };

    const decrementSessionTime = () => {
        if (sessionTime > 1) {
            setSessionTime(sessionTime - 1);
            setDisplayTime(displayTime - 60);
        };
    };

    const incrementBreakTime = () => {
        if (breakTime < 60) {
            setBreakTime(breakTime + 1);
        };
    };

    const decrementBreakTime = () => {
        if (breakTime > 1) {
            setBreakTime(breakTime - 1);
        };
    };

    const timeout = setTimeout(() => {
        if (displayTime && play) {
            setDisplayTime(displayTime - 1)
        }
    }, 1000);

    const clock = (timeout) => {
        if (play) {
            resetTimer();
        } else {
            clearTimeout(timeout);
        };
    };

    const handlePlay = () => {
        clearTimeout(timeout);
        setPlay(!play);
    };

    const handleReset = () => {
        clearTimeout(timeout);
        setBreakTime(5);
        setSessionTime(25);
        setDisplayTime(25 * 60);
        setTimeType('work');
    };

    const resetTimer = () => {
        const audio = document.getElementById('bell');
        if (!displayTime && timeType === 'work') {
            setDisplayTime(breakTime * 60);
            setTimeType('break');
            audio.play();
        };
        if (!displayTime && timeType === 'break') {
            setDisplayTime(sessionTime * 60);
            setTimeType('work');
            audio.play();
        };
    };

    useEffect(() => {
        clock()
        // eslint-disable-next-line
    }, [play, displayTime, timeout])


    const formatTime = (time) => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        return (
            (minutes < 10 ? '0' + minutes : minutes) + ":" +
            (seconds < 10 ? '0' + seconds : seconds)
        )
    };

    return (
        <section>

            <h1 className={theme ? 'module-header-dark' : 'module-header-light'}>Pomodoro Timer</h1>

            <div className='pomodoro-timer'>
                <div>
                    <div className='timer'>
                        {formatTime(displayTime)}
                    </div>

                    <div className='timer-message'>
                        {timeType === 'work' ? `It's time to work! 🔥` : `Break time ☕️`}
                    </div>

                </div>

                <div className='timer-buttons'>
                    <button onClick={handlePlay}>{play ? 'Pause' : 'Start'}</button>
                    <button onClick={handleReset}>Reset</button>
                </div>

                <div className='timer-set'>
                    <div className='timer-section'>
                        <p>Session Length</p>
                        <div className='set-buttons'>
                            <button disabled={play} onClick={() => decrementSessionTime()}>-</button>
                            <div>
                                {sessionTime}
                            </div>
                            <button disabled={play} onClick={() => incrementSessionTime()}>+</button>
                        </div>
                    </div>

                    <div className='timer-section'>
                        <p>Break Length</p>
                        <div className='set-buttons'>
                            <button disabled={play} onClick={() => decrementBreakTime()}>-</button>
                            <div>
                                {breakTime}
                            </div>
                            <button disabled={play} onClick={() => incrementBreakTime()}>+</button>
                        </div>
                    </div>
                </div>

            </div>

            <audio
                id='bell'
                preload='auto'
                src={bell}
            />

        </section>
    );
};

export default PomodoroTimer;