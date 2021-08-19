import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

function DateRange(props){
    const { labelName, onChange, ...rest } = props;
    return(
        <div>
            <span>{labelName}</span>
            <DateRangePicker>
                <input onChange={onChange} {...rest} />
            </DateRangePicker>
        </div>
    );
}

export default DateRange;