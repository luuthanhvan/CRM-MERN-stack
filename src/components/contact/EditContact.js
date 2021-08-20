import { React, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { getContactById, updateContact, leadSources, salutations, validationSchema } from '../../services/ContactService';
import { getListOfUsers } from '../../services/UserService';
import ContactForm from './ContactForm';

function EditContact() {
    const history = useHistory();
    const location = useLocation();
    let contactId = location.state;
    const [contact, setContact] = useState(null);
    const [createdTime, setCreatedTime] = useState(null); // keep the created time
    const [assignedTo, setAssignedTo] = useState([]);

    useEffect(() => {
        getContactById(contactId).then(contact => {
            setContact(contact);
            setCreatedTime(contact.createdTime);
        });
        getListOfUsers().then(users => {
            let names = users.map(user => {
                return { key: user.name, value: user.name };
            });
            setAssignedTo(names);
        });
    }, []);

    const onSubmit = (newContact) => {
        newContact.createdTime = createdTime;
        newContact.updatedTime = new Date();
        
        updateContact(contactId, newContact).then(() => history.push("/contact"));
    };

    return(
        <div>
            <ContactForm 
                contact={contact}
                title="Edit the contact"
                onSubmit={onSubmit}
                isEditForm={true}
                assignedTo={assignedTo}
                leadSources={leadSources}
                salutations={salutations}
                validationSchema={validationSchema}
            />
        </div>
    )
}

export default EditContact;