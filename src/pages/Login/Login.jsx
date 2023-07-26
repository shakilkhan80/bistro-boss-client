import React, { useContext, useEffect, useState } from 'react';
import img from '../../assets/others/authentication1.png'
import './Login.css'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../SignUp/SocialLogin';

const Login = () => {

    const [disabled, setDisabled] = useState(true)
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [error, setError] = useState()

    const from = location.state?.from?.pathname || "/"

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: 'User Login  Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true })

            })
            .catch(error => {
                setError('Your Password Is Wrong', error)
            })
    }
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro || Login</title>
            </Helmet>
            <div className=" login-item  hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-2/3 mr-5">
                        <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                        <img src={img} alt="" />
                    </div>
                    <div className="card  w-1/2 max-w-xl shadow-2xl ">
                        <form onSubmit={handleLogin} className="card-body sm:w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" />
                                <p className='text-red-400'>{error}</p>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="Type the text above" className="input input-bordered" />
                            </div>
                            {/* make button disable for captcha */}
                            <div className="form-control mt-6">
                                <input disabled={false} className="btn text-white bg-[#D1A054]" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='mb-5 ml-5 text-[#D1A054] text-center'><small>New Here? Create a New Account: <Link className='text-green-600' to="/signup">Sign Up</Link><br />or Sign In With</small> </p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;