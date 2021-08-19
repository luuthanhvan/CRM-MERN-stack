import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt, faRedo } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Menu from '../filters/Menu';
import SearchBar from '../filters/SearchBar';
import DateRange from '../filters/DateRange';

function Filter(props){
    const {leadSources, assignedTo, applyFilter, reset, deleteMultiple} = props;

    return(
        <div className='row content-header'>
            <div className='col-1 title'>
                <span>Contact</span>
            </div>
            
            <div className='col-6 filter'>
                <div className='row'>
                    <div className='col'>
                        <Menu 
                            labelName="Lead source"
                            className="form-select form-select-sm"
                            name="leadSrc"
                            data={leadSources}
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
                </div>
            </div>

            <div className='col-2 search-bar'>
                <div className='col filter'>
                    <SearchBar 
                        labelName="Keyword filter"
                        className="form-control search-text"
                        placeholder='Enter text...'
                    />
                </div>
            </div>

            <div className='col-2 action-buttons'>
                <div className="row btn-row">
                    <NavLink to='/contact/create' className="col-3">
                        <button><FontAwesomeIcon className='icon' icon={faPlus}/></button>
                    </NavLink>
                    <button className="col-3" onClick={reset}><FontAwesomeIcon className='icon' icon={faRedo}/></button>
                    <button className="col-3" onClick={deleteMultiple}><FontAwesomeIcon className='icon' icon={faTrashAlt}/></button>
                </div>
            </div>
        </div>
    );
}

export default Filter;