import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner';
import logo1 from './../../images/AMBULANCE.jpg'
import logo2 from './../../images/hospital-icon-1.png'
import logo3 from './../../images/doctors.png'
import logo4 from './../../images/Clock24.7.png'
import './Home.css'


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <div className="row container  mx-auto my-5 text-center g-3">
                <h1 className="text-center text-primary fw-light my-3">
                    Why Would You Choose Us!!
                </h1>
                <div className="col-md-3 mx-auto">
                    <img src={logo4} alt="" />
                    <h3>24 Hours Services</h3>
                </div>
                <div className="col-md-3 mx-auto">
                    <img src={logo2} alt="" />
                    <h3>Emergency Service</h3>
                </div>
                <div className="col-md-3 mx-auto">
                    <img src={logo3} alt="" />
                    <h3>Specialized Doctors</h3>
                </div>
                <div className="col-md-3 mx-auto">
                    <img src={logo1} className="img-fluid w-50" alt="" />
                    <h3>Ambulance Service</h3>
                </div>
            </div>
            <Services></Services>
            <div className="container my-5">
                <h1 className="text-center  text-primary fw-bold">
                    Gallery</h1>
                <div className="row pe-0 ps-0">
                    <div className="col-md-4 pe-0 ps-0 gallery">
                        <img className='img-fluid' src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRvY3RvcnN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" />
                    </div>
                    <div className="col-md-4 pe-0 ps-0 gallery">
                        <img className='img-fluid' src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGRvY3RvcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                    </div>
                    <div className="col-md-4 pe-0 ps-0 gallery">
                        <img className='img-fluid' src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGRvY3RvcnN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" />
                    </div>

                    <div className="col-md-4 pe-0 ps-0 gallery">
                        <img className='img-fluid' src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGRvY3RvcnN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" />
                    </div>
                    <div className="col-md-4 pe-0 ps-0 gallery">
                        <img className='img-fluid' src="https://images.unsplash.com/photo-1580281780460-82d277b0e3f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGRvY3RvcnN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" />
                    </div>
                    <div className="col-md-4 pe-0 ps-0 gallery">
                        <img className='img-fluid' src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGRvY3RvcnN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;