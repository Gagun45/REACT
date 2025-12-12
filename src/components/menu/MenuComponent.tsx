import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <ul className='bg-slate-400 flex justify-evenly flex-wrap py-2'>
            <li>
                <Link to='/users/jsonplaceholder' >users-jsonplaceholder</Link>
            </li>
            <li>
                <Link to='/users/dummyjson' >users-dummyjson</Link>
            </li>
            <li>
                <Link to='/posts/jsonplaceholder' >posts-jsonplaceholder</Link>
            </li>
            <li>
                <Link to='/posts/dummyjson' >posts-dummyjson</Link>
            </li>
            <li>
                <Link to='/comments/jsonplaceholder'>comments-dummyjson</Link>
            </li>
        </ul>
    );
};