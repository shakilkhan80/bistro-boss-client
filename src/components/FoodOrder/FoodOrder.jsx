import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';

const FoodOrder = ({ item }) => {

    const { name, price, recipe, image, _id } = item;

    const { user } = useContext(AuthContext)
    const [, refetch] = useCart();
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = item => {
        console.log(item)
        if (user && user.email) {

            const cartItem = { menuItemId: _id, name, image, price, email: user.email }

            fetch('https://bistro-boss-server-ten-inky.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)

            }, [])
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            icon: 'success',
                            title: 'Your Food is added to the Cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })

        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-slate-900 w-20 text-white absolute right-0 mt-4 mx-4 text-2xl'>${price}</p>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn  btn-outline border-orange-400 bg-slate-300 border-0 border-b-4 ">Add TO Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodOrder;