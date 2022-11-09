import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData()
    const {title} = serviceDetails
    return (
        <div>
            <p>{title}</p>
        </div>
    );
};

export default ServiceDetails;