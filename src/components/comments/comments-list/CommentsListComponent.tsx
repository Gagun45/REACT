import {CommentComponent} from "../comment-component/CommentComponent.tsx";
import type {FC} from "react";
import type {CommentType} from "../../../models/comment/CommentModel.ts";

type Props = { comments: CommentType[] };
export const CommentsListComponent:FC<Props> = ({comments}) => {
    return (
        <ul>
            {comments.map((comment) => (<CommentComponent key={comment.id} comment={comment}/>))}
        </ul>
    );
};