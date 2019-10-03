import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <section className="praktiske-oplysninger">
                <h4 className="footer-h4">PRAKTISKE OPLYSNINGER</h4>
                <a href="#" className="footer-a">Om Scuba Living</a>
                <a href="#" className="footer-a">Kontakt</a>
                <a href="#" className="footer-a">Handelsbetingelser</a>
                <a href="#" className="footer-a">Persondataoilitik</a>
                <a href="#" className="footer-a">Åbningstider</a>
            </section>
            <section className="praktiske-oplysninger">
                <h4 className="footer-h4">PRAKTISKE OPLYSNINGER</h4>
                <a href="#" className="footer-a">Hovedkategorier</a>
                <a href="#" className="footer-a">Dykkerudstyr</a>
                <a href="#" className="footer-a">Dykkekurser</a>
                <a href="#" className="footer-a">Service</a>
                </section>
                <section className="praktiske-oplysninger">
                    <h4 className="footer-h4">SOCIALE MEDIER - FØLG OS HER:</h4>
                    <a href="#" className="footer-a">LinkedIn</a>
                    <a href="#" className="footer-a">Facebook</a>
                    <a href="#" className="footer-a">Instagram</a>
                </section>
            
        </footer>
    )
}

export default Footer
