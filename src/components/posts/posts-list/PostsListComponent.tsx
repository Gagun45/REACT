import type {FC} from "react";
import type {PostType} from "../../../models/post/PostModel.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

type Props = { posts: PostType[] };
export const PostsListComponent:FC<Props> = ({posts}) => {
    return (
        <ul>
            {posts.map((post) => (<PostComponent key={post.id} post={post}/>))}
        </ul>
    );
};