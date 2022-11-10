import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import UserContext, { AuthContext } from '../../context/UserContext';
import MyReviewsItem from './MyReviewsItem';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    const[reviews,setReviews] = useState([])
    const [loading,setLoading] = useState(true)
   

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
           
            .then(res => {
               
                return res.json();
            })
            .then(data => {
                setReviews(data);
                setLoading(false)
            })
    }, [user?.email])
    const handleDelete = id => {
        const proceed = window.confirm('confirm delete');
        if (proceed) {
            fetch(`http://localhost:5000/myreviews/${id}`, {
                method: 'DELETE',
               
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.error('deleted successfully');
                        const remaining = reviews.filter(rvw => rvw._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/myreviews/${id}`, {
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(odr => odr._id !== id);
                    const approving = reviews.find(odr => odr._id === id);
                    approving.status = 'Approved'

                    const newReviews = [approving, ...remaining];
                    setReviews(newReviews);
                }
            })
    }
    return (
        <div>
            <p className='text-3xl text-center m-10 '>My Reviews</p>
           {
                loading===true ? <><div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
            </div></>:<>
                 {
                reviews.map(review=><MyReviewsItem key={review._id} review={review} handleDelete={handleDelete} handleStatusUpdate={handleStatusUpdate}></MyReviewsItem>)
            }
                </>
           }
        </div>
    );
};

export default MyReviews;