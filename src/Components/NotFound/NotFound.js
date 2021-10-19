import React from 'react';
import './NotFound.css'
import notFoundImg from './../../images/404.png'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <>
            <div className='text-center my-5'>
                <h2>404: Page Not Found</h2>
                <img src={notFoundImg} className='img-fluid border' alt="" /><br />
                <Link to='/home'>
                    <button className="btn btn-outline-danger mt-3">Go Home</button>
                </Link>
            </div>

        </>
    );
};

export default NotFound;