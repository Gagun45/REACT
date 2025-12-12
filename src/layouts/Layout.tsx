import {Outlet} from "react-router-dom";
import MenuComponent from "../components/menu/MenuComponent.tsx";

const Layout = () => {
    return (
        <div>
            <MenuComponent/>
            <p>Layout component</p>
            <Outlet/>
        </div>
    );
};
export default Layout;