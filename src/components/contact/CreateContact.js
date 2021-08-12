import { React, useState } from 'react';
import { Formik, Form, } from 'formik';
import FormControl from '../formik_custom/FormikControl';
import * as ContactService from '../../services/ContactServices';
import { NavLink, Redirect } from 'react-router-dom';

function CreateContact() {
    // temp data
    const assignedTo = [
        { key: 'Luu Thanh Van', value: 'Luu Thanh Van' },
        { key: 'Thanh Van', value: 'Thanh Van' },
    ];

    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (values) => {
        ContactService.storeContact(values).then(res => {
            if(res.status === 1){
                setSubmitted(true);
            }
        });
    };

    return(
        <div>
            { submitted ? <div><Redirect to='/contact' /></div> : <div>
                <div className='row content-header'>
                    <div className='title'>
                        <span>Create new contact</span>
                    </div>
                </div>
                <Formik 
                    initialValues={ContactService.initContact(null)}
                    validationSchema={ContactService.validationSchema}
                    onSubmit={onSubmit}
                >
                    {formik => { return (
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
                                            options={ContactService.salutations}
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
                                            options={ContactService.leadSources}
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
                                    <button className='btn col-md-4' type="submit" disabled={!(formik.isValid && formik.dirty)}>Create</button>
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

export default CreateContact;