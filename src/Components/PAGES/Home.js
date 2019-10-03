import React from 'react';
import Banner from '../Banner/Banner';
import '../../App.css';
import Produkter from '../Produkter/Produkter';
import Rejser from '../Rejser/Rejser';
import Kurser from '../Kurser/Kurser';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <main>
                <Produkter />
                <Rejser />
                <Kurser />
            </main>
        </div>
    )
}

export default Home
