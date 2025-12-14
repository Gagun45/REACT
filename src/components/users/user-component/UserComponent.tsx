import type {FC} from "react";
import type {IUser} from "../../../models/user/UserModel.ts";
import {useNavigate} from "react-router-dom";

type Props = { user: IUser };
export const UserComponent: FC<Props> = ({user}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/users/${user.id}/carts`)
    }
    return (
        <li className={'border my-2'}>
            <span>{user.id} - {user.username}</span>
            <button onClick={handleClick} className='border'>Carts</button>
        </li>
    );
};