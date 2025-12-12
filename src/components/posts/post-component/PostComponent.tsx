import type {FC} from "react";
import type {PostType} from "../../../models/post/PostModel.ts";

type Props = { post: PostType };
export const PostComponent:FC<Props> = ({post: {id, body}}) => {
    return (
        <li className={'border'}>
            {id} - {body}
        </li>
    );
};