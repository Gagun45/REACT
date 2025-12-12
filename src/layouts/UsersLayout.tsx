import {Outlet} from "react-router-dom";

export const UsersLayout = () => {
    return (
        <div>
            <p className='font-semibold bg-slate-300 mt-2'>Users layout</p>
            <Outlet/>
        </div>
    );
};