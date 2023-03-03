import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from './models/contact.class';
import ComponentB from './componentB';


const ComponentA = ({ contact }) => {

    

    return (
        <div>
            <h2>
                Nombre: { contact.name }
            </h2>

            <h2>
                Apellido: { contact.lastName }
            </h2>

            <h3>
                Email: { contact.email }
            </h3>

            <ComponentB onLine={ false }></ComponentB>
        </div>
    );
};


ComponentA.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ComponentA;
