import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faPlus } from '@fortawesome/free-solid-svg-icons';

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
                    <button><FontAwesomeIcon className='col-sm-2 icon' icon={faPlus}/></button>
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
                                <button><FontAwesomeIcon className='col-sm-2 icon' icon={faEllipsisH}/></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserManagement;