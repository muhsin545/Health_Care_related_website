import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';

const Login = () => {

    const { signInUsingGoogle, handleEmail, handlePassword, isLogin, handleRegistration, toggle, error, handleName } = useAuth();


    const location = useLocation();
    console.log('came', location?.state?.from);


    const history = useHistory();
    const redirect_uri = location?.state?.from || '/'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    };


    return (
        <>

            <form onSubmit={handleRegistration} className='container'>
                <h2 className="my-5 text-center text-primary">Please {!isLogin ? "Register" : "Login"}</h2>
                {
                    !isLogin && <div class="row mb-3 mt-5">
                        <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <input required onBlur={handleName} type="text" class="form-control" id="inputName" placeholder="Name" />
                        </div>
                    </div>
                }
                <div class="row mb-3 mt-5">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input required onBlur={handleEmail} placeholder="Email" type="email" class="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" placeholder="Password" required onBlur={handlePassword} class="form-control" id="inputPassword3" />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-10 offset-sm-2">
                        <div class="form-check">
                            <input onChange={toggle} class="form-check-input" type="checkbox" id="gridCheck1" />
                            <label class="form-check-label" for="gridCheck1" >
                                Already Registered?
                            </label>
                            <h5 class="text-danger my-2">{error}</h5>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">{!isLogin ? "Register" : "Login"}</button>


                <button onClick={handleGoogleLogin} className='btn mx-2 btn-primary my-3'>Google Login</button>

            </form>


        </>

    );
};

export default Login;

