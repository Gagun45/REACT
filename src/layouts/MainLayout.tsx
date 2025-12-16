import {Menu} from "../components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <div>
            <h1>Main layout</h1>
            <Menu/>
            <Outlet/>
        </div>
    );
};