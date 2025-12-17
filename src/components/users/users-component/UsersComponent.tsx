import {useAppSelector} from "../../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.ts";
import {loadUsers} from "../../../redux/slices/userSlice/userSliceActions.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {
    const {users} = useAppSelector(state => state.userSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(loadUsers())
    }, [])
    return (
        <div>
            <h3>Users component</h3>
            {users&&users.map((user) => (<UserComponent key={user.id} user={user} />))}
        </div>
    );
};