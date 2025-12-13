import type {FC} from "react";
import type IUser from "../../../models/user/UserModel.ts";

type Props = { user: IUser };
export const UserComponent:FC<Props> = ({user: {id, firstName, lastName}}) => {
    return (
        <li>
            {id} - {firstName} - {lastName}
        </li>
    );
};