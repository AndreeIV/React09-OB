import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({ contact, complete, remove }) => {

    useEffect(() => {
        
        return () => {
            console.log(`Contacto: ${contact.name} esta montado`);
        };
    }, [remove.name]);

    function contactIconCompleted() {
        if(contact.status) {
            return <i onClick={ () => complete(contact) } className='bi bi-circle-fill status' style={{color: 'black'}}>CONECTADO</i>;
        } else {
            return <i onClick={ () => complete(contact) } className='bi bi-circle status' style={{color: 'black'}}>DESCONECTADO</i>;
        }
    }

    return (
        <tr>
            <th>
                <span>
                    { contact.name }
                </span>
            </th>

            <td>
                <span>
                    { contact.telephone}
                </span>
            </td>

            <td>
                <span>
                    {contactIconCompleted()}
                    <i className='bi-trash status' onClick={ () => remove(contact) } style={{color: 'tomato', fontWeight: 'bold'}}></i>
                </span>
            </td>
        </tr>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponent;
