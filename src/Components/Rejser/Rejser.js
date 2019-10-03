import React, { useContext } from 'react';
import './Rejser.css';
import { RejserContext } from '../../Context/RejserContext';

const Rejser = () => {

    const {rejser} = useContext(RejserContext);

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
        <div className="Dykkerejser">
            <section className="overskrift">
                <div className="text">
                    <p>DYK UD I VERDEN</p>
                </div>
                <div className="grå-panel">
                </div>
            </section>
            <section className="rejseListe">
                {rejseListe}
            </section>
            <section className="link">
            <a href="#" className="a">SE FLERE DESTINATIONER OG MUGLIGHEDER HER</a>
            </section>
        </div>
    )
}

export default Rejser
