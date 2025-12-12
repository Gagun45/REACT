import {Outlet} from "react-router-dom";

export const PostsLayout = () => {
    return (
        <div>
            <p className='font-semibold bg-slate-300 mt-2'>Posts layout</p>
            <Outlet/>
        </div>
    );
};