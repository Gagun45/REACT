import {useEffect, useState} from "react";
import type {UserType} from "../../../models/user/UserModel.ts";
import {userService} from "../../../service/api.service.ts";
import {UsersListComponent} from "../users-list/UsersListComponent.tsx";

export const UsersDummyJsonComponent = () => {
    const [users, setUsers] = useState<UserType[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const allUsers = await userService.getUsers.dummyjson()
            setUsers(allUsers);
        }
        fetchData()
    },[])
    return (
        <div>
            <h2>users dummyjson</h2>
            <UsersListComponent users={users}/>
        </div>
    );
};