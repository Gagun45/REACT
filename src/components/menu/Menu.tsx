import {NavLinks} from "../../constants/NavLinks.ts";
import {NavLink} from "./nav-link/NavLink.tsx";

export const Menu = () => {
    return (
        <ul className={'flex bg-slate-400 py-2 justify-center gap-4'}>
            {NavLinks.map(link => (<NavLink key={link.label} link={link}/>))}
        </ul>
    );
};