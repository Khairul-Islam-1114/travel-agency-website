import React, { useRef, useState } from 'react';
import './Destination.css';
import { popular_destination } from './Destination';
import slide_previous from '../../assets/img/slider-previous.svg';
import slide_next from '../../assets/img/slider-next.svg';

const Destination = () => {

    const destinationWrapperRef = useRef(null);
    const [showPrevious, setShowPrevious] = useState(false);
    const [showNext, setShowNext] = useState(true);
    const placeCardWidth = 27;

    const handleScroll = () => {
        const destinationWrapper = destinationWrapperRef.current;
        const isAtLeftEdge = destinationWrapper.scrollLeft === 0;
        const isAtRightEdge = destinationWrapper.scrollLeft + destinationWrapper.clientWidth === destinationWrapper.scrollWidth;

        setShowPrevious(!isAtLeftEdge);
        setShowNext(!isAtRightEdge);
    }





    const handlePreviousClick = () => {
        const destinationWrapper = destinationWrapperRef.current;
        const viewportWidth = window.innerWidth; // Get the width of the viewport
        const scrollAmount = placeCardWidth * (viewportWidth / 100); // Calculate scroll amount based on 25vw
        destinationWrapper.scrollTo({
            left: destinationWrapper.scrollLeft - scrollAmount, // Scroll one place card to the left
            behavior: 'smooth', // Smooth scrolling
        });
    };

    const handleNextClick = () => {
        const destinationWrapper = destinationWrapperRef.current;
        const viewportWidth = window.innerWidth;
        const scrollAmount = placeCardWidth * (viewportWidth / 100);
        const maxScrollLeft = destinationWrapper.scrollWidth - destinationWrapper.clientWidth;

        // Calculate the new scroll position after scrolling one card to the right
        const newScrollLeft = Math.min(destinationWrapper.scrollLeft + scrollAmount, maxScrollLeft);

        // Scroll to the new position
        destinationWrapper.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth',
        });

        // Disable the next slide icon if the new scroll position is at the maximum
        setShowNext(newScrollLeft < maxScrollLeft);
    };

    return (
        <section className='destination'>
            <h2>Popular Round Trip Destination</h2>
            <div className="destination-wrapper" ref={destinationWrapperRef} onScroll={handleScroll}>
                {popular_destination.map((trip, index) => {
                    return (
                        <div className="destination-card" key={index}>

                            <div className="first-container">

                                <div className="destination-logo">
                                    <img src={trip.trip_from} alt="" className='trip-from' />
                                    <img src={trip.trip_to} alt="" className='trip-to' />
                                    <img src={trip.trip_from} alt="" className='trip-from' />
                                </div>

                                <div className="destination-place">
                                    <p>{trip.from}</p>
                                    <p>{trip.to}</p>
                                    <p>{trip.from}</p>
                                </div>
                            </div>
                            <hr className='divider' />
                            <div className="trip-price">
                                <p>Starting Fare</p>
                                <p>{trip.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Conditionally render slide_previous and slide_next icons */}
            <div className="slide-icons">
                {showPrevious && <img src={slide_previous} alt='Previous' className='slide-icon' onClick={handlePreviousClick} />}
                <img
                    src={slide_next}
                    alt='Next'
                    className={`slide-icon ${!showNext ? 'disabled' : ''}`}
                    onClick={showNext ? handleNextClick : null}
                />
            </div>
        </section>
    )
}

export default Destination;