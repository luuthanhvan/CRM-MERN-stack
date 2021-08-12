import { React, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { NavLink } from 'react-router-dom';
import * as ContactService from '../../services/ContactServices';

function Contact() {
    const displayCols = ['Name', 'Salutation', 'Lead source', 'Assigned to', 'Created time', 'Updated time'];
    
    const [contacts, setContacts] = useState(null);

    useEffect(() => {
        ContactService.getListOfContacts().then(res => {
            setContacts(res['data']);
        });
    }, []);
    
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
                        {ContactService.leadSources.map((item) => <option key={Math.random()}>{item.value}</option>)}
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
                            <th scope="col">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""/>
                                </div>
                            </th>
                            {displayCols.map(item => <th scope="col" key={Math.random()}>{item}</th>)}
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {!contacts ? <tr><td className="no-data" colSpan="8">No data</td></tr> : 
                            contacts.map((value) =>
                                <tr key={Math.random()}>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""/>
                                        </div>
                                    </td>
                                    <td>{value.contactName}</td>
                                    <td>{value.salutation}</td>
                                    <td>{value.leadSrc}</td>
                                    <td>{value.assignedTo}</td>
                                    <td>{value.createdTime}</td>
                                    <td>{value.updatedTime}</td>
                                    <td>
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li>
                                                    <NavLink to={{pathname: '/contact/edit', state: value._id}} style={{ textDecoration: 'none' }}>
                                                        <button className="dropdown-item">Modify</button>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <button 
                                                        className="dropdown-item" 
                                                        onClick={() => { ContactService.deleteContact(value._id).then(res => console.log(res)) }}
                                                    >
                                                        Delete
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </td> 
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Contact;