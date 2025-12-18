import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlice/userSlice.ts";
import {postSliceActions} from "../../redux/slices/postSlice/postSlice.ts";
import {commentSliceActions} from "../../redux/slices/commentSlice/commentSlice.ts";

export const ComplexPage = () => {
    const {userSlice: {users}, commentSlice: {comments}, postSlice: {posts}} = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!users) dispatch(userSliceActions.loadUsers());
        if (!posts) dispatch(postSliceActions.loadPosts());
        if (!comments) dispatch(commentSliceActions.loadComments());
    }, [])

    const allDataFetched = users && posts && comments
    if (!allDataFetched) return null;
    return (
        <div>
            <h2>Complex page</h2>
            <p>{allDataFetched ? ("YES") : "NO"}</p>
            {
                users.map((user) => (
                    <div key={user.id}>
                        User {user.id}
                        <ul>

                            {posts.filter((post) => post.userId === user.id).map((post) => (
                                <li key={post.id}>
                                    Post {post.id} of user {post.userId}
                                    <ul>

                                        {comments.filter((comment) => comment.postId === post.id).map((comment) => (
                                            <li>Comment {comment.id} of post {comment.postId} of
                                                user {post.userId}</li>))}
                                    </ul>
                                </li>))}
                        </ul>
                    </div>
                ))
            }
        </div>
    );
};