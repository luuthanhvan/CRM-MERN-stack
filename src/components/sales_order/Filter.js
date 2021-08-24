import Menu from '../filters/Menu';
import SearchBar from '../filters/SearchBar';
import DateRange from '../filters/DateRange';

function Filter(props){
    const { values = {}, options, onApply } = props;
    return(
        <div className='row'>
            <div className='col'>
                <Menu 
                    labelName="Status"
                    className="form-select form-select-sm"
                    name="status"
                    data={options.status}
                    onChange={onApply}
                    value={values.status}
                />
            </div>

            <div className='col'>
                <Menu 
                    labelName="Assigned to"
                    className="form-select form-select-sm"
                    name="assignedTo"
                    data={options.assignedTo}
                    onChange={onApply}
                    value={values.assignedTo}
                />
            </div>

            <div className='col'>
                <DateRange
                    labelName="Created date"
                    type="text" 
                    className="form-control"
                    name="createdTime"
                    onSelectDate={onApply}
                    value={values.createdTime}
                />
            </div>

            <div className='col'>
                <DateRange
                    labelName="Updated date"
                    type="text" 
                    className="form-control"
                    name="updatedTime"
                    onSelectDate={onApply}
                    value={values.updatedTime}
                />
            </div>

            <div className='col'>
                <SearchBar 
                    labelName="Keyword filter"
                    className="form-control search-text"
                    placeholder='Enter text...'
                    name="contactName"
                    onChange={onApply}
                    value={values.contactName}
                />
            </div>
        </div>
    );
}

export default Filter;