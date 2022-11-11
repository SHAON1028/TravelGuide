import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../context/UserContext';


const Review = ({serviceDetails,loading}) => {
   
    const{_id,title} = serviceDetails
    const {user} = useContext(AuthContext)
  
    
    const handleReview = event => {
        
        event.preventDefault();
        
        const form = event.target;
       
        const message = form.message.value;
        const name = user?.displayName
        const photo = user?.photoURL
        const email = user?.email
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

        const review = {
            reviewId: _id,
           message,
           name,
           photo,
           email,
           title,
           date

        }
        
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
               
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
               
                if(data.acknowledged){
                   toast.success('review added')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));

        
    }

    return (
        <div className='ml-5'>
            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:text-gray-100">
	<form onSubmit={handleReview} className="flex flex-col items-center w-3/4">
		<h2 className="text-xl font-semibold text-center">Add  Review</h2>
		<div className="flex flex-col items-center py-6 space-y-3">
			<span className="text-center">How was your experience?</span>

		</div>
		<div className="flex flex-col w-full">
			<textarea name='message' rows="3" placeholder="Message..." className="p-1 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
			<button type="submit" className="py-2 w-1/2 mx-auto my-4 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">Leave feedback</button>
		</div>
	</form>
	
</div>
        </div>
    );
};

export default Review;