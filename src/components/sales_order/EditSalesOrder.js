import { React,useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import SalesOrderForm from './SalesOrderForm';
import { getSalesOrderById, updateSalesOrder, status, validationSchema } from '../../services/SalesOrderService';
import { getListOfContacts } from '../../services/ContactService';
import { getListOfUsers } from '../../services/UserService';

function EditSalesOrder() {
    const history = useHistory();
    const location = useLocation();
    let salesOrderId = location.state;
    const [salesOrder, setSalesOrder] = useState(null);
    const [createdTime, setCreatedTime] = useState(null); // keep the created time
    const [assignedTo, setAssignedTo] = useState([]);
    const [contactName, setContactName] = useState([]);

    useEffect(() => {
        getSalesOrderById(salesOrderId).then(salesOrder => {
            setSalesOrder(salesOrder);
            setCreatedTime(salesOrder.createdTime);
        });
        getListOfUsers().then(users => {
            let names = users.map(user => {
                return { key: user.name, value: user.name };
            });
            setAssignedTo(names);
        });
        getListOfContacts().then(contacts => {
            let contactNames = contacts.map(contact => {
                return { key: contact.contactName, value: contact.contactName };
            });
            setContactName(contactNames);
        })
    }, []);

    const onSubmit = (newSalesOrder) => {
        newSalesOrder.createdTime = createdTime;
        newSalesOrder.updatedTime = new Date();
        
        updateSalesOrder(salesOrderId, newSalesOrder).then(() => history.push("/sales_order"));
    };

    return(
        <div>
            <SalesOrderForm 
                salesOrder={salesOrder}
                title="Edit the sales order"
                onSubmit={onSubmit}
                isEditForm={true}
                assignedTo={assignedTo}
                contactName={contactName}
                status={status}
                validationSchema={validationSchema}
            />
        </div>
    )
}

export default EditSalesOrder;