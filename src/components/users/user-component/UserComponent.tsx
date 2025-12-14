import type {FC} from "react";
import type {IUser} from "../../../models/IUser.ts";

type Props = { user: IUser };
export const UserComponent:FC<Props> = ({user:{id, username}}) => {
    return (
        <li>
            {id} - {username}
        </li>
    );
};