import {useEffect, useState} from "react";
import type {IComment} from "../../models/CommentModel.ts";
import {getComments} from "../../service/api.service.ts";
import Comment from "../comment/Comment.tsx";

export const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const allComments = await getComments();
            setComments(allComments);
        }
        fetchData();
    },[])
    return (
        <ul className='bg-slate-400 p-4'>
            {comments.map((comment) => (<Comment key={comment.id} comment={comment} />))}
        </ul>
    );
};