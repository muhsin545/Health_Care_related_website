import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <>

            <div className='text-center  my-5'>
                <h1 className='text-success mb-3'>Contact With Health Care</h1>
                <div className="row container mx-auto contactUs py-5 my-5">
                    <div className="col-md-5 text-start text-dark fw-bolder">
                        <p>Email: healthcare@gmail.com</p>
                        <p>Phone: +9897656759000</p>
                        <p>Address : # BrammonGram #ManikGonjBazar #Kanaighat #Sylhet</p>
                        <div>
                            <b className='socialMedia'>Facebook</b>
                            <b className='socialMedia'>Twitter</b>
                            <b className='socialMedia'>LinkedIn</b>
                        </div>
                    </div>
                    <div className="col-md-5 ms-auto">
                        <img className='img-fluid' src="https://images.pexels.com/photos/263564/pexels-photo-263564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    </div>
                </div>
                <div className="row container tex-dark mx-auto contactUs p-5">
                    <div className="col-md-6 my-5 ">
                        <h2 className='fw-small'>Write A Message</h2>
                        <p><small>If you got any questions, please do not hesitate to send us a message. We reply within 24 hours!</small></p>
                        We Are In Social Network
                        <div className=' my-3'>
                            <b className='socialMedia'>Facebook</b>
                            <b className='socialMedia'>Twitter</b>
                            <b className='socialMedia'>LinkedIn</b>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div class="">

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label"></label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Your Message" rows="3"></textarea>
                            </div>
                            <button className='btn btn-success rounded-pill px-4'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;