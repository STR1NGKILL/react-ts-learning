import React, {FC} from 'react';
import {IUser} from "../../types/types";
import UserItem from "./UserItem";
import {useNavigate} from "react-router-dom";

interface UserListProps {
    users: IUser[],
}

const UserList: FC<UserListProps> = ({users}) => {
    const history = useNavigate()

    return (
        <div style={{marginTop: '1rem'}}>
            <h2>Список пользователей</h2>
            {users.map(user =>
                <UserItem key={user.id} user={user} onClick={(user) => history('/users/' + user.id)}/>
            )}
        </div>
    );
};

export default UserList;