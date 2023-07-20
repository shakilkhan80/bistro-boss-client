import React from 'react';
import Cover from '../Shared/Cover/Cover';
import img from '../../assets/contact/banner.jpg'
import SectionTitle from '../../components/SectionTilte/SectionTitle';
import { FaPhoneAlt, FaLocationArrow, FaClock } from 'react-icons/fa';
import ContactFrom from './ContactFrom/ContactFrom';

const ContactPage = () => {
    return (
        <div>
            <Cover img={img} title="CONTACT US" para="Help Us to Improve Our Dish!!!"></Cover>
            <SectionTitle heading="OUR LOCATION" subHeading="Visit Us"></SectionTitle>
            <div className='grid md:grid-cols-3 gap-4 my-10'>
                <div>
                    <div className='bg-[#D1A054] text-white text-2xl flex justify-center p-4'>
                        <FaPhoneAlt></FaPhoneAlt>
                    </div>
                    <div className='bg-[#F3F3F3] py-10'>
                        <h2 className='text-[#151515] text-center uppercase font-bold'>Phone</h2>
                        <p className='text-[#444444] text-center'>+8801690-143060</p>
                    </div>
                </div>
                <div>
                    <div className='bg-[#D1A054]  text-white text-2xl flex justify-center p-4'>
                        <FaLocationArrow></FaLocationArrow>
                    </div>
                    <div className='bg-[#F3F3F3] py-10'>
                        <h2 className='text-[#151515] uppercase text-center font-bold'>Address</h2>
                        <p className='text-[#444444] text-center'>Contonment,Cumilla</p>
                    </div>
                </div>
                <div>
                    <div className='bg-[#D1A054]  text-white text-2xl flex justify-center p-4'>
                        <FaClock></FaClock>
                    </div>
                    <div className='bg-[#F3F3F3] py-7'>
                        <h2 className='text-[#151515] uppercase text-center font-bold'>working hours</h2>
                        <p className='text-[#444444] text-center'>Mon - Fri: 08:00 - 22:00</p>
                        <p className='text-[#444444] text-center'>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>
            <SectionTitle heading="CONTACT FORM" subHeading="Send Us a Message"></SectionTitle>
            <ContactFrom></ContactFrom>
        </div>
    );
};

export default ContactPage;