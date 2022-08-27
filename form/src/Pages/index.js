import React from "react";
import { AppContext } from "../context";
import {Container } from '@mui/material';
import Components from '../Components'
const Pages = () => {
    const { activeStep } = React.useContext(AppContext);
    const CurrentPage = Components[activeStep]
    return (

        <div className="pages-container">
            <div>
                <h1 className="heading">Make Reservation</h1>
                <h1 className="reservation-steps">Step {activeStep+1} of 3</h1>
                <div className="page">
                    <CurrentPage />
                </div>

            </div>
        </div>


    )
}

export default Pages