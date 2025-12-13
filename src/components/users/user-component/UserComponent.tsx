import type {FC} from "react";
import type {IUser} from "../../../models/user/UserModel.ts";
import {Link} from "react-router-dom";

type Props = { user: IUser };
export const UserComponent: FC<Props> = ({user}) => {
    return (
        <li className={'border my-2'}>
            <Link to={'details'} state={user.id}>
                {user.id} - {user.username}
            </Link>

        </li>
    );
};