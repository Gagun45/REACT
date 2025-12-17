import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/users/UsersPage.tsx";
import {CommentsPage} from "../pages/comments/CommentsPage.tsx";
import {PostsPage} from "../pages/posts/PostsPage.tsx";
import {ComplexPage} from "../pages/complex/ComplexPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>,
        children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'complex', element: <ComplexPage/>},
        ]}
])