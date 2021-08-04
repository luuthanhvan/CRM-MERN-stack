import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBars, faFileInvoiceDollar, faTachometerAlt, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import './Home.scss';
import {NavLink} from 'react-router-dom';

function SideBar() {
    return(
        <div className='sidebar-container'>
            <div className='row head'>
                <span className='col-md-9'>CRM</span>
                <div className='col-md-2 icon'><FontAwesomeIcon icon={faBars}/></div>
            </div>
            
            <div className='sidebar'>
                <ul>
                    <div className='row search'>
                        <div className='col-sm-2 icon'><FontAwesomeIcon icon={faSearch}/></div>
                        <span className='col-sm-4'>Search</span>
                    </div>

                    <div className='nav-text'><span>navigation</span></div>

                    <div className='menu'>
                        <li>
                            <NavLink to='/dashboard' className='text-link'>
                                <div className='row'>
                                    <div className='col-sm-2 icon'>
                                        <FontAwesomeIcon className='col-sm-2 icon' icon={faTachometerAlt}/>
                                    </div>
                                    <span className='col-sm-4'>Dashboard</span>
                                </div>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/contacts' className='text-link'>
                                <div className='row'>
                                    <div className='col-sm-2 icon'>
                                        <FontAwesomeIcon className='col-sm-2 icon' icon={faAddressBook}/>
                                    </div>
                                    <span className='col-sm-4'>Contacts</span>
                                </div>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/sales_order' className='text-link'>
                                <div className='row'>
                                    <div className='col-sm-2 icon'>
                                        <FontAwesomeIcon className='col-md-2 icon' icon={faFileInvoiceDollar}/>
                                    </div>
                                    <span className='col-md-4'>Sales order</span>
                                </div>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/user_management' className='text-link'>
                                <div className='row'>
                                    <div className='col-sm-2 icon'>
                                        <FontAwesomeIcon className='col-sm-2 icon' icon={faUser}/>
                                    </div>
                                    <span className='col-sm-4'>User management</span>
                                </div>
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default SideBar