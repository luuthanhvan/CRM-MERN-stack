import axios from 'axios';
import * as Yup from 'yup';

const SERVER_URL = "http://localhost:5000/users";

const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    username: Yup.string().required('Required'),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().required("Required"),
    email: Yup.string().email('Invalid email format'),
    phone: Yup.string().required("Required"),
});

async function storeUser(user){
    const {data: res} = await axios.post(SERVER_URL, user);
    return res;
}

async function getListOfUsers(){
    const {data: res} = await axios.post(`${SERVER_URL}/list`);
    return (res?.data?.users || []);
}

async function getUserById(userId){
    const {data: res} = await axios.get(`${SERVER_URL}/${userId}`);
    return (res?.data?.user || []);
}

async function updateUser(userId, newUser){
    const {data: res} = await axios.put(`${SERVER_URL}/${userId}`, newUser);
    return res?.data;
}

async function findUsers(key, value){
    const {data : res} = await axios.post(`${SERVER_URL}/search`, {key: key, value: value});
    return (res?.data?.users || []);
}

export {
    validationSchema,
    storeUser,
    getListOfUsers,
    getUserById,
    updateUser,
    findUsers
}