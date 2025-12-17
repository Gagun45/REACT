import type {FC} from "react";
import type {IPost} from "../../../models/post/IPost.ts";

type Props = { post: IPost };
export const PostComponent:FC<Props> = ({post}) => {
    return (
        <li>
            Post {post.id} - User {post.userId}
        </li>
    );
};