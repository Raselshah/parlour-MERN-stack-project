import React from 'react';

const Review = () => {
    return (
        <div className=''>
            <form className='flex flex-col max-w-xs gap-y-4'>
            <input type="text" placeholder="Your name" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Company’s name, Designation" className="input input-bordered w-full max-w-xs" />
            <textarea className="textarea textarea-bordered" placeholder="Description"></textarea>
            <input className='btn btn-primary w-24' type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default Review;