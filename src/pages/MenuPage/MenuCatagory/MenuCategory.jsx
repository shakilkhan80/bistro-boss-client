import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, coverImg, para }) => {
    return (
        <div className='pt-8'>
            {title && <Cover
                img={coverImg}
                title={title}
                para={para}
            ></Cover>}
            <div className='grid md:grid-cols-2 gap-10 mt-10 mt-16'>
                {
                    items.map(item =>
                        <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                }
            </div>
            <div className='text-center mt-5'>
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline  border-0 border-b-4 mt-3">ORDER NOW</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;