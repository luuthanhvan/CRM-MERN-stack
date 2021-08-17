import { React, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import ContactForm from './ContactForm';

const SERVER_URL = "http://localhost:5000/contacts";
// temp data
const assignedTo = [
    { key: 'Luu Thanh Van', value: 'Luu Thanh Van' },
    { key: 'Thanh Van', value: 'Thanh Van' },
];

function EditContact() {
    const history = useHistory();
    const location = useLocation();
    let contactId = location.state;
    const [contact, setContact] = useState(null);
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
                    history.push("/contact");
                }
            })
    };

    return(
        <div>
            <ContactForm 
                contact={contact}
                title="Edit the contact"
                onSubmit={onSubmit}
                isEditForm={true}
                assignedTo={assignedTo}
            />
        </div>
    )
}

export default EditContact;