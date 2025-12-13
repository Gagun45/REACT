import {useEffect, useState} from "react";
import type {IUser} from "../../../models/user/UserModel.ts";
import {apiService} from "../../../service/api.service.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const allUsers = await apiService.getUsers()
            setUsers(allUsers)
        }
        fetchData()
    },[])
    return (
        <ul>
            {users.map((user) => (<UserComponent key={user.id} user={user}/>))}
        </ul>
    );
};