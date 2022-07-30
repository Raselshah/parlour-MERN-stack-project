import React from 'react';

const ContactMe = () => {
    return (
        <div
        data-aos="flip-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
         className='w-2/4 mx-auto mt-12'>
            <h2 className='text-4xl font-bold text-center mt-12'>Let us handle your <br/> project, professionally.</h2>
            
               <div className="flex flex-row gap-16 mt-12">
              <div className="">
              <input type="text" placeholder="Full Name" className="input w-full max-w-xs mb-6" />
                <input type="text" placeholder="Email Address" className="input w-full max-w-xs" />
              </div>
               <div className="div">
                 
               <input type="text" placeholder="Last Name" className="input w-full max-w-xs mb-6" />
                <input type="text" placeholder="Phone Number" className="input w-full max-w-xs" />
               
               </div>
            
               </div>
               <textarea className="textarea w-full mt-6" placeholder="Your Message"></textarea>
               <button className='btn btn-primary w-25 flex justify-center mx-auto m-4'>Send Message</button>
       </div>
    );
};

export default ContactMe;