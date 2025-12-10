import {useEffect, useState} from "react";
import type {IPost} from "../../models/PostModel.ts";
import {getPosts} from "../../service/api.service.ts";
import Post from "../post-component/Post.tsx";

export const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getPosts()
            setPosts(data)
        }
        fetchData()
    },[])
    return (
        <ul className='bg-slate-400 p-4 space-y-2'>
            {posts.map((post) => (<Post key={post.id} post={post}/>))}
        </ul>
    );
};