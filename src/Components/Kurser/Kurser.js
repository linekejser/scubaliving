import React from 'react';
import './Kurser.css';
import Kursus from '../../Assets/PADI.JPG';

const Kurser = () => {
    return (
        <div className="kurser">
        <section className="overskrift">
                <div className="text">
                    <p>PADI - DYKKERCERTIFIKAT</p>
                </div>
                <div className="grå-panel">
                </div>
            </section>
            <section className="kursus-box">
                <section className="kursus-info">
                    <h3 className="info-h3">TAG ET INTERNATIONALT ANERKENDT DYKKERCERTIFIKAT</h3>
                    <p className="info-p">Her finder du et stort udvalg af dykkerkurser lige fra begynder til professionel. Vi er et af Danmarks førende dykkecentre, som uddanner fra PADI organisationen. Når du vælger at tage et dykkercertifikat hos os, får du ikke kun et internationalt anerkendt dykkercertifikat til markeders bedste priser, du får også et dykkerkursus, hvor kvaliteten er i top. 
<br />
<br />
Vi har kompetente instruktører på vores dykkerkurser. Erfaring, tillid og sikkerhed er vigtigt, når du dykker med os, derfor står vi klar med et hold af kompetente instruktører.</p>
                </section>
                <section>
                    <img src={Kursus} className="info-img" alt="Certifikat"/>
                </section>
            </section>
            <section className="link">
            <a href="#" className="a">SE FLERE DESTINATIONER OG MUGLIGHEDER HER!</a>
            </section>
        </div>
    )
}

export default Kurser
