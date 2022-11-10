import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Service = () => {
    const services = useLoaderData()
    useTitle('Service')
   
    return (
        <div  >
           <h1 className='lg:text-4xl text-4xl m-14 text-center '>All Services</h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:ml-32 mt-24 mb-24 ml-20'>
          {
            services.map(service=><ServiceCard service={service} key={service._id}></ServiceCard>)
           }
          </div>
        </div>
    );
};

export default Service;