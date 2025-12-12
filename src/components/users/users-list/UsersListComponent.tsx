import type {FC} from "react";
import type {UserType} from "../../../models/user/UserModel.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

type Props = { users: UserType[] };
export const UsersListComponent:FC<Props> = ({users}) => {
    return (
        <ul>
            {users.map((user) => (<UserComponent key={user.id} user={user} />))}
        </ul>
    );
};