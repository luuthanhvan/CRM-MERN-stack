import { React, useState } from 'react';
import axios from 'axios';
import ContactForm from './ContactForm';

function CreateContact() {
    // temp data
    const assignedTo = [
        { key: 'Luu Thanh Van', value: 'Luu Thanh Van' },
        { key: 'Thanh Van', value: 'Thanh Van' },
    ];
    const SERVER_URL = "http://localhost:5000/contacts";
    const [submitted, setSubmitted] = useState(false);
    const onSubmit = (contact) => {
        axios.post(SERVER_URL, contact)
            .then(res => res['data'])
            .then(res => {
                if(res.status === 1){
                    setSubmitted(true);
            }
        });
    };

    return(
        <div>
            <ContactForm 
                contact={null}
                onSubmit={onSubmit}
                submitted={submitted}
                isEditForm={false}
                assignedTo={assignedTo}
            />
        </div> 
    )
}

export default CreateContact;