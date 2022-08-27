import * as React from 'react';

import { AppContext } from '../context';

import { Grid } from '@mui/material';
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Page3 = () => {

    const [loading, setLoading] = React.useState(false)
    const [hasCoupon, setHasCoupon] = React.useState(false)
    const { formValues, timeAndCost, dispatch } = React.useContext(AppContext);

    const handleCoupon = () => {
        setHasCoupon(old => !old)
    }
    const handleChange = e => {
        const { value, name } = e.target;
        const newData = formValues;
        newData[name] = value;

        dispatch('SET_FORM_VALUES', newData)
        console.log('set', formValues);
    }
   
    return (
        <div className="step3-details">

            <h6 className='page-title'>Your Information</h6>

            <form action="" className='information-form'>
                <Grid container rowSpacing={1} columnSpacing={3}>
                    <Grid item xs={12} sm={6}>
                        <label htmlFor="email">Email<span className='required'>*</span></label>
                        <input required onChange={handleChange} name='email' type="email" id='email' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <label htmlFor="firsName">First Name<span className='required'>*</span></label>
                        <input required onChange={handleChange} name='fname' type="text" id='firsName' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <label htmlFor="lastName">Last Name<span className='required'>*</span></label>
                        <input required onChange={handleChange} name='lname' type="text" id='lastName' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <label htmlFor="birthday">Birthday<span className='required'>* </span>
                            <a href="https://springboardvr.com/why-birthday/" target="_blank">Why do we need this?</a>
                        </label>
                        <Grid container justifyContent="space-between">
                            <Grid item xs={3}>
                                <input required onChange={handleChange} type="text" name='birthDay' placeholder='Day' />
                            </Grid>
                            <Grid item xs={4}>
                                <select className="birth-month-select" name='birthMonth' required onChange={handleChange}>
                                    {
                                        months.map((month, index) => <option key={index} value={month}>{month}</option>)
                                    }
                                </select>
                            </Grid>
                            <Grid item xs={4}>
                                <input required onChange={handleChange} type="text" name='birthYear' placeholder='Year' />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <label htmlFor="phone">Phone<span className='required'>*</span></label>
                        <input required onChange={handleChange} name='phone' type="text" id='phone' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <label htmlFor="reservation">Reservation Name<span className='required'>*</span></label>
                        <input required onChange={handleChange} name='reservationName' type="text" id='reservation' />
                    </Grid>
                </Grid>
                <span className='required-field-label'>* Required Fields</span>


                <input required onChange={handleChange} type="checkbox" name="agree" />
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
                        <div class="value">{timeAndCost.split('-')[1]}</div>
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
                <div class="coupon-container">
                    <button onClick={handleCoupon} className="coupon-trigger-btn" type="button">Have a Coupon Code?</button>

                    {hasCoupon &&
                        <div className='information-form coupon'>
                            <div className='coupon-input'>
                                <label htmlFor="coupon">Coupon Code</label>
                                <input required onChange={handleChange} type="text" id='coupon' />
                            </div>
                            <button className="submit-btn" type="button">Submit</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Page3