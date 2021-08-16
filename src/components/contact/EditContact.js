import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ContactForm from './ContactForm';

function EditContact() {
    const assignedTo = [
        { key: 'Luu Thanh Van', value: 'Luu Thanh Van' },
        { key: 'Thanh Van', value: 'Thanh Van' },
    ];
    const SERVER_URL = "http://localhost:5000/contacts";
    const location = useLocation();
    let contactId = location.state;
    const [contact, setContact] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [createdTime, setCreatedTime] = useState(null); // keep the created time

    useEffect(() => {
        axios.get(`${SERVER_URL}/${contactId}`)
            .then(res => res['data'])
            .then((res) => {
                setContact(res['data']);
                setCreatedTime(res['data'].createdTime);
            })
    }, []);

    const onSubmit = (newContact) => {
        newContact.createdTime = createdTime;
        newContact.updatedTime = new Date();
        
        axios.put(`${SERVER_URL}/${contactId}`, newContact)
            .then(res => res['data'])
            .then(res => {
                if(res.status === 1){
                    setSubmitted(true);
                }
            })
    };

    return(
        <div>
            <ContactForm 
                contact={contact}
                onSubmit={onSubmit}
                submitted={submitted}
                isEditForm={true}
                assignedTo={assignedTo}
            />
        </div>
    )
}

export default EditContact;