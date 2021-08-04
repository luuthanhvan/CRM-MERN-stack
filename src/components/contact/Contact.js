import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faPlus } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    const leadSources = ['Existing Customer', 'Partner', 'Conference', 'Website', 'Word of mouth', 'Other'];
    const displayCols = ['Name', 'Salutation', 'Lead source', 'Assigned to', 'Created time', 'Updated time'];

    return(
        <div>
            <div className='row'>
                <div className='col title'>
                    <span>Contact</span>
                </div>
     
                <div className='col filter'>
                    <select class="form-select form-select-sm">
                        <option selected>Lead source</option>
                        {/* array iteration */}
                        {leadSources.map(item => <option>{item}</option>)}
                    </select>
                </div>

                <div className='col filter'>
                    <select class="form-select form-select-sm">
                        <option selected>Assigned to</option>
                    </select>
                </div>

                <div className='col filter'>
                    {/* Created date range */}
                </div>

                <div className='col filter'>
                    {/* Updated date range */}
                </div>
  
                <div className='col'>
                    <button><FontAwesomeIcon className='col-sm-2 icon' icon={faPlus}/></button>
                </div>
            </div>

            <div class='content'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            {displayCols.map(item => <th scope="col">{item}</th>)}
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
                            <td>Mrs</td>
                            <td>Other</td>
                            <td><FontAwesomeIcon className='col-sm-2 icon' icon={faEllipsisH}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Contact;