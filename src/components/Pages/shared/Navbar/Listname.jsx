import { list } from 'postcss';
import React, { useEffect, useState } from 'react';
import useTitle from '../../../../hooks/useTitle';
import LIstItem from './LIstItem';

const Listname = () => {
  const [litm, setLitm] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    fetch('https://service-update.vercel.app/services')
      .then(res => res.json())
      .then(data => {
        setLitm(data)
        setLoader(false)

      })
  }, [])
  return (
    <div className='flex'>
      {
        loader === true ? <>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
          </div>
        </> : <>
          {
            litm.map(singlelist => <LIstItem singlelist={singlelist} key={singlelist._id}></LIstItem>)
          }

        </>
      }

    </div>
  );
};

export default Listname;