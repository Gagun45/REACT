import {useEffect, useState} from "react";
import type {IUser} from "../../../models/IUser.ts";
import {useSearchParams} from "react-router-dom";
import {getUsers} from "../../../service/api.service.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {PaginationComponent} from "../../pagination/PaginationComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [query] = useSearchParams()
    const skip = query.get('skip') ?? '0'
    useEffect(() => {
        const fetchData = async () => {
            const allUsers = await getUsers(skip)
            setUsers(allUsers)
        }
        fetchData()
    }, [skip])
    return (
        <>
            <h3>Users component</h3>
            <ul className="border">
                {users.map((user) => (<UserComponent key={user.id} user={user}/>))}
            </ul>
            <PaginationComponent/>
        </>
    );
};