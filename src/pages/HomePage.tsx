import {UsersComponent} from "../components/users/users-component/UsersComponent.tsx";
import {Outlet} from "react-router-dom";

export const HomePage = () => {
    return (
        <>
            <h1>Homepage</h1>
            <UsersComponent />
            <Outlet/>
        </>
    );
};