import { NavLink } from 'react-router-dom';
import { datetimeFormat } from '../../services/DatetimeService';

const displayCols = ['Subject', 'Name', 'Status', 'Total', 'Assigned to', 'Created time', 'Updated time'];

function Table(props) {
    const { salesOrders, onDelete, onCheckboxChecked } = props;
    return(
        <div className='content'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"/>
                            </div>
                        </th>
                        {displayCols.map((item, index) => <th scope="col" key={index}>{item}</th>)}
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {(!salesOrders || salesOrders.length === 0) ? <tr><td className="no-data" colSpan="9">No data</td></tr> :
                        salesOrders.map((value, index) => 
                            <tr key={index}>
                                <td>
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox"
                                            value={value._id}
                                            onChange={onCheckboxChecked}
                                        />
                                    </div>
                                </td>
                                <td>{value.subject}</td>
                                <td>{value.contactName}</td>
                                <td>{value.status}</td>
                                <td>{value.total}</td>
                                <td>{value.assignedTo}</td>
                                <td>{datetimeFormat(value.createdTime)}</td>
                                <td>{datetimeFormat(value.updatedTime)}</td>
                                <td>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                            <NavLink to={{pathname: '/sales_order/edit', state: value._id}} style={{ textDecoration: 'none' }}>
                                                    <button className="dropdown-item">Modify</button>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <button 
                                                    className="dropdown-item"
                                                    value={value._id}
                                                    onClick={onDelete}>
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
    );
}

export default Table;