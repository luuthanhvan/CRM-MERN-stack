import { React, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Form, } from 'formik';
import FormControl from '../formik_custom/FormikControl';

function ContactForm(props){
    const {contact, title, onSubmit, isEditForm, assignedTo, leadSources, salutations, validationSchema} = props;
        
    const initialValues = useMemo(() => ({
        contactName: contact ? contact.contactName : '',
        salutation: contact ? contact.salutation : '',
        phone: contact ? contact.phone : '',
        email: contact ? contact.email : '',
        organization: contact ? contact.organization : '',
        leadSrc: contact ? contact.leadSrc : '',
        assignedTo: contact ? contact.assignedTo : '',
        dob: contact ? new Date(contact.dob) : undefined,
        address: contact ? contact.address : '',
        description: contact ? contact.description : ''
    }), [contact]);
    
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
                                <button 
                                    className='btn col-md-4' 
                                    type="submit" 
                                    disabled={isEditForm ? !formik.isValid : !(formik.isValid && formik.dirty)}
                                >
                                    {isEditForm ? "Save" : "Create"}
                                </button>
                                <NavLink to='/contact' className='btn col-md-4'>Back</NavLink>
                            </div>
                        </Form>
                    </div>
                )}}
            </Formik>
        </div>
    )
}

export default ContactForm;