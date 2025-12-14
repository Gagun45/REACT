import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <>
            <h1>Main layout</h1>
            <Outlet/>
        </>
    );
};