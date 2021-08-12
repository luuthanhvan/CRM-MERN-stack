import { React, useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import FormControl from '../formik_custom/FormikControl';
import { initContact, salutations, leadSources, validationSchema} from '../../services/ContactServices';
import { NavLink, Redirect, useLocation } from 'react-router-dom';
import * as ContactService from '../../services/ContactServices';

function EditContact() {
    const assignedTo = [
        { key: 'Luu Thanh Van', value: 'Luu Thanh Van' },
        { key: 'Thanh Van', value: 'Thanh Van' },
    ];

    const location = useLocation();
    let contactId = location.state;
    const [contact, setContact] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [createdTime, setCreatedTime] = useState(null); // keep the created time

    useEffect(() => {
        ContactService.getContactById(contactId).then((res) => {
            setContact(res['data']);
            setCreatedTime(res['data'].createdTime);
        });
    }, []);

    const onSubmit = (values) => {
        values.createdTime = createdTime;
        values.updatedTime = new Date();

        ContactService.updateContact(contactId, values).then(res => {
            if(res.status === 1){
                setSubmitted(true);
            }
        })
    };

    return(
        <div>
            { submitted ? <div><Redirect to='/contact' /></div> : <div>
                <div className='row content-header'>
                    <div className='title'>
                        <span>Edit the contact</span>
                    </div>
                </div>
                <Formik 
                    enableReinitialize={true}
                    initialValues={initContact(contact)}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {formik => { console.log(formik); return (
                        <div className='form-container'>
                            <Form>
                                <div className="row">
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
                                            label='Salutation'
                                            name='salutation'
                                            options={salutations}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <FormControl
                                            control='input'
                                            label='Phone'
                                            name='phone'
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <FormControl
                                            control='input'
                                            label='Email'
                                            name='email'
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <FormControl
                                            control='input'
                                            label='Organization'
                                            name='organization'
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <FormControl
                                            control='select'
                                            label='Lead source'
                                            name='leadSrc'
                                            options={leadSources}
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <FormControl
                                            control='select'
                                            label='Assigned to'
                                            name='assignedTo'
                                            options={assignedTo}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <FormControl
                                            control='date'
                                            label='Date of birth'
                                            name='dob'
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <FormControl
                                            control='input'
                                            label='Address'
                                            name='address'
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
                                    <button className='btn col-md-4' type="submit" disabled={!formik.isValid}>Save</button>
                                    <NavLink to='/contact' className='btn col-md-4'>Back</NavLink>
                                </div>
                            </Form>
                        </div>
                    )}}
                </Formik> 
            </div> }
        </div>
    )
}

export default EditContact;