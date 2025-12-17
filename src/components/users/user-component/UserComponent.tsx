import type {FC} from "react";
import type {IUser} from "../../../models/user/IUser.ts";

type Props = { user: IUser };
export const UserComponent:FC<Props> = ({user}) => {
    return (
        <li>
            User {user.id} - {user.name}
        </li>
    );
};