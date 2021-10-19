import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const ServiceDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/Data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <>
            <h1 className='text-center my-5 fw-normal text-success'>Service Details</h1>
            <div className="row text-center p-5 container">
                <div className="col-md-6">
                    <img src={data[id]?.img} className='img-fluid' alt="" />
                </div>
                <div className="col-md-6 mx-auto text-start mt-5">
                    <h3><b>Name</b> : {data[id]?.name}</h3>
                    <h5><b>Ratings</b> : {data[id]?.Ratings}</h5>
                    <p><b>Description </b>: {data[id]?.desc}</p>
                </div>

            </div>
        </>
    );
};

export default ServiceDetail;