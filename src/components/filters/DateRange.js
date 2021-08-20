import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

function DateRange(props){
    const { labelName, onSelectDate, ...rest } = props;
    return(
        <div>
            <span>{labelName}</span>
            <DateRangePicker onEvent={onSelectDate}>
                <input  {...rest} />
            </DateRangePicker>
        </div>
    );
}

export default DateRange;