import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, desc, } = service
    return (
        <>

            <div className='col-md-4 my-3 g-1 p-2'>
                <div class="card">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{desc.slice(0, 70)}</p>
                        <p class="card-text">
                            <Link to={`/service/${id}`}>
                                <button className='btn btn-success'>Details</button>
                            </Link >
                        </p >
                    </div >
                </div >
            </div >




        </>
    );
};

export default Service;