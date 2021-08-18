import axios from 'axios';
import * as Yup from 'yup';

const SERVER_URL = "http://localhost:5000/contacts";
const leadSources = [
    { key: 'Existing Customer', value: 'Existing Customer' },
    { key: 'Partner', value: 'Partner' },
    { key: 'Conference', value: 'Conference' },
    { key: 'Website', value: 'Website' },
    { key: 'Word of mouth', value: 'Word of mouth' },
    { key: 'Other', value: 'Other' },
];
const salutations = [
    { key: 'None', value: 'None' },
    { key: 'Mr.', value: 'Mr.' },
    { key: 'Mrs.', value: 'Mrs.' },
    { key: 'Ms.', value: 'Ms.' },
    { key: 'Dr.', value: 'Dr.' },
    { key: 'Prof.', value: 'Prof.' },
];
const validationSchema = Yup.object({
    contactName: Yup.string().required("Required"),
    salutation: Yup.string().required('Required'),
    phone: Yup.string().required("Required"),
    email: Yup.string().email('Invalid email format'),
    leadSrc: Yup.string().required("Required"),
    assignedTo: Yup.string().required("Required")
});

async function storeContact(contact){
    const {data: res} = await axios.post(SERVER_URL, contact);
    return res;
}

async function getListOfContacts(){
    const {data: res} = await axios.post(`${SERVER_URL}/list`);
    return (res?.data?.contacts || []);
}

async function getContactById(contactId){
    const {data: res} = await axios.get(`${SERVER_URL}/${contactId}`);
    return (res?.data?.contact || []);
}

async function updateContact(contactId, newContact){
    const {data: res} = await axios.put(`${SERVER_URL}/${contactId}`, newContact);
    return res?.data;
}

async function deleteContact(contactId){
    const {data: res} = await axios.delete(`${SERVER_URL}/${contactId}`);
    return res?.data;
}

async function findContacts(key, value){
    const {data : res} = await axios.post(`${SERVER_URL}/search`, {key: key, value: value});
    return (res?.data?.contacts || []);
}

export {
    leadSources, 
    salutations, 
    validationSchema,
    storeContact,
    getListOfContacts,
    getContactById,
    updateContact,
    deleteContact,
    findContacts
}