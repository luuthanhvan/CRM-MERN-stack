import Menu from '../filters/Menu';
import SearchBar from '../filters/SearchBar';
import DateRange from '../filters/DateRange';

function Filter(props){
    const { data, onApply } = props;
    return (
        <div className='row'>
            <div className='col'>
                <Menu 
                    labelName="Lead source"
                    className="form-select form-select-sm"
                    name="leadSrc"
                    data={data.leadSources}
                    onChange={onApply}
                />
            </div>

            <div className='col'>
                <Menu 
                    labelName="Assigned to"
                    className="form-select form-select-sm"
                    name="assignedTo"
                    data={data.assignedTo}
                    onChange={onApply}
                />
            </div>

            <div className='col'>
                <DateRange
                    labelName="Created date"
                    type="text" 
                    className="form-control"
                    name="createdTime"
                    onSelectDate={onApply}
                />
            </div>

            <div className='col'>
                <DateRange
                    labelName="Updated date"
                    type="text" 
                    className="form-control"
                    name="updatedTime"
                    onSelectDate={onApply}
                />
            </div>

            <div className='col'>
                <SearchBar 
                    labelName="Keyword filter"
                    className="form-control search-text"
                    placeholder='Enter text...'
                    name="contactName"
                    onChange={onApply}
                />
            </div>
        </div>
    );
}

export default Filter;