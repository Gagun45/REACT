import {Outlet} from "react-router-dom";
import {MenuComponent} from "../components/menu/MenuComponent.tsx";

export const MainLayout = () => {
    return (
        <>
            <h1>Main layout</h1>
            <MenuComponent/>
            <Outlet/>
        </>
    );
};