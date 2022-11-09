import React from 'react';
import { useLoaderData } from 'react-router-dom';
import beach from '../../../assets/pexels-asad-photo-maldives-1266831.jpg'
import HomeCard from './HomeCard';
const Home = () => {
  const servicesHome = useLoaderData()
  console.log(servicesHome)
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${beach})` }}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 lg:text-5xl text-4xl text-gray-200 font-bold">Hello there</h1>
      <p className="mb-5 text-gray-200">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

    <div>
        <h1 className='lg:text-5xl text-4xl m-10 text-center '>Our Services</h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:ml-32 mt-24 mb-24 ml-20'>
          {
            servicesHome.map(serviceHome=><HomeCard serviceHome={serviceHome} key={serviceHome._id}></HomeCard>)
           }
          </div>
          
    </div>
        </div>
    );
};

export default Home;