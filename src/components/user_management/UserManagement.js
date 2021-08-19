import { React, useState, useEffect } from 'react';
import { getListOfUsers, findUsers } from '../../services/UserService';
import Header from './Header';
import Table from './Table';

function UserManagement(){
    const [users, setUser] = useState(null);
    useEffect(() => {
        getListOfUsers().then(users => { setUser(users) });
    }, []);

    return(
        <div>
            <Header />
            <Table 
                users={users}
            />
        </div>
    )
}

export default UserManagement;