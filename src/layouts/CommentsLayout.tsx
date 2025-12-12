import {Outlet} from "react-router-dom";

export const CommentsLayout = () => {
    return (
        <div>
            <p className='font-semibold bg-slate-300 mt-2'>Comments layout</p>
            <Outlet/>
        </div>
    );
};