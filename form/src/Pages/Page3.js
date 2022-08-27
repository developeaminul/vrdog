import * as React from 'react';

import { AppContext } from '../context';

import { Grid } from '@mui/material';
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const Page3 = () => {

    const [loading, setLoading] = React.useState(false)
    const { selectedPeople, timeAndCost, dispatch } = React.useContext(AppContext);

    const fetchTimeAndCost = () => {
        setLoading(true)
        fetch('https://api.springboardvr.com/v1/public/widget/f8f42930-5d9c-11ec-aa4a-3db00c01fc40/experience/5a5fd090-1bda-11ec-96a8-87e60a6763b4/available/2022-08-29T18:45:00-04:00?stations=1')
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
        <div className="step3-details">

            <h6 className='page-title'>Your Information</h6>

            <form action="" className='information-form'>
                <Grid container rowSpacing={1} columnSpacing={3}>
                    <Grid item xs={12} sm={6}>
                        <label htmlFor="email">Email<span className='required'>*</span></label>
                        <input type="email" id='email' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <label htmlFor="firsName">First Name<span className='required'>*</span></label>
                        <input type="text" id='firsName' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <label htmlFor="lastName">Last Name<span className='required'>*</span></label>
                        <input type="text" id='lastName' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <label htmlFor="birthday">Birthday<span className='required'>* </span>
                        <a href="https://springboardvr.com/why-birthday/" target="_blank">Why do we need this?</a>
                        </label>
                        <Grid container justifyContent="space-between">
                            <Grid item xs={3}>
                                <input type="text" placeholder='Day' />
                            </Grid>
                            <Grid item xs={4}>
                                <select className="birth-month-select">
                                    {
                                        months.map((month,index) => <option key={index} value={month}>{month}</option>)
                                    }
                                </select>
                            </Grid>
                            <Grid item xs={4}>
                                <input type="text" placeholder='Year' />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <label htmlFor="phone">Phone<span className='required'>*</span></label>
                        <input type="text" id='phone' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <label htmlFor="reservation">Reservation Name<span className='required'>*</span></label>
                        <input type="text" id='reservation' />
                    </Grid>
                </Grid>
                <span className='required-field-label'>* Required Fields</span>


                <input type="checkbox" name="agree" />
                <span>I have read and agree to the
                    <a style={{ marginLeft: '2px' }} href="https://springboardvr.com/scheduler-terms/" target="_blank">
                        terms of service
                    </a> and <a href="https://springboardvr.com/scheduler-privacy/" target="_blank">
                        privacy policy
                    </a>
                </span>

            </form>
            <div class="price-container">
                <h2 class="summary-title">Price Summary</h2>
                <div class="pricesummary">
                    <div class="subtotal">
                        <div class="label">Subtotal</div>
                        <div class="value">$29.95</div>
                    </div>
                    <div class="tax">
                        <div class="label">
                            Tax&nbsp;
                        </div>
                        <div class="value">$2.89</div>
                    </div>
                    <div class="total">
                        <div class="label">Total</div>
                        <div class="value">$32.84</div>
                    </div>
                </div>
                <div class="coupon">
                    <button data-v-727f6dd1="" type="button" class="ui-button openbutton dib -tiny">Have a Coupon Code?</button>
                </div>
            </div>
        </div>
    )
}

export default Page3