import {NavLink} from 'react-router-dom';

const displayCols = ['Name', 'Email', 'Phone', 'Admin', 'Active', 'Created time'];

function Table(props){
    const { users } = props;

    return(
        <div className='content'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        {displayCols.map((item, index) => <th scope="col" key={index}>{item}</th>)}
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {(!users || users.length === 0) ? <tr><td className="no-data" colSpan="9">No data</td></tr> : 
                        users.map((value, index) => {
                            return(
                                <tr key={index}>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""/>
                                        </div>
                                    </td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.phone}</td>
                                    <td>{value.isAdmin ? 'Admin' : 'User'}</td>
                                    <td>{value.isActive ? 'Enabled' : 'Disabled'}</td>
                                    <td>{value.createdTime}</td>
                                    <td>
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li>
                                                    <NavLink to={{pathname: '/user_management/edit', state: value._id}} style={{ textDecoration: 'none' }}>
                                                        <button className="dropdown-item">Modify</button>
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            )
                       })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;