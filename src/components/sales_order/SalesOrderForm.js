import { React, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Form, } from 'formik';
import FormControl from '../formik_custom/FormikControl';

function SalesOrderForm(props){
    const {salesOrder, title, onSubmit, isEditForm, assignedTo, status, validationSchema} = props;
        
    const initialValues = useMemo(() => ({
        subject: salesOrder ? salesOrder.subject : '',
        contactName: salesOrder ? salesOrder.contactName : '',
        status: salesOrder ? salesOrder.status : '',
        total: salesOrder ? salesOrder.total : '',
        assignedTo: salesOrder ? salesOrder.assignedTo : '',
        description: salesOrder ? salesOrder.description : ''
    }), [salesOrder]);
    
    return(
        <div>
            <div className='row content-header'>
                <div className='title'>
                    <span>{title}</span>
                </div>
            </div>
            <Formik
                enableReinitialize={isEditForm ? true : false} 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {formik => { return (
                    <div className='form-container'>
                        <Form>
                            <div className="row">
                                <div className="col-md-4">
                                    <FormControl
                                        control='input'
                                        label='Subject'
                                        name='subject'
                                    />
                                </div>
                                <div className="col-md-4">
                                    <FormControl
                                        control='input'
                                        label='Name'
                                        name='contactName'
                                    />
                                </div>
                                <div className="col-md-4">
                                    <FormControl
                                        control='select'
                                        label='Status'
                                        name='status'
                                        options={status}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <FormControl
                                        control='input'
                                        label='Total'
                                        name='total'
                                    />
                                </div>
                                <div className="col-md-4">
                                    <FormControl
                                        control='select'
                                        label='Assigned to'
                                        name='assignedTo'
                                        options={assignedTo}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <FormControl
                                        control='textarea'
                                        label='Description'
                                        name='description'
                                    />
                                </div>
                            </div>

                            <div className="row btn-row">
                                <button className='btn col-md-4' type="submit" disabled={!(formik.isValid && formik.dirty)}>
                                    {isEditForm ? "Save" : "Create"}
                                </button>
                                <NavLink to='/sales_order' className='btn col-md-4'>Back</NavLink>
                            </div>
                        </Form>
                    </div>
                )}}
            </Formik>
        </div>
    )
}

export default SalesOrderForm;