import { React, useState, useEffect } from 'react';
import { status, getListOfSalesOrders, deleteSalesOrder, findSalesOrders } from '../../services/SalesOrderService';
import Header from './Header';
import Table from './Table';

function SalesOrder(){
    const [salesOrders, setSalesOrder] = useState(null);
    useEffect(() => {
        getListOfSalesOrders().then(salesOrders => { setSalesOrder(salesOrders) });
    }, []);

    const onDelete = (event) => {
        const salesOrderId = event.target.value;
        deleteSalesOrder(salesOrderId).then(() => {
            getListOfSalesOrders().then(salesOrders => { setSalesOrder(salesOrders) });
        });
    }

    const reset = () => {
        getListOfSalesOrders().then(salesOrders => { setSalesOrder(salesOrders) });
    }

    const applyFilter = async (event) => {
        let filterKey = event.target.name,
            filterValue = event.target.value;
        
        try{
            findSalesOrders(filterKey, filterValue).then(salesOrders => { setSalesOrder(salesOrders) });
        } catch(err){
            throw err;
        }
    }

    return(
        <div>
            <Header 
                status={status}
                applyFilter={applyFilter}
                reset={reset}
            />
            <Table
                salesOrders={salesOrders}
                onDelete={onDelete}
            />
        </div>
    )
}

export default SalesOrder;