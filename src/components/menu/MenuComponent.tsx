import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <ul className="border w-fit p-4 space-y-2">
            <li>
                <Link to={'users'}>users</Link>
            </li>
            <li><Link to={'posts'}>posts</Link></li>
            <li><Link to={'comments'}>comments</Link></li>
            <li><Link to={'products'}>products</Link></li>
        </ul>
    );
};

export default MenuComponent;