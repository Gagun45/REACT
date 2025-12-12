import {Outlet} from "react-router-dom";

export const CommentsLayout = () => {
    return (
        <div>
            <p className='bg-slate-400'>Comments layout</p>
            <Outlet/>
        </div>
    );
};