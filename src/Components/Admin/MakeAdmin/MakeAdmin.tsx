import React from 'react';

const MakeAdmin = () => {
    return (
        <div className='bg-white p-6 '>
            <h2>Email</h2>
            <div className="flex justify-start gap-6 items-center">
            <div className="w-2/4">
            
            <input type="email" placeholder="you@mail.com" className="input input-bordered w-full" />
            </div>

            <button className='btn btn-primary'>Submit</button>
            </div>
        </div>
    );
};

export default MakeAdmin;