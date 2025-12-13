import {useEffect, useState} from "react";
import type {IPost} from "../../../models/post/postModel.ts";
import {apiService} from "../../../service/api.service.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const allPosts = await apiService.posts.getPosts()
            setPosts(allPosts)
        }
        fetchData()
    }, []);
    return (
        <ul>
            {posts.map((post) => (<PostComponent key={post.id} post={post} />))}
        </ul>
    );
};