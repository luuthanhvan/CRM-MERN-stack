import { React } from 'react';
import { useHistory } from 'react-router-dom';
import { storeContact, leadSources, salutations, validationSchema } from '../../services/ContactService';
import ContactForm from './ContactForm';

// temp data
const assignedTo = [
    { key: 'Luu Thanh Van', value: 'Luu Thanh Van' },
    { key: 'Thanh Van', value: 'Thanh Van' },
];

function CreateContact() {
    // useHistory to Programmatically navigate after form submitted
    const history = useHistory();
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