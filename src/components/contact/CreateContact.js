import React from 'react';
import { Formik, Form, } from 'formik';
import * as Yup from 'yup';
import FormControl from '../formik_custom/FormikControl';

function CreateContact() {
    const salutations = [
        { key: 'None', value: 'None' },
        { key: 'Mr.', value: 'Mr.' },
        { key: 'Mrs.', value: 'Mrs.' },
        { key: 'Ms.', value: 'Ms.' },
        { key: 'Dr.', value: 'Dr.' },
        { key: 'Prof.', value: 'Prof.' },
    ];
    const leadSources = [
        { key: 'Existing Customer', value: 'Existing Customer' },
        { key: 'Partner', value: 'Partner' },
        { key: 'Conference', value: 'Conference' },
        { key: 'Website', value: 'Website' },
        { key: 'Word of mouth', value: 'Word of mouth' },
        { key: 'Other', value: 'Other' },
    ];
    const assignedTo = [
        { key: 'Luu Thanh Van', value: 'Luu Thanh Van' },
        { key: 'Thanh Van', value: 'Thanh Van' },
    ];
    const initialValues = {
        contactName: '',
        salutation: '',
        phone: '',
        email: '',
        organization: '',
        leadSrc: '',
        assignedTo: '',
        dob: '',
        address: '',
        description: ''
    };

    const validationSchema = Yup.object({
        contactName: Yup.string().required("Required"),
        salutation: Yup.string().required('Required'),
        phone: Yup.string().required("Required"),
        email: Yup.string().email('Invalid email format'),
        leadSrc: Yup.string().required("Required"),
        assignedTo: Yup.string().required("Required")
    });

    const onSubmit = values => { console.log(values) };

    return(
        <div>
            <div className='row content-header'>
                <div className='title'>
                    <span>Create new contact</span>
                </div>
            </div>
            <Formik 
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
                                <button className='btn col-md-4' type="submit" disabled={!formik.isValid}>Create</button>
                                <button className='btn col-md-4'>Back</button>
                            </div>
                        </Form>
                    </div>
                )}}
            </Formik>
        </div>
    )
}

export default CreateContact;