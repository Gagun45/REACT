import type {FC} from "react";
import type {IUser} from "../../../models/user/UserModel.ts";

type Props = { user: IUser };
export const UserComponent:FC<Props> = ({user}) => {
    return (
        <li className={'border my-2'}>
            {user.id} - {user.username}
        </li>
    );
};