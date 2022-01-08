import React, { useState } from 'react';
import { useEffect } from 'react';
import Service from './Service';
import './Services.css'
const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./Data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <>
            <div className="container px-5 ">
                <h1 style={{ color: 'darkcyan' }} className=' fw-normal mt-5'>--Our Services-- </h1>
                <div className="card-group">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Services;