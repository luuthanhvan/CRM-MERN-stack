import axios from 'axios';
import * as Yup from 'yup';

const SERVER_URL = "http://localhost:5000/sales_order";
const status = [
    { key: 'Created', value: 'Created' },
    { key: 'Approved', value: 'Approved' },
    { key: 'Delivered', value: 'Delivered' },
    { key: 'Cancel', value: 'Cancel' },
];
const validationSchema = Yup.object({
    subject: Yup.string().required("Required"),
    contactName: Yup.string().required("Required"),
    status: Yup.string().required('Required'),
    total: Yup.string().required("Required"),
    assignedTo: Yup.string().required("Required")
});

async function storeSalesOrder(salesOrder){
    const {data: res} = await axios.post(SERVER_URL, salesOrder);
    return res;
}

async function getListOfSalesOrders(){
    const {data: res} = await axios.post(`${SERVER_URL}/list`);
    return (res?.data?.salesOrders || []);
}

async function getSalesOrderById(salesOrderId){
    const {data: res} = await axios.get(`${SERVER_URL}/${salesOrderId}`);
    return (res?.data?.salesOrder || []);
}

async function updateSalesOrder(salesOrderId, newSalesOrder){
    const {data: res} = await axios.put(`${SERVER_URL}/${salesOrderId}`, newSalesOrder);
    return res?.data;
}

async function deleteSalesOrder(salesOrderId){
    const {data: res} = await axios.delete(`${SERVER_URL}/${salesOrderId}`);
    return res?.data;
}

async function findSalesOrders(key, value){
    const {data : res} = await axios.post(`${SERVER_URL}/search`, {key: key, value: value});
    return (res?.data?.salesOrders || []);
}

export {
    status,
    validationSchema,
    storeSalesOrder,
    getListOfSalesOrders,
    getSalesOrderById,
    updateSalesOrder,
    deleteSalesOrder,
    findSalesOrders
}