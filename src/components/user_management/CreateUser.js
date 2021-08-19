import { React } from 'react';
import { useHistory } from 'react-router-dom';
import UserForm from './UserForm';
import { validationSchema, storeUser } from '../../services/UserService';

function CreateUser() {
    const history = useHistory();
    const onSubmit = (user) => {
        storeUser(user).then(() => { history.push("/user_management") })
    }
    return(
        <div>
            <UserForm 
                user={null}
                title="Create a new user"
                onSubmit={onSubmit}
                isEditForm={false}
                validationSchema={validationSchema}
            />
        </div>
    )
}

export default CreateUser;