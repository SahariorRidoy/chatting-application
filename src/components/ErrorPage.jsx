import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col gap-6 items-center justify-center min-h-screen'>
            <h1 className='text-center text-5xl text-orange-500 '>The requested url not found</h1>
            <Link to='/login'><button className='px-6 py-3 border-2 bg-gray-600 rounded-lg text-white'>Go Back to Login Page</button></Link>
        </div>
    );
};

export default ErrorPage;