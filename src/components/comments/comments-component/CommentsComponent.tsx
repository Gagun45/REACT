import {useAppSelector} from "../../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";
import {commentSliceActions} from "../../../redux/slices/commentSlice/commentSlice.ts";

export const CommentsComponent = () => {
    const {comments} = useAppSelector(state => state.commentSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(commentSliceActions.loadComments())
    }, [])
    return (
        <div>
            <h3>Comments component</h3>
            <ul>
                {comments && comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
            </ul>
        </div>
    );
};