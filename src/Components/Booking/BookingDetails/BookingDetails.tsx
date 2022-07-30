import React from 'react';

const BookingDetails = () => {
    return (
        <div className='max-w-xs flex flex-col justify-center gap-y-6'>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <p>Pay with</p>
            <p>Creadit Card</p>
            <div className='flex justify-between items-center'>
            <p>Your Service charged $1000</p>
            <button className='btn btn-md px-8 btn-primary'>Pay</button>
            </div>
        </div>
    );
};

export default BookingDetails;