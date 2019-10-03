import React from 'react';
import Kursus from '../../Assets/PADI.JPG'
import '../Kurser/Kurser.css'

const Dykkerkurser = () => {
    return (
        <main>
            <h4 className="produkt-navn DK">Dykkerkurser</h4>
            <p className="kontakt-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam excepturi explicabo quam incidunt amet animi a ab vel, ad unde magnam autem nobis, adipisci dolorem ullam reprehenderit facere repellendus voluptas reiciendis id dolor necessitatibus veniam. Laborum reprehenderit molestiae tenetur nam ut dolores, eos ducimus, velit veniam veritatis praesentium labore error pariatur quo ea totam numquam eaque aliquid ratione harum. Voluptates sapiente iusto odit praesentium? Autem cupiditate, rem obcaecati exercitationem consequuntur fugit officiis facere quod dolor inventore eveniet ex perspiciatis est enim nesciunt veritatis! Aperiam quas voluptate assumenda beatae exercitationem minus vero aliquam quia ut recusandae! Odit nemo dolore minima praesentium!</p>
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
            
        </main>
    )
}

export default Dykkerkurser
