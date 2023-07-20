import React from 'react';
import { Parallax } from 'react-parallax';


const Cover = ({ img, title, para }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[700px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content uppercase` text-center text-white ">
                    <div className="max-w-md">
                        <h1 className="mb-5 uppercase text-6xl font-bold">{title}</h1>
                        <p className="mb-5">
                            {para}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;