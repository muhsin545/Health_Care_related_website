import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <>

            <div style={{ color: "darkcyan" }} className='text-center  my-5'>
                <h1 className=' mb-3'>Contact With Health Care</h1>
                <div className="row container mx-auto contactUs py-5 my-5 align-items-center bgImg">

                    <div className="col-md-5 text-center mx-auto fw-bolder ">
                        <p className='mt-2 pt-4'>Phone: +9897656 759000</p>
                        <p className='pt-5 mt-5'>Email: healthcare@gmail.com</p>

                        {/* <p>Address : # BrammonGram #ManikGonjBazar #Kanaighat #Sylhet</p> */}
                        <div className=''>
                            <b className='socialMedia'>Facebook</b>
                            <b className='socialMedia'>           </b>
                            <b className='socialMedia'>LinkedIn</b>
                        </div>
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
                            <button style={{ backgroundColor: "darkcyan", color: '#ffffff' }} className='btn fw-bold text-uppercase rounded-pill px-5'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;