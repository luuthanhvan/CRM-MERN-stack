import { React } from 'react';
import { useHistory } from 'react-router-dom';
import SalesOrderForm from './SalesOrderForm';
import { storeSalesOrder, status, validationSchema } from '../../services/SalesOrderService';

// temp data
const assignedTo = [
    { key: 'Luu Thanh Van', value: 'Luu Thanh Van' },
    { key: 'Thanh Van', value: 'Thanh Van' },
];

function CreateSalesOrder() {
    const history = useHistory();
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
                status={status}
                validationSchema={validationSchema}
            />
        </div>
    )
}

export default CreateSalesOrder;