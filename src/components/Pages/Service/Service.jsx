import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Service = () => {
  //  loader:()=>fetch('https://service-server-bice.vercel.app/services')
    const [services,setServices] = useState([])
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [loading,setLoading] = useState(true)
    useTitle('Service')

    useEffect(()=>{
      fetch('https://service-server-bice.vercel.app/services')
      .then(res=>res.json())
      .then(data=>{
        setServices(data)
        setLoading(false)
      })
    },[])
   
    return (
        <div  >
           <h1 className='lg:text-4xl text-4xl m-14 text-center '>All Services</h1>

         {
            loading===true ? <>
            <div className="flex items-center justify-center space-x-2">
	<div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
	<div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
	<div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
</div>
            </> : <>
             <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:ml-32 mt-24 mb-24 ml-20'>
          {
            services.map(service=><ServiceCard service={service} key={service._id}></ServiceCard>)
           }
          </div>
            </>
         }
        </div>
    );
};

export default Service;