import {UsersComponent} from "../components/users/users-component/UsersComponent.tsx";
import {useSearchParams} from "react-router-dom";
import {PaginationComponent} from "../components/pagination/PaginationComponent.tsx";

export const UsersPage = () => {
    useSearchParams({skip: '0'})
    return (
        <>
            <h2>Users page</h2>
            <UsersComponent/>
            <PaginationComponent/>
        </>
    );
};