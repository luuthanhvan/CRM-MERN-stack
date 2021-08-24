import { React, useState, useEffect } from 'react';
import { status, getListOfSalesOrders, deleteSalesOrder, multipleDelete, findSalesOrders, findSalesOrdersByDate } from '../../services/SalesOrderService';
import { getListOfUsers } from '../../services/UserService';
import { dateFormat } from '../../services/DatetimeService';
import Header from '../shared/Header';
import Table from './Table';
import Filter from './Filter';
import ButtonBar from './ButtonBar';
import ConfirmationDialog from '../shared/ConfirmationDialog';
import { Modal } from 'bootstrap';
import $ from 'jquery';

const defaultFilterValues = {
    status: '',
    assignedTo: '',
    createdTime: {},
    updatedTime: {},
    contactName: ''
};

function SalesOrder(){
    const [salesOrders, setSalesOrder] = useState(null);
    const [assignedTo, setAssignedTo] = useState([]);
    const [filterValues, setFilterValues] = useState(defaultFilterValues);

    let filterOptions = {
        status : status, 
        assignedTo: assignedTo
    };
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
        let modal = new Modal($("#deleteDialog"));
        modal.show();
        $("#confirmBtn").on('click', function(){
            deleteSalesOrder(salesOrderId).then(() => {
                getListOfSalesOrders().then(salesOrders => { setSalesOrder(salesOrders) });
            });
            modal.hide();
        });
    }

    const reset = () => {
        getListOfSalesOrders().then(salesOrders => { setSalesOrder(salesOrders) });
        setFilterValues(defaultFilterValues);
    }

    const applyFilter = async (event, picker) => {
        let filterKey = event.target.name;
        
        try{
            if(picker){
                let from = dateFormat(picker.startDate),
                    to = dateFormat(picker.endDate);
                findSalesOrdersByDate(filterKey, from, to).then(salesOrders => { setSalesOrder(salesOrders) });
                setFilterValues(values => ({...values, [filterKey]: {startDate: from, endDate: to}}));
            }
            else {
                let filterValue = event.target.value;
                findSalesOrders(filterKey, filterValue).then(salesOrders => { setSalesOrder(salesOrders) });
                setFilterValues(values => ({...values, [filterKey]: filterValues}));
            }
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
        let modal = new Modal($("#deleteDialog"));
        modal.show();
        $("#confirmBtn").on('click', function(){
            multipleDelete(salesOrderIds).then(() => { reset() });
            modal.hide();
        });
    }

    return(
        <div>
            <Header
                title={<span>Sales order</span>}
                filter={<Filter values={filterValues} options={filterOptions} onApply={applyFilter}/>}
                buttonBar={<ButtonBar onReset={reset} onMassDelete={deleteMultiple}/>}
            />
            <Table
                salesOrders={salesOrders}
                onDelete={onDelete}
                onCheckboxChecked={onCheckboxChecked}
            />
            <ConfirmationDialog 
                title="Confirmation"
                content="Do you want to delete the sales order?"
            />
        </div>
    )
}

export default SalesOrder;