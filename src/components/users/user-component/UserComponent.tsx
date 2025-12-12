import type {FC} from "react";
import type {UserType} from "../../../models/user/UserModel.ts";

type Props = { user: UserType };
export const UserComponent: FC<Props> = ({user}) => {
    return (
        <li>
            {user.id} - {user.email}
        </li>
    );
};