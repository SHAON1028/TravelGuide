import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'
import Review from '../Review/Review';
import ServiceAllReview from '../Review/ServiceAllReview';
import { AuthContext } from '../../context/UserContext';
import useTitle from '../../../hooks/useTitle';
const ServiceDetails = () => {
  const serviceDetails = useLoaderData()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const { title, img, price, about, point, _id } = serviceDetails
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const { user } = useContext(AuthContext)
  useTitle('Service')

  useEffect(() => {

    fetch(`http://localhost:5000/reviews/${_id}`)
      .then(res => res.json())
      .then(data => {

        setReviews(data)
        setLoading(false)


      })
  }, [reviews])


  return (
    <div className='grid lg:grid-cols-3 w-full '>
      <div className='col-span-2'>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="mx-auto  lg:max-w-2xl">
            <div className=" mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-300 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">

                  <span className="relative"></span>
                </span>{' '}
                {title}
              </h2>

            </div>
            <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                src={img}
                alt=""
              />
            </div>
            <p className="max-w mb-4 text-base text-gray-400 sm:mx-auto">
              {about}
            </p>

            <h2 className='text-xl mt-2 text-orange-600'>Price: {price}</h2>

          </div>
        </div>

      </div>
      {/* review */}
      <div className='col-span-1'>
        {
          user?.email ? <>
            <Review serviceDetails={serviceDetails}></Review>
          </> : <div className='text-center m-2'>
            Please <Link to='/login' className='text-xl text-blue-600'>Login</Link> to add a review
          </div>
        }

        <h2 className='text-xl text-center m-2'>All Reviews</h2>
        {

          (
            reviews.length > 0 && loading === false) ? <> {
              reviews.map(review => <ServiceAllReview review={review} loading={loading} key={review._id}></ServiceAllReview>)
            }</> : <p className='text-center text-red-600'>No Reviews Found</p>

        }

      </div>
    </div>
  );
};

export default ServiceDetails;