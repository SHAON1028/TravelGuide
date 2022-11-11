import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';

const LIstItem = ({singlelist}) => {
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const{cat,_id} = singlelist
   
    return (
        <div>
      
                <NavLink to={`/services/${_id}`}  className={({ isActive }) => (isActive ? 'bg-black text-green-500  border-b-2 border-blue-500  border-l border-blue-500  px-4 py-2 mx-0 outline-none flex items-center focus:shadow-outline' : 'bg-black text-green-500 hover:bg-blue-500 hover:text-white border-l border-green-500  px-4 py-2 mx-0 outline-none flex items-center focus:shadow-outline')}>
                {cat}
                </NavLink>
             
        
        </div>
    );
};
// border-b-2 border-blue-500  

export default LIstItem;
// className="bg-black text-green-500 hover:bg-blue-500 hover:text-white border-l border-green-500  px-4 py-2 mx-0 outline-none flex items-center focus:shadow-outline"