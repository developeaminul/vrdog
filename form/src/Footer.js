import React from "react";
import { AppContext } from "./context";
const convertDate = (date) => {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var now = new Date(date);
    return `${now.getDate()}  ${months[now.getMonth()]}  ${now.getFullYear()}`
}

const Footer = () => {
    const { selectedTime, selectedDate,selectedGame, activeStep, dispatch } = React.useContext(AppContext);
    const availableNextStep = selectedGame && selectedDate && selectedTime;
    const handleContinue = () => {
        if (activeStep > 1) {
            return
        }
        dispatch('SET_STEP', (activeStep + 1))
    }
    return (
        <div className="footer-container">

            <div className="informations">
                <div className="details">

                    {
                        selectedDate && selectedTime ?
                            <div className="date-time">
                                <h6 className="date">{convertDate(selectedDate)}</h6>
                                <h6 className="time">{new Date("2022-08-29T20:00:00-04:00").toLocaleTimeString()}</h6>
                            </div>
                            :
                            <div className="data">
                                Please select a date and time.
                            </div>
                    }

                </div>
            </div>
            <div className="action-buttons">
                <button className="footer-btn continue" disabled={!availableNextStep} onClick={handleContinue}>Continue</button>
                <button className="footer-btn cancel">Continue</button>
            </div>

        </div>
    )
}

export default Footer