import React from 'react';

const MenuItem = ({ item }) => {

    const { name, price, recipe, image } = item;

    return (
        <div className='flex  items-center  space-x-4'>
            <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-[100px]' src={image} alt="" />
            <div>
                <h2 className='uppercase'>{name}-----</h2>
                <p className='text-[#737373]'>{recipe}</p>
            </div>
            <p className='text-yellow-600'>${price}</p>
        </div>
    );
};

export default MenuItem;