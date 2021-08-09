import React from 'react';
import DateView from 'react-datepicker';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import 'react-datepicker/dist/react-datepicker.css';

function DatePicker({label, name, ...rest}){
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <Field className="form-control" name={name}>
                {({ form, field }) => {
                    const { setFieldValue } = form;
                    const { value } = field;
                    return(
                        <DateView 
                            id={name}
                            {...field}
                            {...rest}
                            selected={value}
                            onChange={val => setFieldValue(name, val)}
                        />
                    )
                }}
            </Field>
            <ErrorMessage component={TextError} name={name}/>
        </div>
    );
}

export default DatePicker;