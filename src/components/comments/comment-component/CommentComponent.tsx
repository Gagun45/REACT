import type {FC} from "react";
import type {CommentType} from "../../../models/comment/CommentModel.ts";

type Props = { comment: CommentType };
export const CommentComponent:FC<Props> = ({comment: {id,body}}) => {
    return (
        <li className={'border'}>
            {id} - {body}
        </li>
    );
};