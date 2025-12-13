import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <ul className="flex justify-center gap-4 bg-slate-500">
            <li className='border px-2'><Link to={'users'}>users</Link> </li>
            <li className='border px-2'><Link to={'posts'}>posts</Link> </li>
        </ul>
    );
};