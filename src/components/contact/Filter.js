import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt, faRedo } from '@fortawesome/free-solid-svg-icons';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { NavLink } from 'react-router-dom';

const leadSources = [
    { key: 'Existing Customer', value: 'Existing Customer' },
    { key: 'Partner', value: 'Partner' },
    { key: 'Conference', value: 'Conference' },
    { key: 'Website', value: 'Website' },
    { key: 'Word of mouth', value: 'Word of mouth' },
    { key: 'Other', value: 'Other' },
];

function Filter({applyFilter, reset}){
    return(
        <div className='row content-header'>
            <div className='col title'>
                <span>Contact</span>
            </div>
            
            <div className='col filter'>
                <span>Lead source</span>
                <select className="form-select form-select-sm" name="leadSrc" onChange={applyFilter}>
                    <option>Choose Lead source</option>
                    {leadSources.map((item) => <option key={item.key}>{item.value}</option>)}
                </select>
            </div>

            <div className='col filter'>
                <span>Assigned to</span>
                <select className="form-select form-select-sm">
                    {/* <option>Assigned to</option> */}
                </select>
            </div>

            <div className='col filter'>
                <span>Created date</span>
                <DateRangePicker>
                    <input type="text" className="form-control"/>
                </DateRangePicker>
            </div>

            <div className='col filter'>
                <span>Updated date</span>
                <DateRangePicker>
                    <input type="text" className="form-control" />
                </DateRangePicker>
            </div>

            <div className='col filter'>
                <span>Keyword filter</span>
                <input type="text" className="form-control search-text" placeholder='Enter text...'/>
            </div>

            <div className='col-3'>
                <div className="row btn-row">
                    <NavLink to='/contact/create' className="col-2">
                        <button><FontAwesomeIcon className='icon' icon={faPlus}/></button>
                    </NavLink>
                    <button className="col-2" onClick={reset}><FontAwesomeIcon className='icon' icon={faRedo}/></button>
                    <button className="col-2"><FontAwesomeIcon className='icon' icon={faTrashAlt}/></button>
                </div>
            </div>
        </div>
    );
}

export default Filter;