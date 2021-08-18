import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRedo, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { NavLink } from 'react-router-dom';

function Filter(props) {
    const {status, applyFilter, reset} = props;

    return (
        <div className='row content-header'>
            <div className='col-2 title'>
                <span>Sales order</span>
            </div>
    
            <div className='col filter'>
                <span>Status</span>
                <select className="form-select form-select-sm" name="status" onChange={applyFilter}>
                    {status.map((item) => <option key={item.key}>{item.value}</option>)}
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

export default Filter;