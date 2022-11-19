import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';
import { cleanup } from '@testing-library/react';


const ContactForm = ({ add }) => {

    const nameRef = useRef('');
    const phoneRef = useRef('');

    function agregarContacto(e) {
        e.preventDefault();
        
        const newContact = new Contact(
            nameRef.current.value,
            phoneRef.current.value,
            false
        );
            
        add(newContact);
        
        nameRef.current.value = '';
        phoneRef.current.value = '';
    }

    return (
        <form style={{
            display: 'flex',
            marginBottom: '25px',
            alignItems: 'center'
        }} onSubmit={agregarContacto}>
            <div>
                <input ref={nameRef} type='text' className='form-control-sm' placeholder='Nombre' autoFocus required />

                <input ref={phoneRef} type='tel' className='form-control-sm' placeholder='Teléfono' autoFocus required />
            </div>

            <button type='submit' className='btn btn-primary'>Agregar Contacto</button>

        </form>
    );
};


ContactForm.propTypes = {
    add: PropTypes.func.isRequired
};


export default ContactForm;
