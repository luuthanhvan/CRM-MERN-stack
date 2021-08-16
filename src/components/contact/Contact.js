import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './Filter';
import Table from './Table';

function Contact() {
    const SERVER_URL = "http://localhost:5000/contacts";
    const [contacts, setContacts] = useState(null);

    useEffect(() => {
        axios.post(`${SERVER_URL}/list`)
            .then(res => res['data'])
            .then(res => { setContacts(res['data']) });
    }, []);

    const onDelete = (event) => {
        const contactId = event.target.value;
        axios.delete(`${SERVER_URL}/${contactId}`).then(() => {
            axios.post(`${SERVER_URL}/list`)
                .then(res => res['data'])
                .then(res => { setContacts(res['data']) });
        });
    }

    return(
        <div>
            <Filter />
            <Table 
                contacts={contacts} 
                onDelete={onDelete}
            />
        </div>
    );
}

export default Contact;