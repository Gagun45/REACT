import {useEffect, useState} from "react";
import {userService} from "../../../service/api.service.ts";
import type {PostType} from "../../../models/post/PostModel.ts";
import {PostsListComponent} from "../posts-list/PostsListComponent.tsx";

export const PostsDummyJsonComponent = () => {
    const [posts, setPosts] = useState<PostType[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const allPosts = await userService.getPosts.dummyjson()
            setPosts(allPosts);
        }
        fetchData()
    }, [])
    return (
        <div>
            <h2>posts dummyjson</h2>
            <PostsListComponent posts={posts} />
        </div>
    );
};