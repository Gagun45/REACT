import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import {UsersComponent} from "../components/users/UsersComponent.tsx";
import {PostsComponent} from "../components/posts/PostsComponent.tsx";
import {CommentsComponent} from "../components/comments/CommentsComponent.tsx";
import {ProductsComponent} from "../components/products/ProductsComponent.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <Layout/>,
    children: [
        {path: 'users', element: <UsersComponent/> },
        {path: 'posts', element: <PostsComponent/> },
        {path: 'comments', element: <CommentsComponent/> },
        {path: 'products', element: <ProductsComponent/> },
    ]},


])