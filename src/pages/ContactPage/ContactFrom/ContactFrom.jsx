import React from 'react';

const ContactFrom = () => {
    return (
        <div className="hero">
            <div className="card shadow-2xl bg-[#E8E8E8]  w-full">
                <div className="card-body">
                    <div className='flex gap-3 w-[1200px]'>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Name*</span>
                            </label>
                            <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Email*</span>
                            </label>
                            <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Phone*</span>
                        </label>
                        <input type="text" placeholder="Enter Your Phone Number" className="input input-bordered mr-4" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Message*</span>
                        </label>
                        <textarea className="textarea h-48 mr-4" placeholder="Enter Your Message"></textarea>
                    </div>
                    <div className="form-control mx-auto mt-6">
                        <button className="btn w-full text-white text-xl bg-[#B58130] ">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactFrom;