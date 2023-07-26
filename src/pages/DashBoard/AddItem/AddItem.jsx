import React from 'react';
import SectionTitle from '../../../components/SectionTilte/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {

    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data => {
        const fromData = new FormData();
        fromData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgUrl = imgResponse.data.display_url;
                    const { name, price, category, recipe
                    } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgUrl }
                    console.log(newItem)
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Item Added Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    }
    // console.log(errors);
    // console.log(img_hosting_token)

    return (
        <div className='max-w-1200px m-10'>
            <SectionTitle subHeading="What's New" heading="add an item"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-[#F3F3F3] p-8'>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text font-bold">Recipe Name*</span>
                    </label>
                    <input type="text"
                        {...register("name", { required: true, maxLength: 120 })}
                        placeholder="Recipe name" className="input input-bordered w-full " />
                </div>
                <div className='flex gap-3'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Category</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick Item</option>
                            <option>pizza</option>
                            <option>soup</option>
                            <option>salat</option>
                            <option>dessert</option>
                            <option>desi</option>
                            <option>drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-bold">Price*</span>
                        </label>
                        <input type='number' {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Recipe Details*</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-[200px]" placeholder="Your Opinion"></textarea>
                </div>
                <div className="form-control w-full my-4 ">
                    <label className="label">
                        <span className="label-text font-bold">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full h-full  " />
                </div>
                <div className='flex justify-center'>
                    <input className='btn btn-sm  bg-[#B58130]' type="submit" value="Add Item"></input>
                </div>
            </form>
        </div>
    );
};

export default AddItem;