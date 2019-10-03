import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProduktContext } from '../../Context/ProduktContext';
import '../Produkter/Produkter.css';

const Dykkerudstyr = () => {

    const { produkter } = useContext(ProduktContext);

    const produktListe = produkter.map(p => {
        return(
            <div key={p.produktid} className="produkt-box">
                <img src={'/Assets/Produkter/' + p.produktimg} className="img" alt="Dykkerrejser"/>
                <Link to={"/produkt/" + p.produktid} className="a">{p.produkttitel}</Link>
                <h5>{p.produktpris}</h5>
            </div>
        )
    })

    return (
        <div className="dykkerudstyr">
            <main>
            <h4 className="produkt-navn">Dykkerudstyr</h4>

            
                <section className="produktListe">
                {produktListe}
            </section>
            <section className="produktListe">
                {produktListe}
            </section>
            </main>
        </div>
    )
}

export default Dykkerudstyr
