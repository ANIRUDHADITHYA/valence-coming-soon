import logo from "./../Assets/logo.png";
import { useState, useRef, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";


const Home = () => {
    const [timerDays, setTimerDays] = useState("0");
    const [timerHours, setTimerHours] = useState("0");
    const [timerMinutes, setTimerMinutes] = useState("0");
    const [timerSeconds, setTimerSeconds] = useState("0");

    let interval = useRef();

    const startTimer = () => {

        const countdownDate = new Date('October 1, 2022 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = countdownDate - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24))
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((difference % (1000 * 60)) / 1000)

            if (difference < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds)
            }
        }, 1000);
    };

    useEffect(() => {
        
        startTimer();
        /*return () => {
            clearInterval(interval.current)
        }*/
    })
    return (
        <div>
            <div className="homeContainer">
                <div className="introContainer">
                    <div>
                        <img src={logo} alt="logo"></img>
                    </div>
                    <div className="homeTextArea">
                        <h1>Coming Soon</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br></br>
                            sed do eiusmod tempor incididunt</p>
                    </div>
                    <div className="homeTimer">
                        <div className="days">
                            <h1>{timerDays < 10 ? "0" + timerDays : timerDays}</h1>
                            <p>DAYS</p>
                        </div>
                        <div className="hours">
                            <h1>{timerHours < 10 ? "0" + timerHours : timerHours}</h1>
                            <p>Hours</p>
                        </div>
                        <div className="minutes">
                            <h1>{timerMinutes < 10 ? "0" + timerMinutes : timerMinutes}</h1>
                            <p>Minutes</p>
                        </div>
                        <div className="seconds">
                            <h1>{timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}</h1>
                            <p>Seconds</p>
                        </div>
                    </div>
                    <div className="downloads">
                        <input placeholder="Your email address"></input>
                        <div className="inputButtonSpace">{""}</div>
                        <button>Download Brochure</button>
                    </div>
                    <div className="socialAccounts">
                        stay tuned, follow us on <Link to="#"><i class="fa-brands fa-linkedin"></i></Link> 
                    </div>
                </div>
                <div className="backgroundImage"></div>
            </div>
        </div>
    )
}





export default Home;