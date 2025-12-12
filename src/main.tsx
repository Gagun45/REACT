import {createRoot} from "react-dom/client";
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout.tsx";
import {UsersComponent} from "./components/users/UsersComponent.tsx";
import {PostsComponent} from "./components/posts/PostsComponent.tsx";
import {CommentsComponent} from "./components/comments/CommentsComponent.tsx";
import {ProductsComponent} from "./components/products/ProductsComponent.tsx";

createRoot(document.getElementById('root')!).render(<BrowserRouter>
    <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route path={'users'} element={<UsersComponent/>}/>
            <Route path={'posts'} element={<PostsComponent/>}/>
            <Route path={'comments'} element={<CommentsComponent/>}/>
            <Route path={'products'} element={<ProductsComponent/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
)
