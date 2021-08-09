import React from 'react';
import TextError from './TextError';
import { Field, ErrorMessage } from 'formik';

function Select({label, name, options, ...rest}){
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <Field as="select" className="form-control" id={name} name={name} {...rest}>
                {options.map(option => {return (
                    <option key={option.value} value={option.value}>
                        {option.key}
                    </option>
                )})}
            </Field>
            <ErrorMessage component={TextError} name="name"/>
        </div>
    );
}

export default Select;