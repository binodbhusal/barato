/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import './MainCarousel.scss';

const MainCarousel = ({ children: slides, autoSlides = false, autoSlidesInterval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((prevCurrent) => (prevCurrent === 0
    ? slides.length - 1 : prevCurrent - 1));
  const next = () => setCurrent((prevCurrent) => (prevCurrent === slides.length - 1
    ? 0 : prevCurrent + 1));

  useEffect(() => {
    if (autoSlides) {
      const slideInterval = setInterval(() => next(), autoSlidesInterval);
      return () => clearInterval(slideInterval);
    }
    return () => {};
  }, [autoSlides, autoSlidesInterval, next]);

  return (
    <div
      className="carousel-container"

    >
      <div
        className="carousel-content"
        style={{ transform: `translateX(-${current * 100}%) `, objectFit: 'cover', width: '100%' }}

      >
        {slides}
      </div>
      <div className="btn-container">
        <button type="button" aria-label="btn" onClick={prev}>
          <MdOutlineNavigateBefore style={{ fontSize: '40px' }} />
        </button>
        <button type="button" aria-label="btn" onClick={next}>
          <MdOutlineNavigateNext style={{ fontSize: '40px' }} />
        </button>
      </div>
      <div className="indicator-container">
        <div className="indicator-content">
          {slides.map((_, i) => (
            <div
              key={i}
              className="indicator"
              style={{
                transition: 'all',
                width: '10px',
                height: '10px',
                padding: current === i ? '8px' : '0',
                backgroundColor: current === i ? '#fff' : 'rgba(255, 255, 255, 0.5)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MainCarousel;

MainCarousel.propTypes = {
  autoSlides: PropTypes.bool,
  autoSlidesInterval: PropTypes.number,
  children: PropTypes.node.isRequired,
};
MainCarousel.defaultProps = {
  autoSlides: false,
  autoSlidesInterval: 3000,
};
