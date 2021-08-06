import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faPlus } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';

function UserManagement() {
    const displayCols = ['Name', 'Email', 'Admin', 'Active', 'Created time'];
    
    return(
        <div>
            <div className='row content-header'>
                <div className='col-md-8 title'>
                    <span>User management</span>
                </div>
     

                <div className='col-md-2 filter'>
                    <span>Keyword filter</span>
                    <input type="text" className="form-control search-text" placeholder='Enter text...'/>
                </div>
  
                <div className='col add-btn-user'>
                    <NavLink to='/user_management/create'>
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
                            <td>van@gmail.com</td>
                            <td>Admin</td>
                            <td>Enabled</td>
                            <td>05/08/2021</td>
                            <td>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <NavLink to='/user_management/edit' style={{ textDecoration: 'none' }}>
                                                <button className="dropdown-item">Modify</button>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserManagement;