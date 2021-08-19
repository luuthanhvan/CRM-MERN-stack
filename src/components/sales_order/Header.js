import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRedo, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Menu from '../filters/Menu';
import SearchBar from '../filters/SearchBar';
import DateRange from '../filters/DateRange';

function Header(props) {
    const {status, assignedTo, applyFilter, reset, deleteMultiple} = props;

    return (
        <div className='row content-header'>
            <div className='col-2 title'>
                <span>Sales order</span>
            </div>
    
            <div className='col filter'>
                <Menu 
                    labelName="Status"
                    className="form-select form-select-sm"
                    name="status"
                    data={status}
                    onChange={applyFilter}
                />
            </div>

            <div className='col filter'>
                <span>Assigned to</span>
                <select className="form-select form-select-sm">
                    {/* <option>Assigned to</option> */}
                </select>
            </div>

            <div className='col filter'>
                <DateRange
                    labelName="Created date"
                    type="text" 
                    className="form-control"
                />
            </div>

            <div className='col filter'>
                <DateRange
                    labelName="Updated date"
                    type="text" 
                    className="form-control"
                />
            </div>

            <div className='col filter'>
                <SearchBar 
                    labelName="Keyword filter"
                    className="form-control search-text"
                    placeholder='Enter text...'
                />
            </div>

            <div className='col-3'>
                <div className="row btn-row">
                    <NavLink to='/sales_order/create' className="col-2">
                        <button><FontAwesomeIcon className='icon' icon={faPlus}/></button>
                    </NavLink>
                    <button className="col-2" onClick={reset}><FontAwesomeIcon className='icon' icon={faRedo}/></button>
                    <button className="col-2"><FontAwesomeIcon className='icon' icon={faTrashAlt}/></button>
                </div>
                
            </div>
        </div>
    );
}

export default Header;