import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SalesOrderForm from './SalesOrderForm';
import { storeSalesOrder, status, validationSchema } from '../../services/SalesOrderService';
import { getListOfContacts } from '../../services/ContactService';
import { getListOfUsers } from '../../services/UserService';

function CreateSalesOrder() {
    const history = useHistory();
    const [assignedTo, setAssignedTo] = useState([]);
    const [contactName, setContactName] = useState([]);

    useEffect(() => {
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
    const onSubmit = (salesOrder) => {
        storeSalesOrder(salesOrder).then(() => { history.push("/sales_order") })
    }

    return(
        <div>
            <SalesOrderForm 
                salesOrder={null}
                title="Create new sales order"
                onSubmit={onSubmit}
                isEditForm={false}
                assignedTo={assignedTo}
                contactName={contactName}
                status={status}
                validationSchema={validationSchema}
            />
        </div>
    )
}

export default CreateSalesOrder;