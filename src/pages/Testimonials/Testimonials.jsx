import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTilte/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaComments } from 'react-icons/fa';


const Testimonials = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className='my-20'>
            <SectionTitle heading="TESTIMONIALS" subHeading="What Our Clients Say"></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='flex flex-col items-center space-y-3  mx-24 my-16'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaComments className='text-5xl' />
                            <p>{review.details}</p>
                            <h2 className="text-3xl text-orange-400">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>

    );
};

export default Testimonials;