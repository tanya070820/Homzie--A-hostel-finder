import React from 'react'
import About from '../../Components/About/About'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Home from '../../Components/Home/Home'
import FeaturedHostel from '../../Components/FeaturedHostel/FeaturedHostel';
import Steps from '../../Components/Steps/Steps'
import styles from './HomePage.module.css'
const HomePage = () => {
    return (
        <div className={styles.homeContainer}>
            <Home />
            <About />
            <FeaturedHostel/>
            <Steps />
            <Testimonials />
        </div>
    )
}

export default HomePage;
