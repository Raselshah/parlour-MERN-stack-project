import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner/Banner';
import ContactMe from './ContactMe/ContactMe';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Treatment from './Treatment/Treatment';

const HomePage = () => {
    return (
        <div>
        <Banner />
        <Services />
        <Treatment/>
        <Testimonial/>
        <ContactMe/>
        <Footer/>
        </div>
    );
};

export default HomePage;