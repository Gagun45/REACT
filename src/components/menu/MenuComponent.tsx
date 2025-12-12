import {menuLinks} from "../../constants/MenuLinks.ts";
import {MenuLinkComponent} from "./menu-link/MenuLinkComponent.tsx";

export const MenuComponent = () => {
    return (
        <ul className="bg-slate-500 flex justify-evenly flex-wrap gap-2 p-4">
            {menuLinks.map((link) => (<MenuLinkComponent key={link.href} link={link}/>))}
        </ul>
    );
};