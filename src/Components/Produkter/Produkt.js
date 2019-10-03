import React, { useContext } from 'react';
import { ProduktContext } from '../../Context/ProduktContext';
import './Produkter.css';

const Produkt = (props) => {

    let produktid = +props.match.params.produktid;

    const { findProdukt } = useContext(ProduktContext);
    const produkt = findProdukt(produktid);

    if (produkt) {
        return (
            <div className="produkt-side">
                <h4 className="produkt-navn">{produkt.produkttitel}</h4>

                <div className="produkt">
                    <img src={'/Assets/Produkter/' + produkt.produktimg} className="bigImg"/>
                    <h4 className="produkt-h4">{produkt.produkttitel}</h4>
                    <h5 className="produkt-h5">{produkt.produktpris}</h5>
                </div>

            </div>
        )}
        
        else {
            return (
                <h1>Der er desværre sket en fejl - der er ingen nyhed der passet til det, du har sødt efter.</h1>
            )
        }

    
}

export default Produkt
