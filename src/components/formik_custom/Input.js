import React from 'react';
import TextError from './TextError';
import { Field, ErrorMessage } from 'formik';
 
function Input({label, name, ...rest}){
    // const { label, name, ...rest} = props;
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <Field className="form-control" id={name} name={name} {...rest} />
            <ErrorMessage component={TextError} name={name}/>
        </div>
    );
}

export default Input;