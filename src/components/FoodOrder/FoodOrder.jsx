import React from 'react';

const FoodOrder = ({ item }) => {

    const { name, price, recipe, image } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-slate-900 w-20 text-white absolute right-0 mt-4 mx-4 text-2xl'>${price}</p>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn  btn-outline border-orange-400 bg-slate-300 border-0 border-b-4 ">Add TO Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodOrder;