function EditUser() {
    return(
        <div>
            <div className='row content-header'>
                <div className='title'>
                    <span>Edit the user</span>
                </div>
            </div>
            <div className='form-container'>
                <form>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Name</label>
                            <select className="form-control">
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label>Username</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-4">
                            <label>Password</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <label>Confirm password</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-4">
                            <label>Email</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-4">
                            <label>Phone</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                <label className="form-check-label" for="flexSwitchCheckDefault">Admin</label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                <label className="form-check-label" for="flexSwitchCheckDefault">Active</label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row btn-row">
                        <button className='btn col-md-4'>Save</button>
                        <button className='btn col-md-4'>Back</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditUser;