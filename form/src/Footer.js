import React, { useEffect } from "react";
import { AppContext } from "./context";
const convertDate = (date) => {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var now = new Date(date);
    return `${now.getDate()}  ${months[now.getMonth()]}  ${now.getFullYear()}`
}

const Footer = () => {
    const { timeAndCost, selectedPeople, selectedTime, selectedDate, selectedGame, activeStep, formValues, dispatch } = React.useContext(AppContext);
    const availableNextStep = selectedGame && selectedDate && selectedTime;
    const handleContinue = () => {
        if (activeStep > 1) {
            return
        }
        dispatch('SET_STEP', (activeStep + 1))
    }
    console.log(formValues);
    useEffect(() => {
        console.log('dsadsa');
    }, [formValues])
    const isValid = () => {
        const {
            email,
            fname,
            lname,
            birthDay,
            birthMonth,
            birthYear,
            phone,
            reservationName,
            agree
        } = formValues

        console.log(formValues);

        return email && fname && lname && birthDay && birthMonth && birthYear && phone && reservationName && agree
    }
    return (
        <div className="footer-container">

            <div className="informations">
                <div className="details">

                    {
                        selectedDate && selectedTime ?
                            <div className="date-time">
                                <h6 className="date">{convertDate(selectedDate)}</h6>
                                <h6 className="time">{new Date(selectedTime).toLocaleTimeString()}</h6>
                            </div>
                            :
                            <div className="data">
                                Please select a date and time.
                            </div>
                    }

                    {selectedPeople &&
                        <div className="people-station">
                            <h6 className="date">{selectedPeople} people</h6>
                            <h6 className="time">{selectedPeople} Stations</h6>
                        </div>
                    }
                    {timeAndCost &&
                        <div className="people-station">
                            <h6 className="date">Total price</h6>
                            <h6 className="time">{timeAndCost.split('-')[1]}</h6>
                        </div>
                    }

                </div>
            </div>
            <div className="action-buttons">
                {activeStep !== 2 ?
                    <button className="footer-btn continue" disabled={!availableNextStep} onClick={handleContinue}>Continue</button>
                    :
                    <button disabled={!isValid()} className="footer-btn payment">Continue to payment</button>}
            </div>

        </div>
    )
}

export default Footer