import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../Hooks/useCart';
import SectionTitle from '../../../components/SectionTilte/SectionTitle';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {

    const [cart, refetch] = useCart();
    const total = parseFloat(cart.reduce((sum, item) => item.price + sum, 0));

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistro-boss-server-ten-inky.vercel.app/carts/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Order has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-full px-10'>
            <SectionTitle heading="wanna add more" subHeading="My Cart"></SectionTitle>
            <Helmet>
                <title>Bistro || My Cart</title>
            </Helmet>
            <div className='uppercase font-semibold flex justify-between items-center h-[70px]'>
                <h3 className='text-3xl'>Total Items : {cart.length}</h3>
                <h2 className='text-3xl'>Total Price:{total}</h2>
                <Link to='/dashboard/payment'>
                    <button className="btn bg-[#D1A054] text-white btn-sm">Pay</button>
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-[#D1A054] text-white'>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th className='text-end '>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td >
                                    ${item.price}
                                </td>
                                <td className='text-end'>
                                    <button onClick={() => handleDelete(item)} className="btn bg-red-700 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;