function EditContact() {
    return(
        <div>
            <div className='row content-header'>
                <div className='title'>
                    <span>Edit the contact</span>
                </div>
            </div>
            <div className='form-container'>
                <form>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Name</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-4">
                            <label>Salutation</label>
                            <select className="form-control">
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label>Phone</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <label>Email</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-4">
                            <label>Organization</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-4">
                            <label>Lead source</label>
                            <select className="form-control">
                                <option>...</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <label>Assigned to</label>
                            <select className="form-control">
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label>Date of birth</label>
                            <input type="date" className="form-control"/>
                        </div>
                        <div className="col-md-4">
                            <label>Address</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col">
                            <label>Description</label>
                            <textarea className="form-control" rows="3"></textarea>
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

export default EditContact;