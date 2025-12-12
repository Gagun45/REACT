import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {
    UsersJsonPlaceholderComponent
} from "../components/users/users-jsonplaceholder/UsersJsonPlaceholderComponent.tsx";
import {UsersDummyJsonComponent} from "../components/users/users-dummyjson/UsersDummyJsonComponent.tsx";
import {UsersLayout} from "../layouts/UsersLayout.tsx";
import {PostsLayout} from "../layouts/PostsLayout.tsx";
import {
    PostsJsonPlaceholderComponent
} from "../components/posts/posts-jsonplaceholder/PostsJsonPlaceholderComponent.tsx";
import {PostsDummyJsonComponent} from "../components/posts/posts-dummyjson/PostsDummyJsonComponent.tsx";

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
            },
            {
                path: 'posts', element: <PostsLayout/>,
                children: [
                    {path: 'jsonplaceholder', element: <PostsJsonPlaceholderComponent/>},
                    {path: 'dummyjson', element: <PostsDummyJsonComponent/>}
                ]
            }
        ]
    },
])