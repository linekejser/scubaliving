import React, { createContext, useState } from 'react';

export const ProduktContext = createContext();

const ProduktContextProvider = (props) => {

    const [produkter, setProdukter] = useState([
        {
            produktid: 1, 
            produktimg: 'reg.jpg',
            produkttitel: 'REGULATOR MED RESIST', 
            produktpris: 'KR 899'
        },
        {
            produktid: 2, 
            produktimg: 'fine.jpg',
            produkttitel: 'REJSEFINNE', 
            produktpris: 'KR 999'
        },
        {
            produktid: 3, 
            produktimg: 'ur.jpg',
            produkttitel: 'DYKKERUR', 
            produktpris: 'KR 999'
        },
        {
            produktid: 4, 
            produktimg: 'hanske.jpg',
            produkttitel: 'COLDWATER GLOVES', 
            produktpris: 'KR 1499'
        }
    ]);

    const findProdukt = (id) => {

        return produkter.find(p => p.produktid === id);
    }

    return (
           <ProduktContext.Provider value={{produkter, findProdukt}}>
            {props.children}
        </ProduktContext.Provider>
    )
}

export default ProduktContextProvider
