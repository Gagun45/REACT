import type {IComment} from "../../models/CommentModel.ts";
import type {FC} from "react";

type CommentProps = {
    comment: IComment;
}

export const Comment: FC<CommentProps> = ({comment: {id, name}}) => {
    return (
        <li className='border mb-2'>{id} - {name}</li>
    );
};
export default Comment;