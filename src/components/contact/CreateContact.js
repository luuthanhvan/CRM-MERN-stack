import { React } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ContactForm from './ContactForm';

const SERVER_URL = "http://localhost:5000/contacts";
// temp data
const assignedTo = [
    { key: 'Luu Thanh Van', value: 'Luu Thanh Van' },
    { key: 'Thanh Van', value: 'Thanh Van' },
];

function CreateContact() {
    // useHistory to Programmatically navigate after form submitted
    const history = useHistory();
    const onSubmit = (contact) => {
        axios.post(SERVER_URL, contact)
            .then(res => res['data'])
            .then(res => {
                if(res.status === 1){
                    history.push("/contact");
            }
        });
    };

    return(
        <div>
            <ContactForm 
                contact={null}
                title="Create new contact"
                onSubmit={onSubmit}
                isEditForm={false}
                assignedTo={assignedTo}
            />
        </div> 
    )
}

export default CreateContact;