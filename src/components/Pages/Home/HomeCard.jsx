import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const HomeCard = ({serviceHome}) => {
   
    const{title,img,price,about,_id} = serviceHome
    const description = about.slice(0,120)
   
    return (
        <div>
                    <div >
           <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className="px-4 py-2">
        <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">{title}</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{description}....</p>
    </div>


    <PhotoProvider>
      <PhotoView src={img}>
      <img className="object-cover w-full h-48 mt-2 cursor-pointer" src={img} alt="NIKE AIR"/>
      </PhotoView>
    </PhotoProvider>

    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">{price}</h1>
        <Link to={`/services/${_id}`}>
        
        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Details</button>
        </Link>
    </div>
</div>
        </div>
        </div>
    );
};

export default HomeCard;