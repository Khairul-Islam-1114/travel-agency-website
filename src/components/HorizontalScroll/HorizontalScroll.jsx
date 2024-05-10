import React, { useEffect, useState } from 'react';
import './HorizontalScroll.css';

const HorizontalScroll = ({children}) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const [contentWidth, setContentWidth] = useState(0);
  
    useEffect(() => {
      // Calculate container and content width
      const container = document.querySelector('.scrolling-container');
      const content = document.querySelector('.scrolling-content');
      setContainerWidth(container.offsetWidth);
      setContentWidth(content.offsetWidth);
  
      // Start scrolling
      const interval = setInterval(() => {
        setScrollPosition(prevPosition => {
          // Reset scroll position when it reaches the end
          if (prevPosition <= -contentWidth + containerWidth) {
            return 0;
          }
          // Scroll by 1 pixel to the left
          return prevPosition - 1;
        });
      }, 15);
  
      // Cleanup function to clear interval on component unmount
      return () => clearInterval(interval);
    }, [contentWidth, containerWidth]);

    return (
        <div className='scrolling-container'>
            <div className="scrolling-content" style={{ transform: `translateX(${scrollPosition}px)` }}>
                {children}
            </div>
        </div>
    )
}

export default HorizontalScroll;