import { useEffect, useRef } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

function DateRange(props){
    const { labelName, onSelectDate, value = {}, ...rest } = props;
    const pickerRef = useRef();
    
    useEffect(() => {
        if(pickerRef.current){
            pickerRef.current.setStartDate(value.startDate || new Date());
        }
    }, [value.startDate, pickerRef.current]);
    
    useEffect(() => {
        if(pickerRef.current){
            pickerRef.current.setEndDate(value.endDate || new Date());
        }
    }, [value.endDate, pickerRef.current]);

    return(
        <div>
            <span>{labelName}</span>
            <DateRangePicker onApply={onSelectDate}>
                <input  {...rest} />
            </DateRangePicker>
        </div>
    );
}

export default DateRange;