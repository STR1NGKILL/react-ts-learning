import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../types/types";
import axios from "axios";
import List from "../List";
import UserItem from "./UserItem";
import UserList from "./UserList";
import {useNavigate} from "react-router-dom";

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const history = useNavigate()

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <UserList users={users}/>
            <List
                listName='Пользователи'
                items={users}
                renderItem={(user: IUser) =>
                    <UserItem
                        key={user.id}
                        user={user}
                        onClick={(user) => history('/users/' + user.id)}
                    />}
            />
        </div>
    );
};

export default UsersPage;