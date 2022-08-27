import * as React from 'react';

import { AppContext } from '../context';
import ReactLoading from 'react-loading';
import Loading from '../Loading';
import { Button, Container } from '@mui/material';
const Page2 = () => {

    const [loading, setLoading] = React.useState(false)
    const { selectedPeople, timeAndCost, dispatch } = React.useContext(AppContext);

    const fetchTimeAndCost = () => {
        setLoading(true)
        fetch(`https://api.springboardvr.com/v1/public/widget/f8f42930-5d9c-11ec-aa4a-3db00c01fc40/experience/5a5fd090-1bda-11ec-96a8-87e60a6763b4/available/2022-08-29T18:45:00-04:00?stations=${selectedPeople}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                const item = data[0]
                const value = `${item.length} Min - $${item.price / 100}`
                dispatch('SET_TIME_COST', value);
            })
            .catch(e => setLoading(false))
    }

    const handleSelectPeople = (e) => {
        dispatch('SET_PEOPLE', e.target.value);
        fetchTimeAndCost()
    }
    const handleTimeAndCost = () => {
        fetchTimeAndCost()
    }
    return (
        <div className="step2-details">
            <div>
                <h6 className='select-people-label'>Select the number of people</h6>
                <select className="select-people-select" onChange={handleSelectPeople}>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                </select>
            </div>

            <div>
                <h6 className='select-station-label'>Select the number of people</h6>
                <button onClick={handleTimeAndCost} className='select-station-btn'>{selectedPeople || 1} Stations</button>
            </div>
            <div>
                <h6 className='select-station-label'>Length of time (Price Per Station)</h6>
                {
                    loading ?
                        <Loading />
                        :
                        timeAndCost &&
                        <button className='select-station-btn'>{timeAndCost}</button>
                }

            </div>


        </div>
    )
}

export default Page2