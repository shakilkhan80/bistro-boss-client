import React, { useContext } from 'react';
import img from "../../assets/others/authentication1.png"
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const SignUp = () => {


    const { register, handleSubmit, watch, reset, formState: { errors }, } = useForm()

    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user updated success')
                        reset()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
    }

    console.log(watch("example"))


    return (
        <>
            <Helmet>
                <title>Bistro || Sign UP</title>
            </Helmet>
            <div className=" login-item  gap-10 hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center w-1/3">
                        <h1 className="text-5xl font-bold mb-5">Sign Up Now!</h1>
                        <img src={img} alt="" />
                    </div>
                    <div className="card  w-1/2 max-w-sm shadow-2xl ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Enter Your Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-600'>Photo url is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="Enter Your Email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z >>!#$%&? "<<])/
                                })} name='password' placeholder="Enter Your Password" className="input input-bordered" />
                                {errors.password?.type === "required" && <p className='text-red-600'>Password is required</p>}
                                {errors.password?.type === "minLength" && <p className='text-red-600'>Password Must be 6 Character</p>}
                                {errors.password?.type === "maxLength" && <p className='text-red-600'>Password has to be 20 Character</p>}
                                {errors.password?.type === "pattern" && <p className='text-red-600'>Password must be 1 uppercase 1 lowercase 1 special character</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-white bg-[#D1A054]" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-[#D1A054] ml-5 mb-5 text-center'><small>Already registered? Go to: <Link className='text-green-600' to="/login">Log In</Link><br /> or Sign Up With</small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;