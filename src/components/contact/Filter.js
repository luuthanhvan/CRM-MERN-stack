import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { NavLink } from 'react-router-dom';

function Filter(){
    const leadSources = [
        { key: 'Existing Customer', value: 'Existing Customer' },
        { key: 'Partner', value: 'Partner' },
        { key: 'Conference', value: 'Conference' },
        { key: 'Website', value: 'Website' },
        { key: 'Word of mouth', value: 'Word of mouth' },
        { key: 'Other', value: 'Other' },
    ];
    return(
        <div className='row content-header'>
            <div className='col-md-2 title'>
                <span>Contact</span>
            </div>
            
            <div className='col filter'>
                <span>Lead source</span>
                <select className="form-select form-select-sm">
                    {leadSources.map((item) => <option key={item.key}>{item.value}</option>)}
                </select>
            </div>

            <div className='col filter'>
                <span>Assigned to</span>
                <select className="form-select form-select-sm">
                    {/* <option>Assigned to</option> */}
                </select>
            </div>

            <div className='col-md-2 filter'>
                <span>Created date</span>
                <DateRangePicker>
                    <input type="text" className="form-control"/>
                </DateRangePicker>
            </div>

            <div className='col-md-2 filter'>
                <span>Updated date</span>
                <DateRangePicker>
                    <input type="text" className="form-control" />
                </DateRangePicker>
            </div>

            <div className='col-md-2 filter'>
                <span>Keyword filter</span>
                <input type="text" className="form-control search-text" placeholder='Enter text...'/>
            </div>

            <div className='col add-btn'>
                <NavLink to='/contact/create'>
                    <button><FontAwesomeIcon className='icon' icon={faPlus}/></button>
                </NavLink>
            </div>
        </div>
    );
}

export default Filter;