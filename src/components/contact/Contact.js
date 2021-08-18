import { React, useState, useEffect } from 'react';
import { leadSources, getListOfContacts, deleteContact, findContacts } from '../../services/ContactService';
import Filter from './Filter';
import Table from './Table';

function Contact() {
    let [contacts, setContacts] = useState(null);

    useEffect(() => {
        getListOfContacts().then(contacts => { setContacts(contacts) });
    }, []);

    const onDelete = (event) => {
        const contactId = event.target.value;
        deleteContact(contactId).then(() => {
            getListOfContacts().then(contacts => { setContacts(contacts) });
        });
    }

    const reset = () => {
        getListOfContacts().then(contacts => { setContacts(contacts) });
    }

    const applyFilter = async (event) => {
        let filterKey = event.target.name,
            filterValue = event.target.value;
        
        try{
            findContacts(filterKey, filterValue).then(contacts => { setContacts(contacts) });
        } catch(err){
            throw err;
        }
    }

    return(
        <div>
            <Filter
                leadSources={leadSources}
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