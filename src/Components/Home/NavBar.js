import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from './../../images/logo.jpg';
import './Navbar.css'
const NavBar = () => {
    const { users, logOut, error } = useAuth();
    return (
        <>
            <nav class="navbar nav navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <Link class="navbar-brand  fw-bolder text-white" to="/home">
                        <img src={logo} alt="" width="60" height="auto" class="d-inline-block rounded-circle border border-3 align-text-center mx-2" />
                        Health Care
                    </Link>

                    <div className='ms-auto'>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <NavLink className='navbarLink' to="/ourTeam">Our Team</NavLink>
                                <NavLink className='navbarLink' to="/blogs">Blogs</NavLink>
                                <NavLink className='navbarLink' to="/departments">Departments</NavLink>
                                <NavLink className='navbarLink' to="/about">About</NavLink>
                                <NavLink className='navbarLink' to="/contact">Contact</NavLink>



                                {
                                    !users.email ? <NavLink className='navbarLink' to="/login">
                                        <button className='px-3  btn btn-outline-light'>Login</button>
                                    </NavLink>
                                        :
                                        <>
                                            <NavLink className='navbarLink' to="">
                                                <button onClick={logOut} className='px-3  btn btn-outline-light'>LogOut</button>
                                            </NavLink>
                                            <p className='pt-3 mt-1 mx-1 text-white '> {users?.displayName}</p>
                                            <img src={users?.photoURL} width='60' height="auto" className=" rounded-circle" alt="" />
                                        </>
                                }


                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;



