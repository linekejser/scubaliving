import React, { createContext, useState } from 'react';

export const RejserContext = createContext();

const RejserContextProvider = (props) => {

    const [rejser, setRejser] = useState([
        {
            rejseid: 1, 
            rejseimg: 'malta.jpg',
            rejsetitel: 'MALTA', 
            rejseinfo: 'Oplev skønne malta og det helt fantastiske dyreliv og sammenhold. Vi arrengerer dykkerrejser til Malta hele året rundt.'
        },
        {
            rejseid: 2, 
            rejseimg: 'norge.JPG',
            rejsetitel: 'NORGE', 
            rejseinfo: 'Nordeuropas bedste dykkerspots ligger i Norge. Vi har 25 års erfaring med dyk i Norge. Oplev det klareste vand i verden!'
        }
    
    ])
    return (
        <RejserContext.Provider value={{rejser}}>
            {props.children}
        </RejserContext.Provider>
    )
}

export default RejserContextProvider
