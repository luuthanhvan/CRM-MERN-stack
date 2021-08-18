import { React,useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import SalesOrderForm from './SalesOrderForm';
import { getSalesOrderById, updateSalesOrder, status, validationSchema } from '../../services/SalesOrderService';

// temp data
const assignedTo = [
    { key: 'Luu Thanh Van', value: 'Luu Thanh Van' },
    { key: 'Thanh Van', value: 'Thanh Van' },
];

function EditSalesOrder() {
    const history = useHistory();
    const location = useLocation();
    let salesOrderId = location.state;
    const [salesOrder, setSalesOrder] = useState(null);
    const [createdTime, setCreatedTime] = useState(null); // keep the created time
    
    useEffect(() => {
        getSalesOrderById(salesOrderId).then(salesOrder => {
            setSalesOrder(salesOrder);
            setCreatedTime(salesOrder.createdTime);
        });
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
                status={status}
                validationSchema={validationSchema}
            />
        </div>
    )
}

export default EditSalesOrder;