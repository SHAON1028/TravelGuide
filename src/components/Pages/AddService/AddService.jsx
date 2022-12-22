import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')
    const handleAdd = event => {

        event.preventDefault();

        const form = event.target;
        const title = form.title.value
        const img = form.img.value
        const price = form.price.value
        const about = form.about.value
        const cat = form.cat.value


        const service = {
            title,
            img,
            price,
            about,
            cat

        }
        console.log(service)
        fetch('https://service-update.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`

            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service added')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }
    return (
        <div className='text-center m-10'>
            <h2 className='text-3xl mb-2'>Add a New Service</h2>
            <form onSubmit={handleAdd}>
                <input name='title' type="text" placeholder="Add Title" className="input input-bordered input-info w-full max-w-xs" /><br />
                <input name='img' type="text" placeholder="Add Image" className="input input-bordered input-info w-full max-w-xs" /><br />
                <input name='price' type="number" placeholder="Add Price" className="input input-bordered input-info w-full max-w-xs" /><br />
                <input name='cat' type="text" placeholder="Place Name" className="input input-bordered input-info w-full max-w-xs" /><br />
                <textarea name='about' className="textarea textarea-info" placeholder="Add Description"></textarea><br />
                <div className="flex flex-col w-full">

                    <button type="submit" className="py-2 w-20 mx-auto my-4 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;