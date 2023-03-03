import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from './models/contact.class';



const ComponentB = (onLine) => {

    const [conected, setconected] = useState(onLine);

    const changeState = () => {
        setconected(!conected)
    }

    return (
        <div>
            <h5>
                {conected === true ? 'Contacto En Línea' : 'Contacto No Disponible' }
                <br/>
                <br/>
                <button onClick={changeState}>{ conected === true ? 'On Line' : 'Off Line' }</button>
            </h5>
        </div>
    );
};


ComponentB.propTypes = {
    onLine: PropTypes.bool,
};


export default ComponentB;
