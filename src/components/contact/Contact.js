import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './Filter';
import Table from './Table';

const SERVER_URL = "http://localhost:5000/contacts";

function GetListOfContacts(){
    return axios.post(`${SERVER_URL}/list`).then(res => res['data']);
}

function Contact() {
    let [contacts, setContacts] = useState(null);
    let listOfContacts;

    useEffect(() => {
        listOfContacts = GetListOfContacts();
        listOfContacts.then(res => { setContacts(res['data']) });
    }, []);

    const onDelete = (event) => {
        const contactId = event.target.value;
        
        axios.delete(`${SERVER_URL}/${contactId}`).then(() => {
            listOfContacts = GetListOfContacts();
            listOfContacts.then(res => { setContacts(res['data']) });
        });
    }

    const reset = () => {
        listOfContacts = GetListOfContacts();
        listOfContacts.then(res => { setContacts(res['data']) });
    }

    const applyFilter = (event) => {
        let filterKey = event.target.name,
            filterValue = event.target.value;
        
        axios.post(`${SERVER_URL}/search`, {key: filterKey, value: filterValue})
            .then(res => res['data'])
            .then((res) => { setContacts(res['data']) });
    }

    return(
        <div>
            <Filter 
                applyFilter={applyFilter}
                reset={reset}
            />
            <Table 
                contacts={contacts} 
                onDelete={onDelete}
            />
        </div>
    );
}

export default Contact;