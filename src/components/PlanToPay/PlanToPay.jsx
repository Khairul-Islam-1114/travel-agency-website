import React from 'react';
import './PlanToPay.css';
import plan from '../../assets/img/planning.png';
import booking from '../../assets/img/booking.png';
import details from '../../assets/img/passport.png';
import payment from '../../assets/img/wallet.png';
import arrow from '../../assets/img/right-chevron.png';





const PlanToPay = () => {
    return (
        <section className='plan-to-pay'>

            <div className="plan">
                <img src={plan} alt="" className='plan-icon' />
                <div>
                    <h3>PLAN YOUR JOURNEY</h3>
                    <p>Contact us today to start planning your next unforgettable journey.</p>
                </div>

            </div>

            {/* <img src={arrow} alt="" className='arrow' /> */}

            <div className="booking">
                <img src={booking} alt="" className='booking-icon' />
                <div>
                    <h3>BOOK YOUR FLIGHT</h3>
                    <p>Contact us 24/7 to book your flight. We are always at your service.</p>
                </div>
            </div>

            {/* <img src={arrow} alt="" className='arrow' /> */}

            <div className="details">
                <img src={details} alt="" className='details-icon' />
                <div>
                    <h3>PROVIDE DETAILS</h3>
                    <p>Secure your reservation by providing accurate details.</p>
                </div>
            </div>

            {/* <img src={arrow} alt="" className='arrow' /> */}

            <div className="pay">
                <img src={payment} alt="" className='pay-icon' />
                <div>
                    <h3>PAY & CONFIRM</h3>
                    <p>Make the payment and your passport to the world.</p>
                </div>
            </div>

        </section>
    )
}

export default PlanToPay;