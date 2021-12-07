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
                <h1 className="text-center text-success fw-bold my-5">
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
                <h1 className="text-center  text-success fw-bold">
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
            <section className='blogSection'>
                <div>
                    <h1 className='my-5 text-center  Blogs'>Blogs</h1>
                    <div class="row row-cols-1 row-cols-md-3 mx-auto g-4 my-5 container">

                        <div class="col text-center ">

                            <div class="card">
                                <img src="https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" class="card-img-top" alt="..." />
                                <div class="text-start px-3 pt-1">
                                    <h5 class="card-title">
                                        Corona Virus Death Update in Bangladesh and New affected...</h5>
                                    <p class="text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam et, veniam sapiente nostrum dignissimos repellendus. Ipsam voluptatum et officiis, sit temporibus odio repellendus voluptatibus ea.
                                        {/*Bangladesh reported 10 fresh fatalities from Co-19 while the caseload jumped by 339.

                                        With the latest dev., the total number of deaths reached 27,778, while the number of total infections rose to 1,565,827 in the country.
                                        another 509 patients recovered from the infectious disease across the country, */}
                                    </p>  <button className="btn btn-outline-success my-1  w-100 text-center px-4">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="https://www.atlanticcouncil.org/wp-content/uploads/2020/03/Russia-internet-corona-large.jpg" class="card-img-top" alt="..." />
                                <div class="text-start px-3 pt-1">
                                    <h5 class="card-title">Russia orders tech platforms to remove coronavirus “fake news”</h5>
                                    <p class=" text-start">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam et, veniam sapiente nostrum dignissimos repellendus. Ipsam voluptatum et officiis, sit temporibus odio repellendus voluptatibus ea.
                                        {/* The Russian government has been actively engaged in spreading disinformation and misinformation around the pandemic.The Kremlin has also been active in ordering internet platforms operating in the country to remove coronavirus “fake news” from their platforms, which follows previous Kremlin efforts to crack down on independent internet sites offering legitimate news. */}
                                    </p>  <button className="btn btn-outline-success my-1  w-100 text-center px-4">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="https://www.aljazeera.com/wp-content/uploads/2021/03/000_94L8CF.jpg?resize=770%2C513" class="card-img-top" alt="..." />
                                <div class="text-start px-3 pt-1 mx-auto">
                                    <h5 class="card-title">Germany, France, Italy and Spain halt use of AstraZeneca vaccine</h5>
                                    <p class="text-start">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam et, veniam sapiente nostrum dignissimos repellendus. Ipsam voluptatum et officiis, sit temporibus odio repellendus voluptatibus ea.{/* Germany, France, Italy and Spain have suspended the use of AstraZeneca’s COVID-19 vaccine after several reports of blood clots in people who received the shot in Europe.

                                        The flurry of suspensions on Monday came after a number of other countries, mostly in Europe, halted their rollouts late last week. */}</p>
                                    <button className="btn btn-outline-success my-1  w-100 text-center px-4">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;