import React from 'react';
import SectionTitle from '../../components/SectionTilte/SectionTitle';
import img1 from '../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed p-20 pt-8 my-20 text-white'>
            <SectionTitle heading='FROM OUR MENU' subHeading='Check it out'>
            </SectionTitle>
            <div className='md:flex justify-center bg-slate-700 bg-opacity-40 items-center pb-20 pt-8 px-30 '>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>March 20,2023</p>
                    <p className='uppercase'>where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quia voluptate iusto minus. Non atque incidunt rem impedit cumque quas ea eum quod culpa iste esse aut, odio vero quibusdam aspernatur corporis. Magni, nihil repudiandae officiis adipisci blanditiis harum distinctio illum dicta error libero omnis, voluptatibus in exercitationem architecto esse?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-3">Default</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;