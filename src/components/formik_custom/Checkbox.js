import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function CheckBox({label, name, ...rest}){
    return(
        <div>
            <Field className="form-control" name={name}>
                {({ field }) => {
                    return(
                        <div>
                            <input
                                type='checkbox'
                                {...field}
                                {...rest}
                            />
                            <label htmlFor={name}>{label}</label>
                        </div>
                    )
                }}
            </Field>
            <ErrorMessage component={TextError} name={name}/>
        </div>
    );
}

export default CheckBox;