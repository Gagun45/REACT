import {useEffect, useState} from "react";
import {userService} from "../../../service/api.service.ts";
import type {PostType} from "../../../models/post/PostModel.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsJsonPlaceholderComponent = () => {
    const [posts, setPosts] = useState<PostType[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const allPosts = await userService.getPosts.jsonplaceholder()
            setPosts(allPosts);
        }
        fetchData()
    }, [])
    return (
        <div>
            <h2>posts jsonplaceholder</h2>
            <ul>
                {posts.map((post) => (<PostComponent key={post.id} post={post}/>))}
            </ul>
        </div>
    );
};