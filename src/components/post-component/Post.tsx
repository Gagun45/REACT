import type {IPost} from "../../models/PostModel.ts";
import type {FC} from "react";

interface PostProps {
    post: IPost;
}

const Post:FC<PostProps> = ({post}) => {
    return (
        <li className='border'>{post.id} - {post.title}</li>
    );
};

export default Post;