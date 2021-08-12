import * as Yup from 'yup';
import axios from 'axios';

// constants
const salutations = [
    { key: 'None', value: 'None' },
    { key: 'Mr.', value: 'Mr.' },
    { key: 'Mrs.', value: 'Mrs.' },
    { key: 'Ms.', value: 'Ms.' },
    { key: 'Dr.', value: 'Dr.' },
    { key: 'Prof.', value: 'Prof.' },
];

const leadSources = [
    { key: 'Existing Customer', value: 'Existing Customer' },
    { key: 'Partner', value: 'Partner' },
    { key: 'Conference', value: 'Conference' },
    { key: 'Website', value: 'Website' },
    { key: 'Word of mouth', value: 'Word of mouth' },
    { key: 'Other', value: 'Other' },
];

const validationSchema = Yup.object({
    contactName: Yup.string().required("Required"),
    salutation: Yup.string().required('Required'),
    phone: Yup.string().required("Required"),
    email: Yup.string().email('Invalid email format'),
    leadSrc: Yup.string().required("Required"),
    assignedTo: Yup.string().required("Required")
});

function initContact(props){
    let contact = {
        contactName: props ? props.contactName : '',
        salutation: props ? props.salutation : '',
        phone: props ? props.phone : '',
        email: props ? props.email : '',
        organization: props ? props.organization : '',
        leadSrc: props ? props.leadSrc : '',
        assignedTo: props ? props.assignedTo : '',
        dob: props ? props.dob : '',
        address: props ? props.address : '',
        description: props ? props.description : ''
    }
    
    return contact;
}

const SERVER_URL = "http://localhost:5000/contacts";

function storeContact(contact){
    return axios.post(SERVER_URL, contact).then(res => res['data']);
}

function getListOfContacts(){
    return axios.post(`${SERVER_URL}/list`).then(res => res['data']);
}

function getContactById(contactId){
    return axios.get(`${SERVER_URL}/${contactId}`).then(res => res['data']);
}

function updateContact(contactId, newContact){
    return axios.put(`${SERVER_URL}/${contactId}`, newContact).then(res => res['data']);
}

function deleteContact(contactId){
    return axios.delete(`${SERVER_URL}/${contactId}`).then(res => res['data']);
}

export { 
    salutations, 
    leadSources, 
    validationSchema, 
    initContact,  
    storeContact,
    getListOfContacts,
    getContactById,
    updateContact,
    deleteContact
}