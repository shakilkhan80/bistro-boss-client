import React from 'react';
import img from '../../assets/home/chef-service.jpg'

const BistroTitle = () => {
    return (
        <div className=' relative mb-4'>
            <img className='' src={img} alt="" />
            <div className='bg-white absolute w-3/4 p-16 right-40 top-20'>
                <h3 className='text-4xl text-center text-[#151515] mb-2'>Bistro Boss</h3>
                <p className='text-[#151515] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default BistroTitle;