import { useState, useRef, useEffect } from "react";
import "./Home.css";
import useForm from "../Hooks/useForms";
import Validate from "./../Utils/Validate";


const Home = () => {


    const { values, errors, handleChange, handleSubmit } = useForm(Validate)



    const [timerDays, setTimerDays] = useState("0");
    const [timerHours, setTimerHours] = useState("0");
    const [timerMinutes, setTimerMinutes] = useState("0");
    const [timerSeconds, setTimerSeconds] = useState("0");

    let interval = useRef();

    const startTimer = () => {

        const countdownDate = new Date('October 16, 2022 00:00:00').getTime();

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
    })
    return (
        <div id="container">
            <div className="homeContainer">
                <div className="introContainer">
                    <div>
                        <img src={process.env.PUBLIC_URL + "/asserts/logo.png"} alt="logo"></img>
                    </div>
                    <div className="homeTextArea">
                        <h1>T-Minus…</h1>
                        <span><p>Why didn’t the sun go to college?<br></br>
                            Because it already had a million degrees!</p></span>
                        <p>Now that you have smiled, do you want to know how to make a lighter, stronger & aesthetically beautiful composite part?</p>
                        <div><p>Drop in your email address and check out all our composite consumables!</p></div>
                        
                    </div>                    

                    <div className="downloads">
                        <input placeholder="Your email address" name="email" value={values.email} onChange={handleChange}></input>
                        <div className="inputButtonSpace">{""}</div>
                        <a onClick={handleSubmit} href={!errors.email && process.env.PUBLIC_URL + "/asserts/VAM_Brochure.pdf"} target="_blank" rel="noreferrer">Download Brochure</a>
                    </div>

                    <div className="errorDivision">{errors.email ? <p>*{errors.email}</p> : <p></p>}</div>
                    <span><h1>Launching In !</h1></span>



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
                    <div className="socialAccounts">
                        <a href="https://www.linkedin.com/in/valenceadvancedmaterials" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="backgroundImage"></div>
            </div>
        </div>
    )
}





export default Home;