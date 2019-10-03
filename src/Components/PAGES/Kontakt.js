import React from 'react';
import Banner from '../Banner/Banner';
import '../../App.css';

const Kontakt = () => {
    return (
        <div>
            <Banner />
            <main>
                <div className="kontakt">
                <section className="kontakt-åbntider">
                    <h4>Åbningstider:</h4>
                    <p className="kontakt-p">
                        Man-Tors: 09.00-17.00
                        <br/>
                        Fre: 09.00-18.00
                        <br/>
                        Lør: 09.00-15.00
                        <br/>
                        Søn: LUKKET
                    </p>
                    <h4>Konktakt os her:</h4>
                    <p className="kontakt-p">
                        Tlf: 00 00 00 00
                        <br/>
                        Email: scubaliving@underwater.wave 
                        <br/>
                        Adresse: Scubalivingvej 20
                    </p>
                </section>
                <section className="kort">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19337.257340848933!2d10.882984938780329!3d56.40981836784293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sda!2sdk!4v1570086119031!5m2!1sda!2sdk" allowfullscreen="" frameborder="0"></iframe>
                </section>
                </div>
            </main>
        </div>
    )
}

export default Kontakt
