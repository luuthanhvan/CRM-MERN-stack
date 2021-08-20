import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { storeContact, leadSources, salutations, validationSchema } from '../../services/ContactService';
import { getListOfUsers } from '../../services/UserService';
import ContactForm from './ContactForm';

function CreateContact() {
    // useHistory to Programmatically navigate after form submitted
    const history = useHistory();
    const [assignedTo, setAssignedTo] = useState([]);

    useEffect(() => {
        getListOfUsers().then(users => {
            let names = users.map(user => {
                return { key: user.name, value: user.name };
            });
            setAssignedTo(names);
        });
    }, []);

    const onSubmit = (contact) => {
        storeContact(contact).then(() => { history.push("/contact") });
    };

    return(
        <div>
            <ContactForm 
                contact={null}
                title="Create new contact"
                onSubmit={onSubmit}
                isEditForm={false}
                assignedTo={assignedTo}
                leadSources={leadSources}
                salutations={salutations}
                validationSchema={validationSchema}
            />
        </div> 
    )
}

export default CreateContact;