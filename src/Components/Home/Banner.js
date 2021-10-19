import React from 'react';
import banner1 from './../../images/banner-1.jpg'
import banner2 from './../../images/banner2l.jpg'
import banner3 from './../../images/banner-3.jpg'
const Banner = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide Banner" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner1} class="d-block w-100 " alt="..." />
                        <div class="carousel-caption d-none d-md-block text-primary ">
                            <h2>You Will Get The best Doctors In Every Sector </h2>
                            <p>Health Care is promising you to provide best service for everyone </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={banner2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block text-primary">
                            <h2>We Are Always ready <span className="text-danger">to help You</span></h2>
                            <p>Health Care is promising you to provide best service for everyone </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={banner3} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block text-primary">
                            <h2>We Are Committed to Give You the best Service</h2>
                            <p>Health Care is prommising you to provide best service for everyone </p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;