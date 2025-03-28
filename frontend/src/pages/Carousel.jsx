import React from "react";
import { useNavigate } from "react-router-dom";

function Carousel() {
  const navigate = useNavigate();

  const handleItemClick = (slideNumber) => {
    navigate(`/item/${slideNumber}`);
  };

  return (
    <div className="carousel-container">
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            data-bs-interval="10000"
            onClick={() => handleItemClick(1)}>
            <img
              src="https://codingyaar.com/wp-content/uploads/dark-flowers-1.png"
              className="d-block w-100 carousel-img img-fluid"
              alt="First Slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-light">First slide label</h5>
              <p className="text-light">Click to view more details.</p>
            </div>
          </div>
          <div
            className="carousel-item"
            data-bs-interval="2000"
            onClick={() => handleItemClick(2)}>
            <img
              src="https://codingyaar.com/wp-content/uploads/dark-flowers-2.png"
              className="d-block w-100 carousel-img"
              alt="Second Slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-light">Second slide label</h5>
              <p className="text-light">Click to view more details.</p>
            </div>
          </div>
          <div className="carousel-item" onClick={() => handleItemClick(3)}>
            <img
              src="https://codingyaar.com/wp-content/uploads/dark-flowers-3.png"
              className="d-block w-100 carousel-img"
              alt="Third Slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-light">Third slide label</h5>
              <p className="text-light">Click to view more details.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
