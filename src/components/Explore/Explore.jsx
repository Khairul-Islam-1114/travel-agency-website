import React, { useRef, useState } from 'react';
import './Explore.css';
import { place_list } from './ExploreAssets';

import slide_previous from '../../assets/img/slider-previous.svg';
import slide_next from '../../assets/img/slider-next.svg';


const Explore = () => {
    const placeWrapperRef = useRef(null);
    const [showPrevious, setShowPrevious] = useState(false);
    const [showNext, setShowNext] = useState(true);
    const placeCardWidth = 27;

    const handleScroll = () => {
        const placeWrapper = placeWrapperRef.current;
        const isAtLeftEdge = placeWrapper.scrollLeft === 0;
        const isAtRightEdge = placeWrapper.scrollLeft + placeWrapper.clientWidth === placeWrapper.scrollWidth;

        setShowPrevious(!isAtLeftEdge);
        setShowNext(!isAtRightEdge);
    }





    const handlePreviousClick = () => {
        const placeWrapper = placeWrapperRef.current;
        const viewportWidth = window.innerWidth; // Get the width of the viewport
        const scrollAmount = placeCardWidth * (viewportWidth / 100); // Calculate scroll amount based on 25vw
        placeWrapper.scrollTo({
            left: placeWrapper.scrollLeft - scrollAmount, // Scroll one place card to the left
            behavior: 'smooth', // Smooth scrolling
        });
    };

    const handleNextClick = () => {
        const placeWrapper = placeWrapperRef.current;
        const viewportWidth = window.innerWidth;
        const scrollAmount = placeCardWidth * (viewportWidth / 100);
        const maxScrollLeft = placeWrapper.scrollWidth - placeWrapper.clientWidth;

        // Calculate the new scroll position after scrolling one card to the right
        const newScrollLeft = Math.min(placeWrapper.scrollLeft + scrollAmount, maxScrollLeft);

        // Scroll to the new position
        placeWrapper.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth',
        });

        // Disable the next slide icon if the new scroll position is at the maximum
        setShowNext(newScrollLeft < maxScrollLeft);
    };


    return (
        <section className='explore-place'>
            <h2>explore some trending destinations</h2>
            <div className="place-wrapper" ref={placeWrapperRef} onScroll={handleScroll}>
                {place_list.map((place, index) => {
                    return (
                        <div className="place" key={index}>
                            <img src={place.image} alt="" className='place-image' />
                            <p>{place.name}</p>
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

export default Explore;