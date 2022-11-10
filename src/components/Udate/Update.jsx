import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
    const storedReview = useLoaderData()
    const{_id,message} = storedReview
    const navigate = useNavigate()
   
 
    const handleSubmit = async (e) => {

        e.preventDefault();
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
        const review = {
         
          message: e.target.message.value,
          date
        }
    
        fetch(`http://localhost:5000/myreviews/${_id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(review)
        }).then(res => res.json())
        .then(data => {
          if(data.success){
            toast.success(data.message);
           navigate('/myreviews')
          } else {
            toast.err(data.error)
          }
        })
        .catch(err => toast.error(err.message))
      }


   
    return (
        <div className='lg:ml-96'>
            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:text-gray-100">
	<form onSubmit={handleSubmit} className="flex flex-col items-center w-3/4">
		<h2 className="text-xl font-semibold text-center">Add  Review</h2>
		<div className="flex flex-col items-center py-6 space-y-3">
			<span className="text-center">How was your experience?</span>

		</div>
		<div className="flex flex-col w-full">
			<textarea defaultValue={message} name='message' rows="3" placeholder="Message..." className="p-1 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
			<button type="submit" className="py-2 w-1/2 mx-auto my-4 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">Update</button>
		</div>
	</form>
	
</div>
        </div>
    );
};

export default Update;