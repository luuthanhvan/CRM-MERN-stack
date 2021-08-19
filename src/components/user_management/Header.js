import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRedo } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Header(props){
    return(
        <div className='row content-header'>
            <div className='col-md-8 title'>
                <span>User management</span>
            </div>

            <div className='col-md-3 action-buttons'>
                <div className="row btn-row">
                    <NavLink to='/user_management/create' className="col-2">
                        <button><FontAwesomeIcon className='icon' icon={faPlus}/></button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;