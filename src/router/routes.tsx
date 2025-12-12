import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {
    UsersJsonPlaceholderComponent
} from "../components/users/users-jsonplaceholder/UsersJsonPlaceholderComponent.tsx";
import {UsersDummyJsonComponent} from "../components/users/users-dummyjson/UsersDummyJsonComponent.tsx";
import {UsersLayout} from "../layouts/UsersLayout.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [
            {
                path: 'users', element: <UsersLayout/>,
                children: [
                    {path: 'jsonplaceholder', element: <UsersJsonPlaceholderComponent/>},
                    {path: 'dummyjson', element: <UsersDummyJsonComponent/>}
                ]
            }
        ]
    },
])