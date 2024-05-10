import React, { useEffect, useState } from 'react';
import './Carousel.css';
import slide_previous from '../../assets/img/slider-previous.svg';
import slide_next from '../../assets/img/slider-next.svg';

const Carousel = ({items}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previousSlide = () => {
        const newIndex = (currentIndex - 1 + items.length) % items.length;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % items.length;
        setCurrentIndex(newIndex);
    }

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            nextSlide();
        },5000);

        return () => clearInterval(intervalID);
    },[currentIndex])

    return (
        <section className='carousel'>
            <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {items.map((item, index) => {
                    return (
                        <div className="carousel-item" key={index}>
                            <img src={item.image} alt={item.alt} />
                        </div>
                    )
                })}
            </div>
            <button className="carousel-control prev" onClick={previousSlide}><img src={slide_previous} alt="" /></button>
            <button className="carousel-control next" onClick={nextSlide}><img src={slide_next} alt="" /></button>
        </section>
    )
}

export default Carousel;