import React from 'react';
import TextError from './TextError';
import { Field, ErrorMessage } from 'formik';
 
function Textarea({label, name, ...rest}){
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <Field className="form-control" as='textarea' id={name} name={name} {...rest} />
            <ErrorMessage component={TextError} name={name}/>
        </div>
    );
}

export default Textarea;