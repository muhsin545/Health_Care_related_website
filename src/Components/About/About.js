import React from 'react';
import './About.css'
const About = () => {
    return (
        <div>

            <h1 style={{ color: "darkcyan" }} className='fw-bolder my-5 text-center '>About "Health Care Limited" </h1>
            <div className="row container mx-auto">
                <div className="col-md-6">
                    <img className='img-fluid ' src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src="https://media.istockphoto.com/photos/modern-hospital-building-picture-id489041732?b=1&k=20&m=489041732&s=170667a&w=0&h=yMfL6ZpFw9gHTjJ4ZbrZiHQdXIgtilAQ-ll_xkcOHB4=" alt="" />
                </div>
            </div>
            <div className="row container">
                <div className="col-md-5 vision mb-5 ms-auto ">
                    <h1 style={{ color: "darkcyan" }} className='fw-small text-center my-5 '>"Our Vision" </h1>
                    <ul style={{ color: "darkcyan" }}>
                        <li>
                            <b>
                                <b>Vision: </b> Our vision to be the model for community hospitals is supported by four pillars of excellence
                                <li>
                                    <i>To be on a planet devoid of the distressed and the diseased;
                                    </i>
                                </li>
                            </b>
                        </li>
                        <li>
                            <b>
                                <i>To be an institution that rises above pettiness to help humanity;
                                </i>
                            </b>
                        </li>
                        <li>
                            <b>
                                <i>Clinical Quality
                                </i>
                            </b>
                        </li>
                        <li>
                            <b>
                                <i>Service Excellence
                                </i>
                            </b>
                        </li>
                        <li>
                            <b>
                                <i>Facilities and Technology
                                </i>
                            </b>
                        </li>
                        <li>
                            <b>
                                <i>
                                    Financial Viability
                                </i>
                            </b>
                        </li>
                    </ul>

                </div>
                <div className="col-md-5 mx-2  mission  mb-5">
                    <h1 style={{ color: "darkcyan" }} className='fw-small text-center my-5 '>"Our Mission" </h1>
                    <ul style={{ color: "darkcyan" }}>
                        <li >
                            <b>Mission: </b>
                            <b><i>To become the most trusted premier institution serving the sufferings of humanity and people’s welfare oriented activities. where :</i></b>
                        </li>
                        <li><b><i>Patients are treated as family</i></b></li>
                        <li>
                            <b>
                                <i>Members of the community have confidence they will find hope and healing</i>
                            </b>
                        </li>
                        <li>
                            <b>
                                <i>
                                    Physicians experience an efficient and cooperative atmosphere focused on excellence in patient care
                                </i>
                            </b>
                        </li>
                        <li>
                            <b>
                                <i>
                                    Staff who share our values are attracted and retained.


                                </i>
                            </b>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;