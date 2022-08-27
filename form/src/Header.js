import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { AppContext } from './context';

const steps = ['Step 1', 'Step 2', 'Step 3'];

export default function Header() {
    const { selectedGame, selectedDate, selectedTime,activeStep, dispatch } = React.useContext(AppContext);

    const [completed, setCompleted] = React.useState({});

    const availableNextStep = selectedGame && selectedDate && selectedTime;
    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;

        dispatch('SET_STEP', newActiveStep);
    };

    const handleBack = () => {

        dispatch('SET_STEP', activeStep - 1);
    };

    const handleStep = (step) => () => {
        if(!availableNextStep){
            return
        }
        dispatch('SET_STEP', step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        dispatch('SET_STEP', 0);
        setCompleted({});
    };

    return (
        <Box sx={{ width: '50%' }} className="header-navigation">
            <Stepper nonLinear activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={handleStep(index)} className='step-button' disableTouchRipple={!availableNextStep}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
