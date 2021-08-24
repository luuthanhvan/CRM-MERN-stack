import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt, faRedo } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function ButtonBar(props){
    const { onReset, onMassDelete } = props;
    return(
        <div className="row btn-row">
            <NavLink to='/sales_order/create' className="col-3">
                <button><FontAwesomeIcon className='icon' icon={faPlus}/></button>
            </NavLink>
            <button className="col-3" onClick={onReset}><FontAwesomeIcon className='icon' icon={faRedo}/></button>
            <button className="col-3" onClick={onMassDelete}><FontAwesomeIcon className='icon' icon={faTrashAlt}/></button>
        </div>
    );
}

export default ButtonBar;