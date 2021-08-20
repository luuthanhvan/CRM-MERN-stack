import { React, useState, useEffect } from 'react';
import { leadSources, getListOfContacts, deleteContact, multipleDelete, findContacts, findContactsByDate } from '../../services/ContactService';
import { getListOfUsers } from '../../services/UserService';
import { dateFormat } from '../../services/DatetimeService';
import Header from './Header';
import Table from './Table';

function Contact() {
    const [contacts, setContacts] = useState(null);
    const [assignedTo, setAssignedTo] = useState([]);
    const [reload, setReload] = useState(false);
    
    let contactIds = [];

    useEffect(() => {
        getListOfContacts().then(contacts => { setContacts(contacts) });
        getListOfUsers().then(users => {
            let names = users.map(user => {
                return { key: user.name, value: user.name };
            });
            setAssignedTo(names);
        });
    }, []);

    const onDelete = (event) => {
        const contactId = event.target.value;
        deleteContact(contactId).then(() => {
            getListOfContacts().then(contacts => { setContacts(contacts) });
        });
    }

    const reset = () => {
        getListOfContacts().then(contacts => { setContacts(contacts) });
        setReload(!reload); // set the reload to re-render the header component
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

    const applyDateFilter = (event, picker) => {
        let filterKey = event.target.name,
            from = dateFormat(picker.startDate),
            to = dateFormat(picker.endDate);
        try{
            findContactsByDate(filterKey, from, to).then(contacts => { setContacts(contacts) });
        } catch(err){
            throw err;
        }
    }

    const onCheckboxChecked = (event) => {
        if(event.target.checked)
            contactIds.push(event.target.value);
        else{
            contactIds.splice(contactIds.indexOf(event.target.value), 1);
        }
    }

    const deleteMultiple = () => {
        multipleDelete(contactIds).then(() => { reset() })
    }

    return(
        <div>
            <Header
                leadSources={leadSources}
                assignedTo={assignedTo}
                applyFilter={applyFilter}
                applyDateFilter={applyDateFilter}
                deleteMultiple={deleteMultiple}
                reset={reset}
                reload={reload}
            />
            <Table
                contacts={contacts}
                onDelete={onDelete}
                onCheckboxChecked={onCheckboxChecked}
            />
        </div>
    );
}

export default Contact;