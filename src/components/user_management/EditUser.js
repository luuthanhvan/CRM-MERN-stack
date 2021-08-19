import { React, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import UserForm from './UserForm';
import { getUserById, updateUser, validationSchema } from '../../services/UserService';

function EditUser() {
    const history = useHistory();
    const location = useLocation();
    let userId = location.state;
    const [user, setUser] = useState(null);
    const [createdTime, setCreatedTime] = useState(null); // keep the created time
    
    useEffect(() => {
        getUserById(userId).then(user => {
            setUser(user);
            setCreatedTime(user.createdTime);
        });
    }, []);

    const onSubmit = (newUser) => {
        newUser.createdTime = createdTime;
        updateUser(userId, newUser).then(() => history.push("/user_management"));
    };
    return(
        <div>
            <UserForm 
                user={user}
                title="Edit the user"
                onSubmit={onSubmit}
                isEditForm={true}
                validationSchema={validationSchema}
            />
        </div>
    )
}

export default EditUser;