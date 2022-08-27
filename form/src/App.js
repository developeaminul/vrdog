
import React, { useState } from 'react';

import './App.css';

import { AppContext } from './context';
import Footer from './Footer';
import Header from './Header';
import Pages from './Pages';

function App() {

	const [games, setGames] = useState([]);
	const [selectedGame, setSelectedGame] = useState('');
	const [selectedDate, setSelectedDate] = useState('');
	const [selectedTime, setSelectedTime] = useState('');
	const [selectedPeople, setSelectedPeople] = useState(null);
	const [timeAndCost, setTimeAndCost] = useState('');
	const [activeStep, setActiveStep] = React.useState(0);
	const [formValues, setFormValues] = React.useState({})

	const dispatch = (actionType, value) => {
		switch (actionType) {
			case 'ADD_GAMES':
				setGames(value);
				return;
			case 'SET_STEP':
				setActiveStep(value);
				return;
			case 'SET_GAME':
				setSelectedGame(value);
				return;
			case 'SET_DATE':
				setSelectedDate(value);
				return;
			case 'SET_TIME':
				setSelectedTime(value);
				return;
			case 'SET_PEOPLE':
				setSelectedPeople(value);
				return;
			case 'SET_TIME_COST':
				setTimeAndCost(value);
				return;
			case 'SET_FORM_VALUES':
				setFormValues(value);
				return;
			default:
				return;
		}
	};

	return (
		<div className="form-main">
			<AppContext.Provider value={{ games, selectedGame, selectedDate, selectedTime, selectedPeople, timeAndCost, formValues, dispatch, activeStep }}>
				<Header />
				<Pages />

				<div className="branding">

				</div>
				<Footer />
			</AppContext.Provider>
		</div>
	);
}

export default App;