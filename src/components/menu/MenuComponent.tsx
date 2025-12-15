import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <ul className="bg-slate-400 flex justify-center gap-4">
            <li className={'border'}><Link to={'cars'}>Cars</Link></li>
            <li className={'border'}><Link to={'cars/new'}>Add new car</Link></li>
        </ul>
    );
};