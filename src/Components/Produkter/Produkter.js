import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Produkter.css';
import { ProduktContext } from '../../Context/ProduktContext';

const Produkter = () => {

    const { produkter } = useContext(ProduktContext);

    const produktListe = produkter.map(p => {
        return(
            <div key={p.produktid} className="produkt-box">
                <img src={'/Assets/Produkter/' + p.produktimg} className="img"/>
                <Link to={"/produkt/" + p.produktid} className="a">{p.produkttitel}</Link>
                <h5>{p.produktpris}</h5>
            </div>
        )
    })
    return (
        <div className="Dykkerudsyr">
            <section className="overskrift">
                <div className="text">
                    <p>MEST POPULÆRE DYKKERUDSTYR</p>
                </div>
                <div className="grå-panel">
                </div>
            </section>
            <section className="produktListe">
                {produktListe}
            </section>
            <section className="link">
            <a href="#" className="a">SE MERE LÆRKKERT UDSTYR HER</a>
            </section>
        </div>
    )
}

export default Produkter
