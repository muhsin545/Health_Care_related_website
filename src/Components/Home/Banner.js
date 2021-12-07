import React from 'react';
import doctor from '../../images/optical-doctor-store-removebg-preview.png'


const Banner = () => {
    return (
        <div>
            <div className="row banner container-fluid pt-5 mx-auto align-items-center">
                <div className="col-md-6 p-5 g-5">
                    <h1>You can't always be there.
                        But we can.</h1>
                    <p>We offer a person-centred approach to keep seniors safe
                        and sound at home, instead of anywhere else.</p>
                    <button className='btn btn-outline mt-2'>Request An Appoinment</button>
                </div>
                <div className='col-md-6'>
                    <img src={doctor} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;