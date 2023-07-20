import React from 'react';
import img1 from '../../assets/menu/salad-bg.jpg'
import img2 from '../../assets/menu/soup-bg.jpg'
import img3 from '../../assets/menu/dessert-bg.jpeg'
import SectionTitle from '../../components/SectionTilte/SectionTitle';

const Recommendes = () => {
    return (
        <section>
            <SectionTitle
                heading="CHEF RECOMMENDS"
                subHeading="Should TRy"
            >
            </SectionTitle>
            <div className='grid grid-cols-3 gap-3 my-10'>
                <div className="card w-96 shadow-xl  bg-[#F3F3F3]">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Ceaser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn bg-slate-300 border-orange-400  btn-outline border-0 border-b-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-[#F3F3F3] shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Spicy Soup</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn bg-slate-300 border-orange-400  btn-outline border-0 border-b-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-[#F3F3F3] shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Dessert Special</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn bg-slate-300 border-orange-400 btn-outline border-0 border-b-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommendes;