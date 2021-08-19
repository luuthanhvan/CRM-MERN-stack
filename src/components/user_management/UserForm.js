import { React, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Form, } from 'formik';
import FormControl from '../formik_custom/FormikControl';

function UserForm(props){
    const {user, title, onSubmit, isEditForm, validationSchema} = props;
        
    const initialValues = useMemo(() => ({
        name: user ? user.name : '',
        username: user ? user.username : '',
        password: user ? user.password : '',
        confirmPassword: user ? user.confirmPassword : '',
        email: user ? user.email : '',
        phone: user ? user.phone : '',
        isAdmin: user ? user.isAdmin : false,
        isActive: user ? user.isActive : false,
    }), [user]);

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
                                        name='name'
                                    />
                                </div>
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
                                        label='Phone'
                                        name='phone'
                                    />
                                </div>
                            </div>

                            {!isEditForm ? 
                                <div className="row">
                                    <div className="col-md-4">
                                        <FormControl
                                            control='input'
                                            label='Username'
                                            name='username'
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <FormControl
                                            control='input'
                                            type="password"
                                            label='Password'
                                            name='password'
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <FormControl
                                            control='input'
                                            type="password"
                                            label='Confirm password'
                                            name='confirmPassword'
                                        />
                                    </div>
                                </div> : <div></div>
                            }

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-check form-switch">
                                        <FormControl
                                            control='checkbox'
                                            label='Admin'
                                            name='isAdmin'
                                            checked={formik.values.isAdmin}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-check form-switch">
                                        <FormControl
                                            control='checkbox'
                                            label='Active'
                                            name='isActive'
                                            checked={formik.values.isActive}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row btn-row">
                                <button className='btn col-md-4' type="submit" disabled={!(formik.isValid && formik.dirty)}>
                                    {isEditForm ? "Save" : "Create"}
                                </button>
                                <NavLink to='/user_management' className='btn col-md-4'>Back</NavLink>
                            </div>
                        </Form>
                    </div>
                )}}
            </Formik>
        </div>
    );
}

export default UserForm;