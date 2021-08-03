import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './Home.scss';

function NavBar() {
    return(
        <div className='navbar-containter'>
            <div className='icon'><FontAwesomeIcon icon={faCog}/></div>
        </div>
    );
}

export default NavBar;