import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import beach from '../../../assets/pexels-asad-photo-maldives-1266831.jpg'
import useTitle from '../../../hooks/useTitle';
import HomeCard from './HomeCard';
const Home = () => {
  const servicesHome = useLoaderData()
  useTitle('Home')

  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${beach})` }}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 lg:text-5xl text-4xl text-gray-300 font-bold">Welcome To TravelGuide</h1>
            <p className="mb-5 text-gray-300">I will guide you how to visit the most beautifull places of Bangladesh.You will know about the place where to go what places to see and many more.</p>
            <Link to="/services"> <button className="btn btn-primary">Get Started</button></Link>
          </div>
        </div>
      </div>

      <div className='mb-10'>
        <h1 className='lg:text-5xl text-4xl m-10 text-center '>Services</h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:ml-32 mt-24 mb-24 ml-20'>
          {
            servicesHome.map(serviceHome => <HomeCard serviceHome={serviceHome} key={serviceHome._id}></HomeCard>)
          }
        </div>
        {/* <button className="btn btn-outline btn-primary ">Show All</button> */}


        <Link to="/services">
          <div className='text-center'>
            <button onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }} className="inline-flex  items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-green-700 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
              <span>Show All</span>
            </button>
          </div>
        </Link>


      </div>
    </div>
  );
};

export default Home;