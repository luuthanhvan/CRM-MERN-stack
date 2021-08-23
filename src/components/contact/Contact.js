import { React, useState, useEffect } from 'react';
import { leadSources, getListOfContacts, deleteContact, multipleDelete, findContacts, findContactsByDate } from '../../services/ContactService';
import { getListOfUsers } from '../../services/UserService';
import { dateFormat } from '../../services/DatetimeService';
import Header from '../shared/Header';
import Table from './Table';
import Filter from './Filter';
import ButtonBar from './ButtonBar';
import ConfirmationDialog from './ConfirmationDialog';
import { Modal } from 'bootstrap';
import $ from 'jquery';

function Contact() {
    const [contacts, setContacts] = useState(null);
    const [assignedTo, setAssignedTo] = useState([]);
    
    let contactIds = [];
    let filterData = {
        leadSources : leadSources, 
        assignedTo: assignedTo
    };


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
        // show confirmation modal
        let modal = new Modal($("#deleteDialog"));
        modal.show();
        $("#confirmBtn").on('click', function(){
            deleteContact(contactId).then(() => {
                getListOfContacts().then(contacts => { setContacts(contacts) });
            });
            modal.hide();
        });
    }

    const reset = () => {
        getListOfContacts().then(contacts => { setContacts(contacts) });
    }

    const applyFilter = async (event, picker) => {
        let filterKey = event.target.name;
        
        try{
            if(picker){
                let from = dateFormat(picker.startDate),
                    to = dateFormat(picker.endDate);
                findContactsByDate(filterKey, from, to).then(contacts => { setContacts(contacts) });
            }
            else {
                let filterValue = event.target.value;
                findContacts(filterKey, filterValue).then(contacts => { setContacts(contacts) });
            }
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
        let modal = new Modal($("#deleteDialog"));
        modal.show();
        $("#confirmBtn").on('click', function(){
            multipleDelete(contactIds).then(() => { reset() })
            modal.hide();
        });
    }

    return(
        <div>
            <Header
                title={<span>Contact</span>}
                filter={<Filter data={filterData} onApply={applyFilter}/>}
                buttonBar={<ButtonBar onReset={reset} onMassDelete={deleteMultiple}/>}
            />
            <Table
                contacts={contacts}
                onDelete={onDelete}
                onCheckboxChecked={onCheckboxChecked}
            />
            <ConfirmationDialog 
                title="Confirmation"
                content="Do you want to delete the contact?"
            />
        </div>
    );
}

export default Contact;