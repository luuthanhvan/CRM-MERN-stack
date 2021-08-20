import { React, useState, useEffect } from 'react';
import { status, getListOfSalesOrders, deleteSalesOrder, multipleDelete, findSalesOrders, findSalesOrdersByDate } from '../../services/SalesOrderService';
import { getListOfUsers } from '../../services/UserService';
import { dateFormat } from '../../services/DatetimeService';
import Header from './Header';
import Table from './Table';

function SalesOrder(){
    const [salesOrders, setSalesOrder] = useState(null);
    const [assignedTo, setAssignedTo] = useState([]);
    const [reload, setReload] = useState(false);
    let salesOrderIds = [];

    useEffect(() => {
        getListOfSalesOrders().then(salesOrders => { setSalesOrder(salesOrders) });
        getListOfUsers().then(users => {
            let names = users.map(user => {
                return { key: user.name, value: user.name };
            });
            setAssignedTo(names);
        });
    }, []);

    const onDelete = (event) => {
        const salesOrderId = event.target.value;
        deleteSalesOrder(salesOrderId).then(() => {
            getListOfSalesOrders().then(salesOrders => { setSalesOrder(salesOrders) });
        });
    }

    const reset = () => {
        getListOfSalesOrders().then(salesOrders => { setSalesOrder(salesOrders) });
        setReload(!reload); // set the reload to re-render the header component
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

    const applyDateFilter = (event, picker) => {
        let filterKey = event.target.name,
            from = dateFormat(picker.startDate),
            to = dateFormat(picker.endDate);
        try{
            findSalesOrdersByDate(filterKey, from, to).then(salesOrders => { setSalesOrder(salesOrders) });
        } catch(err){
            throw err;
        }
    }

    const onCheckboxChecked = (event) => {
        if(event.target.checked)
            salesOrderIds.push(event.target.value);
        else{
            salesOrderIds.splice(salesOrderIds.indexOf(event.target.value), 1);
        }
    }

    const deleteMultiple = () => {
        multipleDelete(salesOrderIds).then(() => { reset() })
    }

    return(
        <div>
            <Header 
                status={status}
                assignedTo={assignedTo}
                applyFilter={applyFilter}
                applyDateFilter={applyDateFilter}
                deleteMultiple={deleteMultiple}
                reset={reset}
                reload={reload}
            />
            <Table
                salesOrders={salesOrders}
                onDelete={onDelete}
                onCheckboxChecked={onCheckboxChecked}
            />
        </div>
    )
}

export default SalesOrder;