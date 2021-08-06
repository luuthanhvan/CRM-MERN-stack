import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import $ from 'jquery';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import {NavLink} from 'react-router-dom';

function Contact() {
    const leadSources = ['Existing Customer', 'Partner', 'Conference', 'Website', 'Word of mouth', 'Other'];
    const displayCols = ['Name', 'Salutation', 'Lead source', 'Assigned to', 'Created time', 'Updated time'];

    return(
        <div>
            <div className='row content-header'>
                <div className='col-md-2 title'>
                    <span>Contact</span>
                </div>
     
                <div className='col filter'>
                    <span>Lead source</span>
                    <select className="form-select form-select-sm">
                        {/* <option>Lead source</option> */}
                        {/* array iteration */}
                        {/* Warning: Each child in a list should have a unique "key" prop. */}
                        {/* Fix: add key prop in option tag */}
                        {leadSources.map((item) => <option key={Math.random()}>{item}</option>)}
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

            <div className='content'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            {displayCols.map(item => <th scope="col" key={Math.random()}>{item}</th>)}
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""/>
                                </div>
                            </td>
                            <td>Luu Thanh Van</td>
                            <td>Mrs</td>
                            <td>Other</td>
                            <td>Thanh Van</td>
                            <td>05/08/2021</td>
                            <td>05/08/2021</td>
                            <td>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <NavLink to='/contact/edit' style={{ textDecoration: 'none' }}>
                                                <button className="dropdown-item">Modify</button>
                                            </NavLink>
                                        </li>
                                        <li><button className="dropdown-item">Delete</button></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Contact;