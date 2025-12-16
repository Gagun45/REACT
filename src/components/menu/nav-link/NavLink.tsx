import type {FC} from "react";
import type {INavLink} from "../../../models/nav-link/INavLink.ts";
import {Link} from "react-router-dom";

type Props = { link: INavLink };
export const NavLink: FC<Props> = ({link: {href, label}}) => {
    return (
        <li>
            <Link to={href}>{label}</Link>
        </li>
    );
};