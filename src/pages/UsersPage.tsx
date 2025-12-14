import {UsersComponent} from "../components/users/users-component/UsersComponent.tsx";
import {useSearchParams} from "react-router-dom";

export const UsersPage = () => {
    useSearchParams({skip: '0'})
    return (
        <>
            <h2>Users page</h2>
            <UsersComponent/>
        </>
    );
};