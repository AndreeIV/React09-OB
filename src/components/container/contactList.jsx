import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/form/contactForm';

const ContactList = () => {
    // Instancia de la clase Contact
    const contacto1 = new Contact('Andree', '+51902499903', false);
    const contacto2 = new Contact('Juan', '+51499902903', true);
    const contacto3 = new Contact('Alex', '+51902903499', false);

    // Estado del componente
    const [contacts, setcontacts] = useState([contacto1, contacto2, contacto3]);
    // const [loading, setloading] = useState(false);
    
    function completeContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].status = !tempContacts[index].status;

        // We update the state of the component and it will update the
        // Iteration of the tasks in order to show the task update
        setcontacts(tempContacts);
    }

    // Función para eliminar un contacto
    function removeContact(contact) {
        console.log('Contacto Eliminado');

        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);

        setcontacts(tempContacts);
    }

    function addContact(contact) {
        console.log('Contacto Agregado');
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        
        setcontacts(tempContacts);
    }

    return (
        <div>
            <div className='contenedor'>
                <div className='card contacts'>
                    <div style={{ width: '100%' }} className='card-header'>
                        <h1>
                            Your Contacts
                        </h1>
                    </div>

                    <div style={{
                        width: '100%', display: 'flex',
                        justifyContent: 'flex-start',
                        flexDirection: 'column'

                    }} className='card-body'>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Teléfono</th>
                                    <th scope='col'>Estado</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* <ContactComponent task={contacto1} ></ContactComponent> */}
                                
                                { contacts.map( (contact, index) => {
                                    return (
                                        <ContactComponent
                                            key={index}
                                            contact={contact}
                                            complete={completeContact}
                                            remove={removeContact}
                                        >

                                        </ContactComponent>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div style={{
                        width: '100%'
                    }} className='card-footer'>
                        <h2>
                            AndreeIV
                        </h2>
                    </div>

                    <ContactForm add={addContact}></ContactForm>

                </div>
            </div>
        </div>
    );
};

export default ContactList;
