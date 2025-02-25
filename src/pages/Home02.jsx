import React from 'react';

import dataCard from '../assets/fake-data/data-card';

import dataItem from '../assets/fake-data/data-item';

import dataTestimonials2 from '../assets/fake-data/data-testimonials2';
import dataPhoto from '../assets/fake-data/dataPhoto';

import About from '../components/about/About';

import Banner2 from '../components/banner/Banner2';

import Counter from '../components/counter/Counter';

import Footer from '../components/footer/Footer';

import Project from '../components/project/Project';
import Project2 from '../components/project/Project2';
import Project3 from '../components/project/Project3';

import Testimonials2 from '../components/testimonials/Testimonials2';
import Photo from '../components/photo/Photo';



function Home02(props) {
    

    return (
        <div className='home-2 wrapper'>
                <Banner2 data={dataCard} />

{/*                 <About2 />*/}

                <About />

                <Counter />  

                <Project data={dataItem} /> 

                <Photo data={dataPhoto} />

                <Testimonials2 data={dataTestimonials2} />

                <Footer />
        </div>
    );
}

export default Home02;