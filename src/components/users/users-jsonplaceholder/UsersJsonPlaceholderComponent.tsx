import {useEffect, useState} from "react";
import type {UserType} from "../../../models/user/UserModel.ts";
import {userService} from "../../../service/api.service.ts";
import {UsersListComponent} from "../users-list/UsersListComponent.tsx";

export const UsersJsonPlaceholderComponent = () => {
    const [users, setUsers] = useState<UserType[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const allUsers = await userService.getUsers.jsonplaceholder()
            setUsers(allUsers);
        }
        fetchData()
    }, [])
    return (
        <div>
            <h2>users jsonplaceholder</h2>
            <UsersListComponent users={users}/>
        </div>
    );
};