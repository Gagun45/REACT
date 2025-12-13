import {Outlet} from "react-router-dom";
import {MenuComponent} from "../components/menu/MenuComponent.tsx";

export const MainLayout = () => {
    return (
        <div>
            <h1>Main layout</h1>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};