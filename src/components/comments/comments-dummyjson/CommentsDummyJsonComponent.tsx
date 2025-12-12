import {useEffect, useState} from "react";
import {userService} from "../../../service/api.service.ts";
import type {CommentType} from "../../../models/comment/CommentModel.ts";
import {CommentsListComponent} from "../comments-list/CommentsListComponent.tsx";

export const CommentsDummyJsonComponent = () => {
    const [comments, setComments] = useState<CommentType[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const allComments = await userService.getComments.dummyjson()
            setComments(allComments);
        }
        fetchData()
    }, [])
    return (
        <div>
            <h2>comments dummyjson</h2>
            <CommentsListComponent comments={comments} />
        </div>
    );
};