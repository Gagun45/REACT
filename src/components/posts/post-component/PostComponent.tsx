import type {FC} from "react";
import type {IPost} from "../../../models/post/postModel.ts";

type Props = { post: IPost };
export const PostComponent: FC<Props> = ({post: {id, title}}) => {
    return (
        <li>
            {id} - {title}
        </li>
    );
};