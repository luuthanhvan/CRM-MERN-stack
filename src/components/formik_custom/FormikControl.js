import React from 'react';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';
import DatePicker from './DatePicker';

function FormikControl({ control, ...rest }){
    // const { control, ...rest } = props;
    switch(control){
        case 'input':
            return <Input {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'date':
            return <DatePicker {...rest}/>
        default:
            return null;
    }
}

export default FormikControl;