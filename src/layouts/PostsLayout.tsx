import {Outlet} from "react-router-dom";

export const PostsLayout = () => {
    return (
        <div>
            <p className='bg-slate-400'>Posts layout</p>
            <Outlet/>
        </div>
    );
};