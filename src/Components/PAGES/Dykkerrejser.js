import React, { useContext } from 'react'
import { RejserContext } from '../../Context/RejserContext';
import '../Rejser/Rejser.css';

const Dykkerrejser = () => {

        const { rejser } = useContext(RejserContext);

        const rejseListe = rejser.map(r => {
            return(
                <div key={r.rejseid} className="rejse-box">
                    <img src={'Assets/Rejser/' + r.rejseimg} className="img" alt="Rejser"/>
                    <div className="info">
                    <h4 className="h4">{r.rejsetitel}</h4>
                    <p className="p">{r.rejseinfo}</p>
                    </div>
                </div>
    
                )
        })

    return (
        <main>
            <h4 className="produkt-navn">Dykkerrejser</h4>

            <section className="rejseListe">
                {rejseListe}
            </section>

            <section className="rejseListe">
                {rejseListe}
            </section>
        </main>
    )
}

export default Dykkerrejser
