import React from 'react';
import logo from './../../images/logo.jpg'
const Footer = () => {
    return (
        <div class="footer mx-auto row text-white container-fluid">

            <div className="row container">


                <div className='ms-auto col-md-4'>
                    <div className=' d-flex align-items-center '>
                        <img src={logo} width="100" className='rounded-circle mx-2  my-5' height="auto" alt="" />
                        <h3>Health Care</h3>
                    </div>
                    <small>
                        To serve the humanity as a whole with this noble vision the Health Care Trust
                        started its journey in June 2010. The trust has agreed upon to provide health care service to the
                        people of Bangladesh with affordable cost.
                    </small>
                </div>
                <div className="mx-auto my-5  col-md-4">
                    <h4>Contact With Us</h4>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Leave Your Comments</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <input type="submit" class="btn btn-outline-light" value="Submit" />
                </div>
                <div className="mx-auto my-5  col-md-4">
                    <h4>Download Our Apps</h4>
                </div>

            </div>
        </div >
    );

};

export default Footer;