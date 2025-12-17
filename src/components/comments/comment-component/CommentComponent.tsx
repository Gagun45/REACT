import type {FC} from "react";
import type {IComment} from "../../../models/comment/IComment.ts";

type Props = { comment: IComment };
export const CommentComponent:FC<Props> = ({comment:{name,postId,id}}) => {
    return (
        <li>
            Comment {id} - Post {postId} - {name}
        </li>
    );
};