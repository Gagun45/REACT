import type {FC} from "react";
import type {IMenuLink} from "../../../models/menu-link/MenuLinkModel.ts";
import {Link} from "react-router-dom";

type Props = { link: IMenuLink };

export const MenuLinkComponent: FC<Props> = ({link: {href, label}}) => {
    return (
        <li className='border px-2 hover:bg-slate-400'>
            <Link to={href}>{label}</Link>
        </li>
    );
};