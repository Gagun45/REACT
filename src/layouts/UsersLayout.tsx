import {Outlet} from "react-router-dom";

export const UsersLayout = () => {
    return (
        <div>
            <p className='bg-slate-400'>Users layout</p>
            <Outlet/>
        </div>
    );
};