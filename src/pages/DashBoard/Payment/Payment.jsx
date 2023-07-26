import React from 'react';
import SectionTitle from '../../../components/SectionTilte/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOut from './CheckOut';
import useCart from '../../../Hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2));
    return (
        <div className='w-full px-10'>
            <SectionTitle subHeading='Please Process' heading="payment"></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOut cart={cart} price={price}></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;